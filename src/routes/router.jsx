import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../layouts/pages/Home";
import CategoryToys from "../layouts/pages/CategoryToys";



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
            element:<h2>Authentication Layout</h2>
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