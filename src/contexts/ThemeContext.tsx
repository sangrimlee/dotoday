import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { ThemeType } from '@/types';
import { addThemeClass, getDefaultTheme, switchTheme } from '@/utils/theme';
import { setLocalStorage } from '@/utils/storage';

interface Props {
  children: React.ReactNode;
}

interface ThemeState {
  theme: ThemeType;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeState>({
  theme: 'light',
  toggleTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

export default function ThemeProvider({ children }: Props) {
  const [theme, setTheme] = useState<ThemeType>('light');

  const toggleTheme = useCallback(() => {
    const switchedTheme = switchTheme(theme);
    setTheme(switchedTheme);
    addThemeClass(switchedTheme);
    setLocalStorage('THEME', switchedTheme);
  }, [theme]);

  useEffect(() => {
    const defaultTheme = getDefaultTheme();
    setTheme(defaultTheme);
    addThemeClass(defaultTheme);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
