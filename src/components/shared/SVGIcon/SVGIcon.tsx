import React from 'react';
import * as icons from '@/assets/svg';

export type IconType = keyof typeof icons;

export const iconTypes = Object.keys(icons) as IconType[];

interface SVGIconProps extends React.SVGProps<SVGSVGElement> {
  icon: IconType;
  size?: number;
}

export default function SVGIcon({
  size = 16,
  icon,
  width,
  height,
  ...props
}: SVGIconProps) {
  const SVGComponent = icons[icon];

  return (
    <SVGComponent width={width ?? size} height={height ?? size} {...props} />
  );
}
