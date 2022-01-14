import React from 'react';
import useScreenType from '@/hooks/useScreenType';
import { SVGIcon } from '@/components/shared/SVGIcon';
import { useTheme } from '@/contexts/ThemeContext';

export default function LandingPage() {
  const { theme } = useTheme();
  const { height } = useScreenType();
  return (
    <div
      style={{ height: `${height}px` }}
      className="w-full flex items-center justify-center overflow-hidden"
    >
      <div className="flex items-center">
        <SVGIcon
          icon={`${theme === 'light' ? 'LogoLightIcon' : 'LogoDarkIcon'}`}
          size={64}
          className="animate-landing-logo"
        />
        <h1 className="logo text-5xl ml-4 animate-landing-logo-text">
          DoToday
        </h1>
      </div>
    </div>
  );
}
