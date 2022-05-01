import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Base } from "components";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Base>
      <Component {...pageProps} />
    </Base>
  );
}

export default MyApp;
