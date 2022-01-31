import styled from '@emotion/styled';
import { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';


const ThemeToggleWrap = styled.span`
  border: 1px solid red;
`;

const ThemeToggle = () => {
  const [theme, toggleTheme] = useContext(ThemeContext);
  console.log(theme)
  return (
    <ThemeToggleWrap onClick={toggleTheme}>
      <img src={require('../assets/darkmode.svg').default} alt="검색" />
    </ThemeToggleWrap >
  );
};

export default ThemeToggle;