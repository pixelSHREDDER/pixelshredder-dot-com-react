'use client'

import { useState, useCallback, useEffect } from 'react';
import { useMobileOrientation } from 'react-device-detect';

export default function useDevice() {
  const {isLandscape, isPortrait, orientation} = useMobileOrientation();
  const [isLandscaping, setIsLandscaping] = useState<boolean>(false);
  const [isPortraiting, setIsPortraiting] = useState<boolean>(false);

  const rotateHandler = useCallback((currentOrientation: string) => {
    //console.log(currentOrientation);
    if (currentOrientation === 'landscape') {
      setIsLandscaping(true);
      setTimeout(() => setIsLandscaping(false), 1000);
    } else if (currentOrientation === 'portrait') {
      setIsPortraiting(true);
      setTimeout(() => setIsPortraiting(false), 1000);
    }
  }, [orientation]);

  useEffect(() => rotateHandler(orientation), [orientation]);

  return [
    isLandscape,
    isLandscaping,
    isPortrait,
    isPortraiting
  ];
};