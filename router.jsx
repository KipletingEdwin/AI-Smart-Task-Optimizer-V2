import { createBrowserRouter } from "react-router";
import { AuthLayout } from "./src/pages/AuthLayout";
import { NotFound } from "./src/pages/NotFound";



const router = createBrowserRouter([
    {
        path: '/',
        element: <AuthLayout/>,
        errorElement: <NotFound/>
    }
]);

export default router;