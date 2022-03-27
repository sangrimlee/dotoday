import React from 'react';
import { Link } from 'react-router-dom';
import useScreenType from '@/hooks/useScreenType';
import { useAuthContext } from '@/contexts/AuthContext';
import { PAGE_URL } from '@/constants/url';
import { Logo } from '@/components/shared/Logo';
import { LinkButton } from '@/components/shared/LinkButton';

export default function HomePage() {
  const { isLoggedIn } = useAuthContext();
  const { isSmall } = useScreenType();

  return (
    <div>
      <header className="sticky top-0 inset-x-0 z-50 bg-white dark:bg-neutral-800">
        <nav className="max-w-7xl mx-auto px-5 md:px-8 xl:px-10 h-20 flex items-center justify-between">
          <Logo variant="medium" logoType={isSmall ? 'logo' : 'default'} />
          <ul className="h-full flex flex-row items-center">
            <li className="h-full">
              <Link
                to={PAGE_URL.REGISTER}
                className="h-full flex items-center border-b-2 border-b-transparent hover:border-b-brand px-4 text-secondary hover:text-black dark:hover:text-white hover:bg-neutral-50 dark:hover:bg-neutral-700"
              >
                회원가입
              </Link>
            </li>
            <li className="h-full">
              <Link
                to={PAGE_URL.LOGIN}
                className="h-full flex items-center border-b-2 border-b-transparent hover:border-b-brand px-4 text-secondary hover:text-black dark:hover:text-white hover:bg-neutral-50 dark:hover:bg-neutral-700"
              >
                로그인
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className="relative">
        <div className="relative max-w-7xl px-10 mx-auto overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="pt-24 pb-32 text-center md:text-left">
              <h1 className="font-bold leading-normal tracking-wide mb-16  text-4xl  md:text-5xl md:leading-normal">
                오늘 할 일,
                <br />
                또는 프로젝트들을
                <br />제 시간에
              </h1>
              <LinkButton
                to={isLoggedIn ? PAGE_URL.DASHBOARD : PAGE_URL.LOGIN}
                buttonColor="brand"
                buttonType="block"
                className="md:text-2xl md:px-6 md:py-4"
              >
                {isLoggedIn ? '대시보드로 이동' : '지금 시작하기'}
              </LinkButton>
            </div>
          </div>
        </div>
      </main>
      <footer></footer>
    </div>
  );
}
