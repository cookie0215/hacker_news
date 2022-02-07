import React, { useState } from 'react';
import styled from '@emotion/styled';
import { NavLink as ReactRouterDomLink } from "react-router-dom";
import { navis } from '../routes';

const NavLink = ({ activeClassName, children, ...props }) => {
  return <ReactRouterDomLink {...props}>{children}</ReactRouterDomLink>;
};

const NavWarp = styled.nav`
  width: 100%;
  position: fixed;
  bottom: 0;
  z-index: 10;
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

  & span {
    margin-top: 8px;
    font-size: 0.8rem;
  }

  &.active {
    font-weight: 700;
    color: ${({ theme }) => theme.activeColor};

    > div {
      path {
        fill: ${({ theme }) => theme.activeColor};
      }
    }
  }
`;

const NavIcons = styled.div`
  width: 22px;
  height: 22px;

  path {
    fill: ${({ theme }) => theme.navColor};
  }
`;

const Nav = () => {
  return (
    <>
      <NavWarp>
        <NavUl>
          {navis.map((navi, index) => (
            <NavLi key={navi.name}>
              <NavLiItem to={navi.path} activeClassName="active">
                <NavIcons><navi.iconSvg /></NavIcons>
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

