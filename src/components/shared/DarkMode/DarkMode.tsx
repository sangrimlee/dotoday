import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { SVGIcon } from '../SVGIcon';

export default function DarkMode() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className="fixed right-4 bottom-4">
      <button
        type="button"
        onClick={toggleTheme}
        className="rounded-full p-4 shadow-xl z-50 bg-neutral-100 dark:bg-neutral-900 hover:text-yellow dark:hover:text-yellow"
      >
        {theme === 'light' ? (
          <SVGIcon icon="MoonIcon" size={16} />
        ) : (
          <SVGIcon icon="SunnyIcon" size={16} />
        )}
      </button>
    </div>
  );
}
