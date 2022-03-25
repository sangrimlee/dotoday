import React from 'react';
import { NavLink } from 'react-router-dom';
import { PAGE_URL } from '@/constants/url';
import { MOBILE_NAV_ITEMS } from '@/constants/nav';
import { SVGIcon } from '@/components/shared/SVGIcon';

export default function DashboardBottomNavigation() {
  return (
    <div className="bottom-wrap">
      <nav>
        <ul className="bottom-menu">
          {MOBILE_NAV_ITEMS.map(({ label, to, icon, end }) => (
            <li key={label}>
              <NavLink
                to={PAGE_URL[to]}
                end={end}
                className="nav-item bottom-item"
              >
                <SVGIcon size={24} icon={icon} />
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
