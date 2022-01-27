import styled from '@emotion/styled';

const ThemeToggleWrap = styled.span`
  
`;

const ThemeToggle = () => {
  return (
    <ThemeToggleWrap>
      <img src={require('../assets/darkmode.svg').default} alt="검색" />
    </ThemeToggleWrap>
  );
};

export default ThemeToggle;