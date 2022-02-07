import React from 'react';
import styled from '@emotion/styled';
import Header from '../Header';

const Main = styled.main`
  width: 100%;
  padding-top: 56px;
  padding-bottom: 78px;
`;

const CommonLayout = ({ children }) => {
  return (
    <>
      <Header />
      <Main>{children}</Main>
    </>
  );
};

export default CommonLayout;