import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './pages/Home';
import Forum from './pages/Fórum';
import Pratique from './pages/Pratique';
import Login from './pages/login';
import Cadastro from './pages/Cadastro';
import './main.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/forum',
    element: <Forum />,
  },
  {
    path: '/pratique',
    element: <Pratique />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/Cadastro',
    element: <Cadastro />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

