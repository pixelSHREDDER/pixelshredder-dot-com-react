'use client'

import Image from 'next/image'
import { usePathname } from 'next/navigation'
import stickersStyles from './stickers.module.css'
import scanlinesStyles from './scanlines.module.css'
import screenStyles from './screen.module.css'
import startupStyles from './startup.module.css'
import glowStyles from './glow.module.css'
import { useCallback, useEffect, useState } from 'react'
//import Device from './Device';
//import useDevice from './Device/useDevice';
//import dynamic from 'next/dynamic'

/*const DynamicDevice = dynamic(() => import('./Device'), {
  ssr: false,
})*/

export default function MonitorInner({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  /* Defaults to startup on every refresh for now to hide a delayed bg color glitch
  const [startingUp, setStartingUp] = useState(pathname === '/')*/
  const [startingUp, setStartingUp] = useState(true)
  const [lightsOut, setLightsOut] = useState(false)

  //const [orientation, isLandscaping, isPortraiting] = useDevice();

  /*const lazyLoadDevice = async () => {
    //const useDevice = await import('./Device/useDevice');
    const [orientation, isLandscaping, isPortraiting] = useDevice();
  }*/

  //useEffect(() => lazyLoadDevice(), []);

  const toggleLightsOut = () => () => setLightsOut((l: boolean) => !l);

const setBodyClass = useCallback(() => {
  !startingUp && pathname === '/' ? document.body.classList.add('home') : document.body.classList.remove('home');
  pathname === '/projects' ? document.body.classList.add('projects') : document.body.classList.remove('projects');
  pathname === '/resumes' ? document.body.classList.add('resumes') : document.body.classList.remove('resumes');
}, [pathname, startingUp])

  useEffect(() => {
    !!lightsOut ? document.body.classList.add('lightsOut') : document.body.classList.remove('lightsOut');
  }, [lightsOut]);

  useEffect(() => {
    if (!!startingUp) {
      document.body.classList.add('startup')
    } else {
      document.body.classList.remove('startup')
      setBodyClass()
    }
  }, [startingUp])

  useEffect(() => setBodyClass(), [pathname])

  useEffect(() => {
    const startupTimeout = setTimeout(() => setStartingUp(false), 4000)
    if (startingUp === true) {
      document.body.classList.add('startup')
    }
    return (() => clearTimeout(startupTimeout))
  }, [])

  return (
    <>
      {/*<DynamicDevice>*/}
        <Image
          src="/images/tv-glow.svg"
          fill
          aria-hidden
          alt="Monitor glow"
          className={glowStyles.glow} />
        <div className={scanlinesStyles.scanlines} aria-hidden>
          <div className={screenStyles.screen} aria-hidden>
            <main>
              {startingUp === true ?
                <div className={startupStyles.startup} aria-hidden>
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
        <footer className={stickersStyles.stickers}>
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
    </>
  )
}