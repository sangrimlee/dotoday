import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { Link } from 'react-router-dom';
import { SVGIcon } from '../SVGIcon';

const LogoVariant = {
  default: {
    logoSize: 24,
    fontSize: 'text-xl',
  },
  large: {
    logoSize: 48,
    fontSize: 'text-4xl',
  },
};

type LogoType = 'default' | 'logo' | 'text';
type LogoVariantType = keyof typeof LogoVariant;

interface LogoProps {
  variant?: LogoVariantType;
  logoType?: LogoType;
}

export default function Logo({
  variant = 'default',
  logoType = 'default',
}: LogoProps) {
  const { theme } = useTheme();

  const logoIconType = theme === 'light' ? 'LogoLightIcon' : 'LogoDarkIcon';

  return (
    <Link className="flex items-center justify-center" to="/">
      {logoType !== 'text' && (
        <SVGIcon size={LogoVariant[variant].logoSize} icon={logoIconType} />
      )}
      {logoType !== 'logo' && (
        <h1
          className={`logo ${LogoVariant[variant].fontSize} ${
            logoType === 'default' && 'ml-2'
          }`}
        >
          DoToday
        </h1>
      )}
    </Link>
  );
}
