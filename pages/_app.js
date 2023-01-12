import { useEffect } from 'react';
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  /*useEffect(() => {
    const loader = document.getElementById('globalLoader');
    if (loader) {
      loader.style.display = 'block';
  }
    if (typeof window !== 'undefined') {
      setTimeout(() => {  
        if (loader) {
            loader.style.display = 'none';
        }
      }, 2000);
    } else {
      if (loader) {
        loader.style.display = 'block';
    }
    }
}, []);*/
  
  return <Component {...pageProps} />;
}