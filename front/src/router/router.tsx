import { createBrowserRouter } from "react-router-dom";
import UserPage from "../pages/UserPage/UserPage";
import UndefinedPage from "../pages/UndefinedPage";
import Home from "../pages/Home";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/user/:id",
        element: <UserPage />,
    },
    {
        path: "*",
        element: <UndefinedPage />,
    },
]);