import React, { useEffect, useMemo, useState } from 'react';

export default function useScreenType() {
  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    }
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const { isLarge, isNotLarge, isSmall, isNotSmall } = useMemo(
    () => ({
      isLarge: 768 <= width,
      isNotLarge: width < 768,
      isSmall: width < 768,
      isNotSmall: 768 <= width,
    }),
    [width],
  );

  return {
    width,
    height,
    isLarge,
    isNotLarge,
    isSmall,
    isNotSmall,
  };
}
