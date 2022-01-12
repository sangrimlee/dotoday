import React from 'react';
import { Link } from 'react-router-dom';
import { PageURL, PAGE_URL } from '@/constants/url';
import { IconType, SVGIcon } from '@/components/shared/SVGIcon';

interface AuthLayoutProps {
  title?: string;
  description?: string | React.ReactNode;
  children?: React.ReactNode;
  hideFooter?: boolean;
}

interface AuthMenuItem {
  label: string;
  to: PageURL;
  icon: IconType;
}

export default function AuthLayout({
  title,
  description,
  hideFooter,
  children,
}: AuthLayoutProps) {
  const authMenuItems: AuthMenuItem[] = [
    {
      label: '로그인',
      to: 'LOGIN',
      icon: 'UserIcon',
    },
    {
      label: '회원가입',
      to: 'REGISTER',
      icon: 'DocIcon',
    },
    {
      label: '비밀번호 찾기',
      to: 'FIND_PASSWORD',
      icon: 'LockIcon',
    },
  ];
  return (
    <div className="full-w px-4 md:max-w-lg mx-auto animate-fade-in">
      <div className="mb-12 mt-10 md:mt-20">
        <Link className="flex flex-row justify-center items-center" to="/">
          <SVGIcon icon="LogoLightIcon" width="48" height="48" />
          <h1 className="text-4xl logo ml-2">DoToday</h1>
        </Link>
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
          {authMenuItems.map(({ label, to, icon }, index) => (
            <li className="auth-menu-item" key={index}>
              <Link to={PAGE_URL[to]}>
                <SVGIcon icon={icon} width="14" height="14" className="mr-2" />
                {label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
