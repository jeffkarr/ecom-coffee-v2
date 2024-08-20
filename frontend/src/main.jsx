import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import HomePage from './pages/HomePage';
import CoffeePage from './pages/CoffeePage';
import DealPage from './pages/DealPage';
import TeasPage from './pages/TeasPage';
import AccessoriesPage from './pages/AccessoriesPage';
import WishPage from './pages/WishPage';
import CartPage from './pages/CartPage';
import NotFoundPage from './pages/NotFoundPage';

import './index.css'
import './bootstrap.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
    errorElement: <NotFoundPage />
  },
  {
    path: '/home',
    element: <HomePage />,
    errorElement: <NotFoundPage />
  },
  {
    path: '/coffees',
    element: <CoffeePage />,
    errorElement: <NotFoundPage />
  },
  {
    path: '/deals',
    element: <DealPage />,
    errorElement: <NotFoundPage />
  },
  {
    path: '/teas',
    element: <TeasPage />,
    errorElement: <NotFoundPage />
  },
  {
    path: '/accessories',
    element: <AccessoriesPage />,
    errorElement: <NotFoundPage />
  },
  {
    path: '/wish',
    element: <WishPage />,
    errorElement: <NotFoundPage />
  },
  {
    path: '/cart',
    element: <CartPage />,
    errorElement: <NotFoundPage />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
