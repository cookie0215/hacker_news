import React, { createContext, useState } from 'react';
import { ThemeProvider } from '@emotion/react';
import { lightTheme, darkTheme } from '../theme/theme';

export const ThemeContext = createContext({});

export const ThemeModeProvider = ({ children }) => {
  const initState = window.localStorage.getItem('theme') || 'light';
  const [theme, setTheme] = useState(initState);
  const newTheme = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <ThemeProvider theme={newTheme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider >
  );
};
