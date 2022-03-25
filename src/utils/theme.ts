import { ThemeType } from '@/types';
import { isThemeType } from '@/types/typeGuard';
import { getLocalStorage } from './storage';

export const getDeviceTheme = (): ThemeType =>
  window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

export const getDefaultTheme = () => {
  const storageTheme = getLocalStorage('THEME');
  const deviceTheme = getDeviceTheme();
  if (isThemeType(storageTheme)) {
    return storageTheme;
  }
  return deviceTheme;
};

export const switchTheme = (theme: ThemeType) =>
  theme === 'light' ? 'dark' : 'light';

export const addThemeClass = (theme: ThemeType) => {
  if (theme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
};
