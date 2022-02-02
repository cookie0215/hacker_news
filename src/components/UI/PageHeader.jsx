import styled from '@emotion/styled';
import React from 'react';

const PageHeaderWrap = styled.div`
  width: 100%;
  padding: 26px 18px 12px;
  border: 1px solid red;

  & .page_header_top {
    display: inline-block;
    border: 1px solid green;
    position: relative;
    & h1 {
      font-size: 2rem;
    }
  }

  & .page_header_bottom {
    width: 100%;
    display: flex;
    flex-direction: row-reverse;
    align-content: center;
    justify-content: space-between;
    border: 1px solid blue;
    color: #FF6B00;
  }
`;

const PageHeader = ({ children }) => {
  return (
    <PageHeaderWrap>
      {children}
    </PageHeaderWrap>
  )
};

export default PageHeader;