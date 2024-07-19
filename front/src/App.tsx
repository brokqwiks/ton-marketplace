import Header from "./components/Header/Header";
import { RouterProvider } from "react-router-dom";
import { TonConnectUIProvider } from "@tonconnect/ui-react";
import { router } from "./router/router";


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
