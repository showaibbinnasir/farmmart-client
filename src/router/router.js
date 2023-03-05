import { createBrowserRouter } from "react-router-dom";
import Homepage from "../components/Homepage/Homepage";
import Deafult from "../layout/Deafult";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Deafult></Deafult>,
        children: [
            {
                path: '/',
                element : <Homepage></Homepage>
            }
        ]


    }
])

export default router;