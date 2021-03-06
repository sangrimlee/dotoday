const path = require('path');
const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  mode: isProduction ? 'production' : 'development',
  entry: { app: path.join(__dirname, 'src/index.tsx') },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: isProduction ? '[contenthash:8].js' : '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/i,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: {
          loader: 'url-loader',
          options: {
            limit: 8192,
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  plugins: [
    new Dotenv({
      path: isProduction ? '.env.production' : '.env.development',
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: isProduction ? '[contenthash:8].css' : 'styles.css',
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      minify: isProduction,
    }),
  ],
  devServer: {
    historyApiFallback: true,
    hot: true,
    port: 3000,
  },
  optimization: {
    minimize: isProduction,
  },
};
