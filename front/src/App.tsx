import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import { TonConnectUIProvider } from "@tonconnect/ui-react";
import UserPage from "./pages/UserPage/UserPage";
import UndefinedPage from "./pages/UndefinedPage";

const router = createBrowserRouter([
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

function App() {
    return (
        <>
            <TonConnectUIProvider manifestUrl="https://raw.githubusercontent.com/brokqwiks/ton-marketplace/main/manifest.json">
                <Header />
                <RouterProvider router={router} />
            </TonConnectUIProvider>
        </>
    );
}

export default App;
