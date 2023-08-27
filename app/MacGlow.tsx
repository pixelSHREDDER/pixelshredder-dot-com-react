'use client'

import { usePathname } from 'next/navigation'
import styles from './layout.module.css';
import clsx from 'clsx';
import { useEffect, useState } from 'react';

export default function MacGlow() {
  const pathname = usePathname()
  const [startingUp, setStartingUp] = useState(true)

  useEffect(() => {
    const startupTimeout = setTimeout(() => setStartingUp(false), 4000);

    return (() => clearTimeout(startupTimeout));
  }, []);

  return (
    <div className={clsx([styles.macglow], {
      [styles.startupglow]: startingUp,
      [styles.homeglow]: !startingUp && pathname === '/',
      [styles.resumesglow]: pathname === '/resumes',
      //[styles.lightsout]: lightsOut === true,
      })} aria-hidden></div>
  )
}