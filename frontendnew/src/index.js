import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter, HashRouter} from 'react-router-dom';
import CartProvider from './hooks/useCart';
import './axiosConfig';
import { Toaster } from 'react-hot-toast';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <CartProvider>
      <App />
      <Toaster position="top-right" />
    </CartProvider>
    </BrowserRouter>
  </React.StrictMode>
);
