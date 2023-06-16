'use client'

import clsx from "clsx";
import useDevice from "./useDevice";
import styles from '../layout.module.css';
import { ReactNode } from "react";

export function DynamicDevice(props: {children?: ReactNode}) {
  const [isLandscape, isLandscaping, isPortrait, isPortraiting] = useDevice();

  return (
    <div className={clsx({
      //'portrait': !!isPortrait,
      [styles.portraiting]: !!isPortraiting,
      //'landscape': !!isLandscape,
      [styles.landscaping]: !!isLandscaping
    })}>
      {props.children}
    </div>
  );
}