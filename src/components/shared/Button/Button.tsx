import React, { ButtonHTMLAttributes } from 'react';
import { IconType, SVGIcon } from '../SVGIcon';
import { COLOR, ColorType } from '@/constants/theme';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonType?: 'block' | 'fullWidth';
  buttonColor?: 'default' | 'brand';
  icon?: IconType;
  iconColor?: ColorType;
  isLoading?: boolean;
}

const ButtonColor = {
  default: 'btn-default',
  brand: 'btn-brand',
};

const ButtonType = {
  block: 'btn-block',
  fullWidth: 'btn-full',
};

export default function Button({
  buttonType = 'block',
  buttonColor = 'default',
  isLoading = false,
  disabled,
  icon,
  iconColor,
  className,
  children,
  ...buttonProps
}: ButtonProps) {
  return (
    <button
      disabled={disabled || isLoading}
      className={`
      btn ${ButtonType[buttonType]} ${ButtonColor[buttonColor]}
      ${isLoading && 'disabled:cursor-progress'}
      ${icon && 'flex flex-row items-center justify-center'}
      ${className}`}
      {...buttonProps}
    >
      {isLoading ? (
        <div className="flex">
          <SVGIcon icon="LoadingIcon" width={24} height={24} />
        </div>
      ) : (
        <>
          {icon && (
            <SVGIcon
              icon={icon}
              width={20}
              height={20}
              color={iconColor && COLOR[iconColor]}
              className={`${buttonType === 'fullWidth' ? 'mr-4' : 'mr-2'}`}
            />
          )}
          {children}
        </>
      )}
    </button>
  );
}
