import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Login from './pages/Login';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Login />
  </BrowserRouter>
);