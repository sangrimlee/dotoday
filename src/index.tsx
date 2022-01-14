import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/tailwind.css';
import AuthProvider from './contexts/AuthContext';
import ThemeProvider from './contexts/ThemeContext';

import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
