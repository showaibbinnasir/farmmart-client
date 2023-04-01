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
                loader: ({params})=> fetch(`https://farmmart-backend-showaibbinnasir.vercel.app/product/${params.id}`)
            },
            {
                path: '/animals',
                element: <Animals></Animals>,
                loader: () => fetch('https://farmmart-backend-showaibbinnasir.vercel.app/all_animals')
            },
            {
                path: '/needs',
                element: <Needs></Needs>
            },
            {
                path: '/needsDetails/:id',
                element: <PrivateRouter><NeedsPosts></NeedsPosts></PrivateRouter>,
                loader: ({params})=> fetch(`https://farmmart-backend-showaibbinnasir.vercel.app/needsproduct/${params.id}`)
            },
            {
                path: '/checkout',
                element : <CheckOut items = {parsedItem}></CheckOut>
            },
            {
                path: '/dashboard',
                element: <h1>This is users dashboard</h1>
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