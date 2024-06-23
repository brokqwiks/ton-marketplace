import Header from "./components/Header/Header"
import Home from "./pages/Home/Home"
import { TonConnectUIProvider } from '@tonconnect/ui-react';

function App() {
  return (
    <>
    <TonConnectUIProvider manifestUrl="https://raw.githubusercontent.com/brokqwiks/ton-marketplace/main/manifest.json">
      <Header />
      <Home />
    </TonConnectUIProvider>
    </>
  )
}

export default App