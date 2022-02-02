import React, { useContext } from 'react';
import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { navis } from '../routes';
import ThemeContext from '../context/ThemeContext';

const NavWarp = styled.nav`
  width: 100%;
  position: fixed;
  bottom: 0;
  border-top: 2px solid ${({ theme }) => theme.borderColor};
  background: ${({ theme }) => theme.bgColor};
`;
const NavUl = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
const NavLi = styled.li`
  flex: 1/5;
  padding: 18px 16px;
`;

const NavLiItem = styled(NavLink)`
  color: ${({ theme }) => theme.fontColor};
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;

  & img {
    width: 22px;
    height: 22px;
  }
  & span {
    margin-top: 8px;
    font-size: 0.8rem;
  }
`;


const Nav = () => {
  const [theme] = useContext(ThemeContext);
  return (
    <>
      <NavWarp theme={theme}>
        <NavUl>
          {navis.map((navi) => (
            <NavLi key={navi.name}>
              <NavLiItem to={navi.path}>
                <img src={navi.imgUrl} alt={navi.name.toUpperCase()} />
                <span>{navi.name.toUpperCase()}</span>
              </NavLiItem>
            </NavLi>
          ))}
        </NavUl>
      </NavWarp>
    </>
  );
};

export default Nav;

