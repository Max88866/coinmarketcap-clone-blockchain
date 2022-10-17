import "../styles/globals.css";
import type { AppProps } from "next/app";
import { CoinMarketProvider } from "../context/context";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CoinMarketProvider>
      <Component {...pageProps} />
    </CoinMarketProvider>
  );
}

export default MyApp;
