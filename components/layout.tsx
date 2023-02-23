import Image from 'next/image';
import styles from './layout.module.css';
import { Press_Start_2P, VT323 } from '@next/font/google';
import { useEffect, useState } from 'react';
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
  const { asPath } = useRouter();
  const [startingUp, setStartingUp] = useState(true);
  
  useEffect(() => {
    setTimeout(() => setStartingUp(false), 2000);
  }, []);
  
  return (
    <div className={styles.container}>
      <Image
        src="/images/tv-frame.svg"
        fill
        aria-hidden
        alt="TV frame"
        className={styles.tvframe}
        priority />
      <Image
        src="/images/tv-bezel.svg"
        fill
        aria-hidden
        alt="TV bezel"
        className={styles.tvbezel} />
      <Image
        src="/images/tv-glow.svg"
        fill
        aria-hidden
        alt="TV glow"
        className={clsx([styles.tvglow], {
          [styles.startuptvglow]: startingUp && asPath === '/',
          [styles.hometvglow]: !startingUp && asPath === '/',
          [styles.resumestvglow]: asPath === '/resumes',
        })} />
      <div className={clsx([styles.scanlines], {
        [styles.sectionscanlines]: !startingUp && asPath !== '/',
        [styles.homescanlines]: !startingUp && asPath === '/',
        [styles.resumesscanlines]: asPath === '/resumes',
      })}>
        <div className={styles.screen}>
          <main className={styles.main}>
            {children}
          </main>
          <style jsx global>{`
            html,
            body {
              font-family: ${text.style.fontFamily}, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
                Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
                sans-serif;
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
  