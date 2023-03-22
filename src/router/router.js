import { createBrowserRouter } from "react-router-dom";
import ErrorRout from "../components/ErrorRout/ErrorRout";
import Homepage from "../components/Homepage/Homepage";
import Login from "../components/Login/Login";
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
            }
        ]


    },
    {
        path: '/login',
        element: <Login></Login>,
        errorElement: <ErrorRout></ErrorRout>,
    }
])

export default router;