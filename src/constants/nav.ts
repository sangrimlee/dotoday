import { IconType } from '@/components/shared/SVGIcon';
import { PageURLType } from '@/types';

interface NavItem {
  label: string;
  to: PageURLType;
  icon: IconType;
  end?: boolean;
}

export const AUTH_MENU_ITEMS: NavItem[] = [
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

export const SIDEBAR_NAV_ITEMS: NavItem[] = [
  {
    label: '대시보드',
    to: 'DASHBOARD',
    icon: 'HomeIcon',
    end: true,
  },
  {
    label: '날짜별',
    to: 'CALENDAR',
    icon: 'CalendarIcon',
  },
  {
    label: '프로젝트',
    to: 'PROJECTS',
    icon: 'ProjectIcon',
  },
];

export const MOBILE_NAV_ITEMS: NavItem[] = [
  {
    label: '대시보드',
    to: 'DASHBOARD',
    icon: 'HomeIcon',
    end: true,
  },
  {
    label: '날짜별',
    to: 'CALENDAR',
    icon: 'CalendarIcon',
  },
  {
    label: '프로젝트',
    to: 'PROJECTS',
    icon: 'ProjectIcon',
  },
  {
    label: '사용자',
    to: 'ACCOUNT',
    icon: 'UserIcon',
  },
];
