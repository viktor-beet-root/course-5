import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter, Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './layout/Home.jsx';
import Moves from './layout/Moves.jsx';
import Tv from './layout/Tv.jsx';
import CheckoutPage from './pages/CheckoutPage.jsx';
import Checkout from './layout/Checkout.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                //index: true, 
                //element: <Home />,
                lazy: () => import('./layout/Home.jsx')
                //element: <Navigate to="/moves" />
            },
            {
                path: '/moves',
                //element: <Moves />
                lazy: () => import('./layout/Moves.jsx'),
            },
            {
                path: '/tv',
                //element: <Tv />
                lazy: () => import('./layout/Tv.jsx')
            },
        ]
    },
    {
        path: '*',
        element: <NotFoundPage />
    },
    {
        path: '/checkout',
        element: <CheckoutPage />,
        children: [
            {
                path: '/checkout',
                element: <Checkout />
            },
        ],
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
        {/* <BrowserRouter> */}
        {/* <App /> */}
        {/* </BrowserRouter> */}
    </React.StrictMode>,
);
