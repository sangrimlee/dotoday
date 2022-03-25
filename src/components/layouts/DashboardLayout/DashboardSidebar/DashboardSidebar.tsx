import React from 'react';
import { NavLink } from 'react-router-dom';
import { auth } from '@/firebase';
import { useAuthSignOut } from '@react-query-firebase/auth';
import { useThemeContext } from '@/contexts/ThemeContext';
import { PAGE_URL } from '@/constants/url';
import { SIDEBAR_NAV_ITEMS } from '@/constants/nav';
import { Logo } from '@/components/shared/Logo';
import { SVGIcon } from '@/components/shared/SVGIcon';

export default function DashboardSidebar() {
  const { theme, toggleTheme } = useThemeContext();
  const { mutate } = useAuthSignOut(auth);

  return (
    <aside className="sidebar-wrap">
      <div className="sidebar-inner-wrap">
        <div className="mb-8">
          <Logo variant="medium" logoType="logo" />
        </div>
        <nav className="sidebar-nav">
          <ul className="sidebar-menu">
            {SIDEBAR_NAV_ITEMS.map(({ label, to, icon, end }) => (
              <li key={label}>
                <NavLink
                  to={PAGE_URL[to]}
                  className="nav-item sidebar-item"
                  end={end}
                >
                  <SVGIcon size={24} icon={icon} />
                </NavLink>
              </li>
            ))}
          </ul>

          <ul className="sidebar-utils">
            <li>
              <button className="nav-item sidebar-item" onClick={toggleTheme}>
                <SVGIcon
                  size={24}
                  icon={theme === 'light' ? 'MoonIcon' : 'SunnyIcon'}
                />
              </button>
            </li>
            <li>
              <button
                className="nav-item sidebar-item"
                onClick={() => mutate()}
              >
                <SVGIcon size={24} icon="LogoutIcon" />
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
}
