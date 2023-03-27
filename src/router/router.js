import { createBrowserRouter } from "react-router-dom";
import ErrorRout from "../components/ErrorRout/ErrorRout";
import Homepage from "../components/Homepage/Homepage";
import Login from "../components/Login/Login";
import ProductDetails from "../components/ProductDetails/ProductDetails";
import Registration from "../components/Registration/Registration";
import Deafult from "../layout/Deafult";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Deafult></Deafult>,
        errorElement: <ErrorRout></ErrorRout>,
        children: [
            {
                path: '/',
                element : <Homepage></Homepage>
            },
            {
                path: '/home',
                element : <Homepage></Homepage>
            },
            {
                path: '/product/:id',
                element : <ProductDetails></ProductDetails>,
                loader: ()=> fetch('posts.json')
            }
        ]


    },
    {
        path: '/login',
        element: <Login></Login>,
        errorElement: <ErrorRout></ErrorRout>,
    },
    {
        path: '/register',
        element: <Registration></Registration>,
        errorElement: <ErrorRout></ErrorRout>
    }
])

export default router;