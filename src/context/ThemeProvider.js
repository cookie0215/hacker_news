import React, { useState } from 'react';
import ThemeContext from './ThemeContext';
import { lightTheme, darkTheme } from '../theme/theme'

const ThemeProvider = ({ children }) => {
  const initState = localStorage.getItem('theme') || lightTheme;
  const [theme, setTheme] = useState(initState);
  const toggleTheme = () => {
    const newTheme = theme === lightTheme ? darkTheme : lightTheme;
    localStorage.setItem('theme', newTheme);
    setTheme(newTheme);

    console.log(newTheme)
  }

  return (
    <ThemeContext.Provider
      value={[theme, toggleTheme]}
    >
      {children}
    </ThemeContext.Provider >
  );
};

export default ThemeProvider;