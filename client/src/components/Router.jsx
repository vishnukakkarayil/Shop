// import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import {BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'
import Home from '../pages/Home';
import ProductList from '../pages/ProductList';
import Product from '../pages/Product';
import Register from '../pages/Register';
import Login from '../pages/Login';
import Cart from '../pages/Cart';

const Router = () => {

    // const Layout = () => {
    //     return(
    //         <>
    //             <Header />
    //             <Outlet />
    //             <Footer />
    //         </>    
    //     )
    // }
    const BrowserRoutes = () => {
        return(
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/products/:category' element={<ProductList />} />
                    <Route path='/product/:id' element={<Product />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/cart' element={<Cart />} />

                </Routes>
            </BrowserRouter>
        )
    }
  return (
    <BrowserRoutes />
  )
}

export default Router