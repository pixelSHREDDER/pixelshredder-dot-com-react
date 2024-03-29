import Image from 'next/image';
import styles from './layout.module.css';
import { Press_Start_2P, VT323 } from "next/font/google";
import localFont from "next/font/local";
import { PropsWithChildren, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import clsx from 'clsx';
//import Device from './Device';
//import useDevice from './Device/useDevice';
//import dynamic from 'next/dynamic'

/*const DynamicDevice = dynamic(() => import('./Device'), {
  ssr: false,
})*/

export type LayoutProps = {
  lightsOut?: Boolean,
  setLightsOut?: Function,
  startingUp?: Boolean,
};

export const title = Press_Start_2P({
    subsets: ['latin'],
    weight: ['400'],
});

export const text = VT323({
    subsets: ['latin'],
    weight: ['400'],
});

export const sysFont = localFont({ src: './sysfont.woff2' });

export default function Layout(props: PropsWithChildren<LayoutProps>) {
  const { asPath } = useRouter();
    //const [orientation, isLandscaping, isPortraiting] = useDevice();

  /*const lazyLoadDevice = async () => {
    //const useDevice = await import('./Device/useDevice');
    const [orientation, isLandscaping, isPortraiting] = useDevice();
  }*/

  //useEffect(() => lazyLoadDevice(), []);

  const toggleLightsOut = () => () => {
    if (!!props.setLightsOut) {
      props.setLightsOut((l: boolean) => !l);
    }
  }
  
  return (
    <div className={clsx([styles.root], {
      [styles.startup]: props.startingUp,
      [styles.home]: !props.startingUp && asPath === '/',
      [styles.resumes]: asPath === '/resumes',
      [styles.lightsout]: props.lightsOut === true,
      })}>
    {/*<DynamicDevice>*/}
      <div className={clsx([styles.container],
        {[styles.startup]: props.startingUp})}>
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
          className={styles.tvglow} />
        <div className={styles.scanlines} aria-hidden>
          <div className={styles.screen} aria-hidden>
            <main className={styles.main}>
              {props.startingUp ?
                <div className={styles.startupbg} aria-hidden>
                  <Image
                    src="/images/startup.svg"
                    fill
                    alt="Welcome to Mikeintosh." />
                </div>
                :
                <>
                  {props.children}
                </>
              }
            </main>
          </div>
        </div>
        <footer className={styles.footer}>
          <nav>
            <ul>
              <li>
                <a href="https://www.linkedin.com/in/pixelshredder/" target="_blank">
                  <Image
                    src="/images/linkedin-01.svg"
                    height="20"
                    width="20"
                    alt="LinkedIn sticker"/>
                </a>
              </li>
              <li>
                <a href="https://github.com/pixelSHREDDER" target="_blank">
                  <Image
                    src="/images/github-mark-white.svg"
                    height="20"
                    width="20"
                    alt="GitHub sticker"/>
                </a>
              </li>
              <li>
                <button onClick={toggleLightsOut()}>Lights</button>
              </li>
            </ul>
          </nav>
        </footer>
      </div>
      <div className={styles.mac} aria-hidden>
        <div className={styles.macglow} aria-hidden></div>
      </div>
    {/*</DynamicDevice>*/}
    <style jsx global>{`
        html,
        body {
          /*font-family: ${text.style.fontFamily}, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
          Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
          sans-serif;*/
          font-family: ${sysFont.style.fontFamily}, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
          Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
          sans-serif;
        }
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
            /*font-family: ${title.style.fontFamily}, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;*/
            font-family: ${sysFont.style.fontFamily}, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
      `}</style>
    </div>
  );
}
  