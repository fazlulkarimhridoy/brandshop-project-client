import ReactDOM from 'react-dom/client'
import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './Components/Root/Root';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import Login from './Routes/Login/Login';
import Home from './Routes/Home/Home';
import Register from './Routes/Register/Register';
import AddProducts from './Components/AddProducts/AddProducts';
import MyCart from './Components/MyCart/MyCart';
import Products from './Components/Products/Products';
import BrandProducts from './Components/BrandProducts/BrandProducts';
import ProductDetails from './Components/ProductDetails/ProductDetails';
import UpdateProducts from './Components/UpdateProducts/UpdateProducts';
import AuthProvider from './providers/AuthProvider';
import PrivateRoute from './Routes/PrivateRoute/PrivateRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/addProducts",
        element: <PrivateRoute><AddProducts></AddProducts></PrivateRoute>
      },
      {
        path: "/myCart",
        element: <PrivateRoute><MyCart></MyCart></PrivateRoute>,
        loader: () => fetch('https://brand-shop-server-oibkfsmlr-fazlulkarimhridoy.vercel.app/carts')
      },
      {
        path: "/products",
        element: <Products></Products>,
        loader: () => fetch('https://brand-shop-server-oibkfsmlr-fazlulkarimhridoy.vercel.app/products')
      },
      {
        path: "/allProducts/:brand",
        element: <BrandProducts></BrandProducts>,
        loader: ({ params }) => fetch(`https://brand-shop-server-oibkfsmlr-fazlulkarimhridoy.vercel.app/allProducts/${params.brand}`)
      },
      {
        path: "/product/:id",
        element: <PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>,
        loader: ({ params }) => fetch(`https://brand-shop-server-oibkfsmlr-fazlulkarimhridoy.vercel.app/product/${params.id}`)
      },
      {
        path: "/updateProduct/:id",
        element: <PrivateRoute><UpdateProducts></UpdateProducts></PrivateRoute>,
        loader: ({ params }) => fetch(`https://brand-shop-server-oibkfsmlr-fazlulkarimhridoy.vercel.app/product/${params.id}`)
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
