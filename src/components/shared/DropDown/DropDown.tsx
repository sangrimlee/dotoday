import React from 'react';
import useToggle from '@/hooks/useToggle';
import { IconType, SVGIcon } from '../SVGIcon';

export interface DropDownItem {
  label: string;
  onClick?: () => void;
  icon?: IconType;
}

interface DropDownProps {
  children?: React.ReactNode;
  direction?: 'left' | 'right';
  dropDownItems: DropDownItem[];
}

export default function DropDown({
  direction = 'right',
  dropDownItems,
  children,
}: DropDownProps) {
  const [isShowDropDownMenu, toggleDropDownMenu] = useToggle();

  const handleClick = (onClick?: () => void) => {
    onClick && onClick();
    toggleDropDownMenu();
  };

  return (
    <div className="relative block">
      <div className="flex justify-center">
        <button type="button" onClick={toggleDropDownMenu}>
          {children}
        </button>
      </div>
      {isShowDropDownMenu && (
        <>
          <div
            className={`${
              direction === 'right'
                ? 'origin-top-right right-0'
                : 'origin-top-left left-0'
            } absolute mt-2 w-60 rounded shadow-lg bg-white dark:bg-neutral-900 ring-1 ring-neutral-200 dark:ring-neutral-700 focus:outline-none z-50`}
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
          >
            <div className="flex flex-col py-2">
              {dropDownItems.map(({ label, icon, onClick }) => (
                <button
                  key={label}
                  type="button"
                  onClick={() => handleClick(onClick)}
                  className="h-10 flex items-center mx-2 px-2 rounded text-sm text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-700"
                >
                  {icon && <SVGIcon icon={icon} className="mr-2" />}
                  {label}
                </button>
              ))}
            </div>
          </div>
          <div
            className="fixed top-0 left-0 w-screen h-screen bg-transparent"
            onClick={toggleDropDownMenu}
          />
        </>
      )}
    </div>
  );
}
