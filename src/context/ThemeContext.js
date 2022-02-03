import React, { createContext, useState, useContext, useCallback } from 'react';
import { ThemeProvider } from '@emotion/react';
import { lightTheme, darkTheme } from '../theme/theme';

export const ThemeContext = createContext({});

const ThemeModeProvider = ({ children }) => {
  // const initState = window.localStorage.getItem('theme') || 'light';
  const [theme, setTheme] = useState('light');
  const newTheme = theme === 'light' ? lightTheme : darkTheme;

  // const toggleTheme = () => {
  //   const newTheme = theme === lightTheme ? darkTheme : lightTheme;
  //   localStorage.setItem('theme', JSON.stringify(newTheme));
  //   setTheme(newTheme);

  //   console.log(newTheme);
  // }

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <ThemeProvider theme={newTheme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider >
  );
};

const useTheme = () => {
  const context = useContext(ThemeContext);
  const { theme, setTheme } = context;

  const toggleTheme = useCallback(() => {
    if (theme === "light") {
      setTheme("dark");
    }
    else {
      setTheme("light")
    };
  }, [theme]);

  return [theme, toggleTheme];
}

export { ThemeModeProvider, useTheme };