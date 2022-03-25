import React from 'react';
import { Link } from 'react-router-dom';
import { PAGE_URL } from '@/constants/url';
import { SVGIcon } from '@/components/shared/SVGIcon';
import { Logo } from '@/components/shared/Logo';
import { AUTH_MENU_ITEMS } from '@/constants/nav';

interface AuthLayoutProps {
  title?: string;
  description?: string | React.ReactNode;
  children?: React.ReactNode;
  hideFooter?: boolean;
}

export default function AuthLayout({
  title,
  description,
  hideFooter,
  children,
}: AuthLayoutProps) {
  return (
    <div>
      <div className="px-4 max-w-lg mx-auto animate-fade-in">
        <div className="flex flex-col justify-center mb-12 mt-10 md:mt-20">
          <Logo variant="large" />
        </div>
        <div>
          <div className="mb-4">
            <h2 className="auth-title">{title}</h2>
            <p className="auth-description mt-2">{description}</p>
          </div>
          {children}
        </div>
        {!hideFooter && (
          <ul className="auth-menu mt-10">
            {AUTH_MENU_ITEMS.map(({ label, to, icon }, index) => (
              <li className="auth-menu-item" key={index}>
                <Link to={PAGE_URL[to]}>
                  <SVGIcon icon={icon} size={14} className="auth-menu-icon" />
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
