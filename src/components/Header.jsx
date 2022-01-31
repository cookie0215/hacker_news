import React, { useContext } from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import Search from './Search';
import ThemeToggle from '../theme/ThemeToggle';
import ThemeContext from '../context/ThemeContext';

const Container = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  border-bottom: 2px solid ${({ theme }) => theme.borderColor};
  background: ${({ theme }) => theme.bgColor};
  padding: 8px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.div`
width: 36px;
height: 36px;
cursor: pointer;
`;

const GnbSep = styled.div`
display: flex;
align-items: center;

  > span {
  margin-left: 6px;
  display: block;
  cursor: pointer;
}
`;

const Header = () => {
  const [theme] = useContext(ThemeContext);
  return (
    <>
      <Container theme={theme}>
        <Logo>
          <Link to='/'>
            <img src={require('../assets/logo.svg').default} alt='Hacker News' />
          </Link>
        </Logo>
        <GnbSep>
          <Search />
          <ThemeToggle />
        </GnbSep>
      </Container>
    </>
  );
};

export default Header;