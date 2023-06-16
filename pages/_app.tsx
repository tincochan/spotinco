import { useState, useEffect } from "react";
import type { AppProps } from "next/app";
import "../styles/globals.scss";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [isSSR, setIsSSR] = useState(true);

  useEffect(() => {
    setIsSSR(false);
  }, []);

  if (isSSR) return null;

  return (
    <main>
      <div>
        <Component {...pageProps} />
      </div>
    </main>
  );
};

export default MyApp;
