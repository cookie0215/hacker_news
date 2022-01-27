import styled from '@emotion/styled';
import React from 'react';

const NavWarp = styled.nav`
  width: 100%;
  position: fixed;
  bottom: 0;
  border: 1px solid blue;
`;
const NavUl = styled.ul`

`;
const NavLi = styled.li`
  border: 1px solid red;
`;

const Nav = () => {
  return (
    <>
      <NavWarp>
        <NavUl>
          <NavLi>
            {/* <Link>
              🤣
              <span>HOME</span>
            </Link> */}
          </NavLi>
        </NavUl>
      </NavWarp>
    </>
  );
};

export default Nav;