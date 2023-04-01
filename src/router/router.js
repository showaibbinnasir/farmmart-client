import { createBrowserRouter } from "react-router-dom";
import ErrorRout from "../components/ErrorRout/ErrorRout";
import Homepage from "../components/Homepage/Homepage";
import Login from "../components/Login/Login";
import ProductDetails from "../components/ProductDetails/ProductDetails";
import Registration from "../components/Registration/Registration";
import Deafult from "../layout/Deafult";
import PrivateRouter from "../components/PrivateRouter/PrivateRouter";
import Animals from "../components/Animals/Animals";
import Needs from "../components/Needs/Needs";
import NeedsPosts from "../components/NeedsPosts/NeedsPosts";
import CheckOut from "../components/CheckOut/CheckOut";
import Dashboard from "../components/Dashboard/Dashboard";
import DashboardLayout from "../layout/DashboardLayout";
import Profile from "../components/Dashboard/Profile";
import Orders from "../components/Orders/Orders";

const getFromLocal = localStorage.getItem('cart');
const parsedItem = JSON.parse(getFromLocal)

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
                element: <PrivateRouter><ProductDetails></ProductDetails></PrivateRouter>,
                loader: ({params})=> fetch(`http://localhost:5000/product/${params.id}`)
            },
            {
                path: '/animals',
                element: <Animals></Animals>,
                loader: () => fetch('http://localhost:5000/all_animals')
            },
            {
                path: '/needs',
                element: <Needs></Needs>
            },
            {
                path: '/needsDetails/:id',
                element: <PrivateRouter><NeedsPosts></NeedsPosts></PrivateRouter>,
                loader: ({params})=> fetch(`http://localhost:5000/needsproduct/${params.id}`)
            },
            {
                path: '/checkout',
                element : <CheckOut items = {parsedItem}></CheckOut>
            },
            {
                path: '/dashboard',
                element: <PrivateRouter><DashboardLayout></DashboardLayout></PrivateRouter>,
                children: [
                    {
                        path: '/dashboard',
                        element: <Profile></Profile>
                    },
                    {
                        path: '/dashboard/orders',
                        element: <Orders></Orders>
                    }
                ]
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