import styled from '@emotion/styled';
import { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';
import { ReactComponent as DarkModBtn } from '../assets/darkmode.svg';
import { darkTheme, lightTheme } from './theme';


const ThemeToggleWrap = styled.span`
  border: 1px solid red;
`;

const ThemeToggle = () => {
  const [theme, toggleTheme] = useContext(ThemeContext);
  return (
    <ThemeToggleWrap onClick={toggleTheme}>
      <DarkModBtn />
    </ThemeToggleWrap >
  );
};

export default ThemeToggle;