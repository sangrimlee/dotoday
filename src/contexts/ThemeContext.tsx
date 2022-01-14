import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { STORAGE_KEY } from '@/constants/storage';

export type Theme = 'light' | 'dark';

interface Props {
  children: React.ReactNode;
}

interface ThemeState {
  theme: Theme;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeState>({
  theme: 'light',
  toggleTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

const getDefaultTheme = () => {
  const deviceTheme: Theme = window.matchMedia('(prefers-color-scheme: dark)')
    .matches
    ? 'dark'
    : 'light';
  const storageTheme: Theme | null =
    localStorage.getItem(STORAGE_KEY.THEME) === 'light'
      ? 'light'
      : localStorage.getItem(STORAGE_KEY.THEME) === 'dark'
      ? 'dark'
      : null;
  const defaultTheme: Theme = storageTheme ?? deviceTheme;
  return defaultTheme;
};

export default function ThemeProvider({ children }: Props) {
  const [theme, setTheme] = useState<Theme>('light');

  const toggleTheme = useCallback(() => {
    const changedTheme = theme !== 'light' ? 'light' : 'dark';
    document.documentElement.classList.remove(theme);
    document.documentElement.classList.add(changedTheme);
    localStorage.setItem(STORAGE_KEY.THEME, changedTheme);
    setTheme(changedTheme);
  }, [theme]);

  useEffect(() => {
    const defaultTheme = getDefaultTheme();
    document.documentElement.classList.add(defaultTheme);
    setTheme(defaultTheme);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
