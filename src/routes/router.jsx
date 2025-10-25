import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../layouts/pages/Home";
import CategoryToys from "../layouts/pages/CategoryToys";
import Login from "../layouts/pages/Login";
import Register from "../layouts/pages/Register";
import AuthLayouts from "../layouts/AuthLayouts";



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
            ]
        },
        {
            path:"/toys",
            element:<h2>Toys Layout</h2>
        },
        {
            path:"/*",
            element:<h2>Error 404</h2>
        },
    ]
);

export default router;