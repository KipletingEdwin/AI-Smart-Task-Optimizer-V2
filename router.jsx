import { createBrowserRouter } from "react-router";
import { AuthLayout } from "./src/pages/AuthLayout";
import { NotFound } from "./src/pages/NotFound";
import { Login } from "./src/pages/Login";
import { SignUp } from "./src/pages/SignUp";



const router = createBrowserRouter([
    {
        path: '/',
        element: <AuthLayout/>,
        errorElement: <NotFound/>
    },
    {
        path: '/login',
        element: <Login/>
    },
    {
        path: '/signup',
        element: <SignUp/>
    }
]);

export default router;