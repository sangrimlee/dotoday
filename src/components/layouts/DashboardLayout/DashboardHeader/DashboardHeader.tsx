import React from 'react';
import { auth } from '@/firebase';
import { useAuthSignOut } from '@react-query-firebase/auth';
import { useThemeContext } from '@/contexts/ThemeContext';
import { SVGIcon } from '@/components/shared/SVGIcon';
import { Logo } from '@/components/shared/Logo';

export default function DashboardHeader() {
  const { theme, toggleTheme } = useThemeContext();
  const { mutate } = useAuthSignOut(auth);

  return (
    <header className="header-wrap">
      <div className="header-inner-wrap">
        <div className="header-item">
          <Logo logoType="logo" />
        </div>
        <ul className="header-menu">
          <li>
            <button className="nav-item header-item" onClick={toggleTheme}>
              <SVGIcon
                icon={theme === 'light' ? 'MoonIcon' : 'SunnyIcon'}
                size={24}
              />
            </button>
          </li>
          <li>
            <button className="nav-item header-item" onClick={() => mutate()}>
              <SVGIcon size={24} icon="LogoutIcon" />
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}
