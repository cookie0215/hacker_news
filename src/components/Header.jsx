import React from 'react';


const Header = () => {
  return (
    <>
      <Container>
        <Logo>
          <img src={require('../assets/logo.svg').default} alt='Hacker News' />
        </Logo>
        <Ser />
      </Container>
    </>
  );
};

export default Header;