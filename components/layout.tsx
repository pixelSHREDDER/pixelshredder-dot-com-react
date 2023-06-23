import Image from 'next/image';
import styles from './layout.module.css';
import { Press_Start_2P, VT323 } from '@next/font/google';
import { PropsWithChildren } from 'react';
import { useRouter } from 'next/router';
import clsx from 'clsx';
//import Device from './Device';
//import useDevice from './Device/useDevice';
//import dynamic from 'next/dynamic'

/*const DynamicDevice = dynamic(() => import('./Device'), {
  ssr: false,
})*/

type LayoutProps = {
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

export default function Layout(props: PropsWithChildren<LayoutProps>) {
  const { asPath } = useRouter();
  //const [orientation, isLandscaping, isPortraiting] = useDevice();

  /*const lazyLoadDevice = async () => {
    //const useDevice = await import('./Device/useDevice');
    const [orientation, isLandscaping, isPortraiting] = useDevice();
  }*/

  //useEffect(() => lazyLoadDevice(), []);
  
  return (
    <div className={clsx([styles.root], {
      [styles.startup]: props.startingUp,
      [styles.home]: !props.startingUp && asPath === '/',
      [styles.resumes]: asPath === '/resumes',
      })} aria-hidden>
    {/*<DynamicDevice>*/}
      <div className={clsx([styles.container],
        {[styles.startup]: props.startingUp})}
        aria-hidden>
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
      <div className={styles.mac} aria-hidden>
        <div className={styles.macglow} aria-hidden></div>
      </div>
    {/*</DynamicDevice>*/}
    </div>
  );
}
  