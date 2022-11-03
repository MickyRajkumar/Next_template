import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useRef, useEffect } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  const load = useRef(false);

  useEffect(() => {
    if (load.current) return;

    const c = 'Chatra';
    const w = window as any;
    w.ChatraID = 'EAhAAjuRtxKuKphPN';
    w.ChatraSetup = {
      colors: {
        buttonBg: '#009245' /* chat button background color */
      }
    };
    w[c] = w[c] || (() => (w[c].q = w[c].q || []).push([document, window, c]));

    const s = document.createElement('script');
    s.async = true;
    s.src = 'https://call.chatra.io/chatra.js';
    if (document.head) document.head.appendChild(s);
    load.current = true;
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
