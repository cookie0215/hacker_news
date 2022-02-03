import styled from '@emotion/styled';
import { ReactComponent as DarkModeBtn } from '../assets/darkmode.svg';


const ThemeToggleWrap = styled.span``;

const DarkMode = styled(DarkModeBtn)`
  ellipse{
    fill: ${({ theme }) => theme.fontColor};
  }
  path {
	  stroke: ${({ theme }) => theme.fontColor};
  }
`;

const ThemeToggle = ({ toggle, mode }) => {

  return (
    <ThemeToggleWrap >
      <DarkMode onClick={toggle} mode={mode} />
    </ThemeToggleWrap >
  );
};

export default ThemeToggle;