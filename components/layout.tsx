import Head from 'next/head'
import Image from 'next/image';
import styles from './layout.module.css';
import { Press_Start_2P, VT323 } from '@next/font/google';
import { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/router';
import clsx from 'clsx';

type LayoutProps = {
    children: React.ReactNode,
  };

export const title = Press_Start_2P({
    subsets: ['latin'],
    weight: ['400'],
});

export const text = VT323({
    subsets: ['latin'],
    weight: ['400'],
});

export default function Layout({ children }: LayoutProps) {
  /*function startup() {
    let startTime = performance.now();
    while (performance.now() - startTime < 2000) {
      // Do nothing for 500 ms to emulate extremely slow code
    }

    return true;
  }*/

  /*const [startingUp, setStartingUp] = useState(true);
  
  useEffect(() => {
setTimeout(() => setStartingUp(false), 2000);
  }, []);*/
  const { asPath } = useRouter();
  /*const startedUp = useMemo(() => {
    setTimeout(() => true, 2000);
  }, []);*/

  const [startingUp, setStartingUp] = useState(true);
  
  useEffect(() => {
    setTimeout(() => setStartingUp(false), 2000);
  }, []);
    return (
        <div className={styles.container}>
<Image
    src="/images/tv-frame.svg"
    fill
    alt="Your Name"
    className={styles.tvframe}
    priority
  />
  <Image
    src="/images/tv-bezel.svg"
    fill
    alt="Your Name"
    className={styles.tvbezel}
  />
  <Image
    src="/images/tv-glow.svg"
    fill
    alt="Your Name"
    className={clsx([styles.tvglow], {
      [styles.startuptvglow]: startingUp && asPath === '/',
      [styles.hometvglow]: !startingUp && asPath === '/',
      [styles.resumestvglow]: asPath === '/resumes',
    })}
  />
  <div className={clsx([styles.scanlines], {
    [styles.sectionscanlines]: !startingUp && asPath !== '/',
    [styles.homescanlines]: !startingUp && asPath === '/',
    [styles.resumesscanlines]: asPath === '/resumes',
  })}>
  <div className={styles.screen}>
      <Head>
        <title>Mike DeVine | Developer - Designer - Creative</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/*<Image
    src="/vercel.svg"
    fill
    alt="Your Name"
    className={styles.startup}
    id="globalLoader"
    />*/}
      <main className={styles.main}>
  {children}
        </main>
        {/*<footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel" className={styles.logo} />
        </a>
  </footer>*/}

      <style jsx>{`
        main {
          padding: 4rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: ${text.style.fontFamily}, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
            background-color: #222;
        }
        * {
          box-sizing: border-box;
        }
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
            font-family: ${title.style.fontFamily}, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
      `}</style>
      </div>
    </div>
    </div>
        );
  }
  