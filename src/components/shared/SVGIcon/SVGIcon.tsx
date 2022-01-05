import React from 'react';
import * as icons from '@/assets/svg';

export type IconType = keyof typeof icons;

export const iconTypes = Object.keys(icons) as IconType[];

interface SVGIconProps extends React.SVGProps<SVGSVGElement> {
  icon: IconType;
}

export default function SVGIcon({ icon, ...props }: SVGIconProps) {
  const SVGComponent = icons[icon];

  return <SVGComponent {...props} />;
}
