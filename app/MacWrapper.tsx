'use client'

import Image from 'next/image';
import { usePathname } from 'next/navigation'
import styles from './layout.module.css';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
//import Device from './Device';
//import useDevice from './Device/useDevice';
//import dynamic from 'next/dynamic'

/*const DynamicDevice = dynamic(() => import('./Device'), {
  ssr: false,
})*/

export default function MacWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [startingUp, setStartingUp] = useState(pathname === '/')
  const [lightsOut, setLightsOut] = useState(false)

  //const [orientation, isLandscaping, isPortraiting] = useDevice();

  /*const lazyLoadDevice = async () => {
    //const useDevice = await import('./Device/useDevice');
    const [orientation, isLandscaping, isPortraiting] = useDevice();
  }*/

  //useEffect(() => lazyLoadDevice(), []);

  const toggleLightsOut = () => () => setLightsOut((l: boolean) => !l);

  useEffect(() => {
    !!lightsOut ? document.body.classList.add('lightsout') : document.body.classList.remove('lightsout');
  }, [lightsOut]);

  useEffect(() => {
    const startupTimeout = setTimeout(() => setStartingUp(false), 4000);

    return (() => clearTimeout(startupTimeout));
  }, []);

  return (
    <div className={clsx({
      [styles.startup]: startingUp,
      [styles.home]: !startingUp && pathname === '/',
      [styles.projects]: pathname === '/projects',
      [styles.resumes]: pathname === '/resumes',
      [styles.lightsout]: lightsOut === true,
      })}>
      {/*<DynamicDevice>*/}
        <Image
          src="/images/tv-glow.svg"
          fill
          aria-hidden
          alt="TV glow"
          className={styles.tvglow} />
        <div className={styles.scanlines} aria-hidden>
          <div className={styles.screen} aria-hidden>
            <main className={styles.main}>
              {startingUp === true ?
                <div className={styles.startupbg} aria-hidden>
                  <Image
                    src="/images/startup.svg"
                    fill
                    alt="Welcome to Mikeintosh." />
                </div>
                :
                <>
                  {children}
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
      {/*</DynamicDevice>*/}
    </div>
  )
}