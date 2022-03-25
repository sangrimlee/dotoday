import React from 'react';
import { SVGIcon } from '@/components/shared/SVGIcon';
import { useThemeContext } from '@/contexts/ThemeContext';

export default function LandingPage() {
  const { theme } = useThemeContext();
  return (
    <div className="relative h-full w-full animate-fade-in">
      <div className="absolute top-1/2 inset-x-0 -translate-y-1/2">
        <SVGIcon
          icon={`${theme === 'light' ? 'LogoLightIcon' : 'LogoDarkIcon'}`}
          size={64}
          className="animate-bounce mx-auto"
        />
      </div>
      <div className="absolute bottom-8 inset-x-0">
        <h1 className="logo text-2xl text-inactive text-center">DoToday</h1>
      </div>
    </div>
  );
}
