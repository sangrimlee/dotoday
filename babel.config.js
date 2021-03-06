module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-react', '@babel/typescript'],
  plugins: [
    '@babel/plugin-transform-runtime',
    [
      'babel-plugin-root-import',
      {
        rootPathSuffix: 'src/',
        rootPathPrefix: '@/',
      },
    ],
  ],
  env: {
    production: {
      only: ['src'],
    },
  },
};
