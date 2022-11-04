import NextProgressBar from "nextjs-progressbar";
import type { AppProps } from "next/app";
import "../styles/globals.scss";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextProgressBar
        color="#eb601e"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
      />
      <Component {...pageProps} />
    </>
  );
}
