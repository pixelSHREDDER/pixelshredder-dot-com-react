import Script from 'next/script';
import { useEffect, useState } from 'react';
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  const [startingUp, setStartingUp] = useState(true);
  const [lightsOut, setLightsOut] = useState(false);

  useEffect(() => {
    !!lightsOut ? document.body.classList.add('nighttime') : document.body.classList.remove('nighttime');
  }, [lightsOut]);

  useEffect(() => {
    const startupTimeout = setTimeout(() => setStartingUp(false), 4000);

    return (() => clearTimeout(startupTimeout));
  }, []);
  
  return (
    <>
      <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS_ID}`} />
      <Script
        id='google-analytics'
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', '${process.env.GOOGLE_ANALYTICS_ID}');
          `,
        }}
      />
      <Component {...pageProps}
        lightsOut={lightsOut}
        setLightsOut={setLightsOut}
        startingUp={startingUp}
        />
    </>
  )
}