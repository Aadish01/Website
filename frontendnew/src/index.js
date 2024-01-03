import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import CartProvider from './hooks/useCart';
import { LoadingProvider } from './hooks/useLoading';
import './axiosConfig';
import { Toaster } from 'react-hot-toast';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <LoadingProvider>
        <CartProvider>
          <App />
          <Toaster position="top-right" />
        </CartProvider>
      </LoadingProvider>
    </BrowserRouter>
  </React.StrictMode>
);
