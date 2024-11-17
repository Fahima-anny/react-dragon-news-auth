import { createBrowserRouter, Navigate  } from "react-router-dom";
import Home from "../Layout/Home";
import CategoryNews from "../Pages/CategoryNews";
import AuthLayout from "../Layout/AuthLayout";
import Login from "../Layout/Login";
import Register from "../Components/Register";
import NewsDetails from "../Layout/NewsDetails";
import PrivateRoute from "./PrivateRoute";

const Router = createBrowserRouter([
    {
        path: '/',
        element: <Home></Home>,
        children: [
            {
                path: '/',
                element: <Navigate to='/category/01'></Navigate>
            },
            {
                path: '/category/:id',
                element: <CategoryNews></CategoryNews>,
                loader: ({params}) => fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
            }
        ]
    } ,
    {
        path: '/news/:id',
        element: <PrivateRoute><NewsDetails></NewsDetails></PrivateRoute> ,
        loader: ({params}) => fetch(`https://openapi.programming-hero.com/api/news/${params.id}`)
    } ,
    {
        path: '/auth',
        element: <AuthLayout></AuthLayout> ,
        children: [
            {
                path: '/auth/login',
                element: <Login></Login>
            },
            {
                path: '/auth/register',
                element: <Register></Register>
            },
        ]
    } ,
    {
        path: '*',
        element: <h1>Error</h1>
    } ,
])

export default Router ;