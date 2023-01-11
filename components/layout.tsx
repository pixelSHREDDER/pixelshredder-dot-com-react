import Head from 'next/head'
import Image from 'next/image';
import styles from './layout.module.css';
import { Press_Start_2P, VT323 } from '@next/font/google';

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
    return (
        <div className={styles.container}>
<Image
    src="/images/tv-frame.svg"
    fill
    alt="Your Name"
    className={styles.tvframe}
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
    className={styles.tvglow}
  />
  <div className={styles.scanlines}>
  <div className={styles.screen}>
      <Head>
        <title>Mike DeVine | Developer - Designer - Creative</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {children}
        </main>
        <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel" className={styles.logo} />
        </a>
      </footer>

      <style jsx>{`
        main {
          padding: 5rem 0;
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
  