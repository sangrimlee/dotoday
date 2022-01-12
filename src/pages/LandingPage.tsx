import React from 'react';
import useScreenType from '@/hooks/useScreenType';
import { SVGIcon } from '@/components/shared/SVGIcon';

export default function LandingPage() {
  const { height } = useScreenType();
  return (
    <div
      style={{ height: `${height}px` }}
      className="fixed w-full flex items-center justify-center"
    >
      <div className="w-1/3 max-w-[10rem]">
        <SVGIcon icon="LogoLightIcon" />
      </div>
      <div className="fixed bottom-4 logo text-neutral-300 text-2xl">
        DoToday
      </div>
    </div>
  );
}
