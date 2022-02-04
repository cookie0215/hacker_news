import { useContext, useCallback } from 'react';
import { ThemeContext } from '../context/ThemeContext';

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

export { useTheme };