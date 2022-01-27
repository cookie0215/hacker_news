import React from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Search from './Search';
import ThemeToggle from '../theme/ThemeToggle';

const Container = styled.header`
  width: 100%;
  border: 1px solid blue;
  padding: 8px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.a`
  display: block;
  width: 36px;
  height: 36px;
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
  return (
    <>
      <Container>
        <Logo href='#'>
          <img src={require('../assets/logo.svg').default} alt='Hacker News' />
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