import styled from '@emotion/styled';
import React from 'react';
import { useLocation } from 'react-router-dom';
import { ReactComponent as HeadlineIcon } from '../../assets/headline.svg';

const PageHeaderWrap = styled.div`
  width: 100%;
  padding: 26px 18px 12px;

  /* & .page_header_bottom {
    width: 100%;
    display: flex;
    flex-direction: row-reverse;
    align-content: center;
    justify-content: space-between;
    color: #FF6B00;
  } */
`;
const HeaderTop = styled.div`
  display: inline-block;
  position: relative;
  
  & h1 {
    font-size: 2rem;
    color: ${({ theme }) => theme.fontColor}
  }
`;
const Headline = styled(HeadlineIcon)`
  width: 28px;
  height: 28px;
  margin-left: 16px;
  vertical-align: top;
`;
const HeaderBottom = styled.div`
  width: 100%;
  padding-top: 46px;
  display: flex;
  flex-direction: row-reverse;
  align-content: center;
  justify-content: space-between;
  color: #FF6B00;
`;

const PageHeader = ({ title, total }) => {
  const { pathname } = useLocation();
  return (
    <PageHeaderWrap>
      <HeaderTop>
        <h1>
          {title[0]} <br /> {title[1]}
          <Headline />
        </h1>
      </HeaderTop>
      {pathname.length !== 1 ?
        <HeaderBottom>
          <span>Recent Post : a few seconds ago</span>
          {pathname.includes('job') ? <span>Total: {total}</span> : null}
        </HeaderBottom>
        : null}
    </PageHeaderWrap>
  )
};

export default PageHeader;