import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../layouts/pages/Home";
import CategoryToys from "../layouts/pages/CategoryToys";
import Login from "../layouts/pages/Login";
import Register from "../layouts/pages/Register";
import AuthLayouts from "../layouts/AuthLayouts";
import ToysDetails from "../layouts/pages/ToysDetails";
import ErrorPage from "../components/ErrorPage";
import PrivateRoute from "../provider/PrivateRoute";

import About from "../components/About";
import Details from "../layouts/pages/Details";
import Loading from "../layouts/pages/Loading";




const router= createBrowserRouter(
    [
        {
            path:"/",
            element:<HomeLayout></HomeLayout>,
            children:[
                {
                    path:"",
                    element:<Home></Home>
                },
                {
                    path:"/category/:id",
                    element:<CategoryToys></CategoryToys>,
                    loader:()=>fetch("/toys.json"),
                    hydrateFallbackElement: <Loading></Loading>,
                },
                
            ]
        },
        {
            path:"/auth",
            element:<AuthLayouts></AuthLayouts>,
            children:[
                {
                    path:"/auth/login",
                    element:<Login></Login>,
                },
                {
                    path:"/auth/register",
                    element:<Register></Register>,
                },
                {
                  path:"/auth/about",
                  element: <About></About>,
                },
                
                
            ]
        },
        {
            path:"/toys-details/:id",
            element:<PrivateRoute>
                <ToysDetails></ToysDetails>
            </PrivateRoute>,
            loader: () => fetch("/toys.json"),
            hydrateFallbackElement: <Loading></Loading>,
        },
        {
            path:"/*",
            element:<ErrorPage></ErrorPage>,
        },
        {
            path: "/details",
            element: <Details></Details>,
             loader: () => fetch("/toys.json"),
             hydrateFallbackElement: <Loading></Loading>,

        },

        
    ]
);

export default router;