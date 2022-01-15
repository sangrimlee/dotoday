import { ThemeType } from '@/types';
import { isThemeType } from '@/types/typeGuard';
import { getLocalStorage } from './storage';

export const getDeviceTheme = (): ThemeType =>
  window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

export const getDefaultTheme = () => {
  const storageTheme = getLocalStorage('THEME');
  const deviceTheme = getDeviceTheme();
  const defaultTheme: ThemeType = isThemeType(storageTheme)
    ? storageTheme
    : deviceTheme;
  return defaultTheme;
};

export const switchTheme = (theme: ThemeType) =>
  theme === 'light' ? 'dark' : 'light';

export const addThemeClass = (theme: ThemeType) => {
  document.documentElement.classList.remove(theme);
  document.documentElement.classList.add(switchTheme(theme));
};
