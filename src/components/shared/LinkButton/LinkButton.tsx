import React, { AnchorHTMLAttributes } from 'react';
import { Link } from 'react-router-dom';
import { IconType, SVGIcon } from '../SVGIcon';
import { COLOR } from '@/constants/theme';
import { ColorType } from '@/types';

interface LinkButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string;
  buttonType?: 'block' | 'fullWidth';
  buttonColor?: 'default' | 'brand';
  icon?: IconType;
  iconColor?: ColorType;
}

const ButtonColor = {
  default: 'btn-default',
  brand: 'btn-brand',
};

const ButtonType = {
  block: 'btn-block',
  fullWidth: 'btn-full',
};

export default function LinkButton({
  buttonType = 'block',
  buttonColor = 'default',
  icon,
  iconColor,
  className,
  children,
  ...linkProps
}: LinkButtonProps) {
  return (
    <Link
      className={`
      font-medium disabled:bg-disabled text-center
      ${ButtonType[buttonType]} ${ButtonColor[buttonColor]}
      ${className} ${icon && 'flex flex-row items-center justify-center'}`}
      {...linkProps}
    >
      {icon && (
        <SVGIcon
          icon={icon}
          size={20}
          color={iconColor && COLOR[iconColor]}
          className={`${buttonType === 'fullWidth' ? 'mr-4' : 'mr-2'}`}
        />
      )}
      {children}
    </Link>
  );
}
