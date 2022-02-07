import React from 'react';
import styled from '@emotion/styled';
import { ReactComponent as Back } from '../../assets/left_arrow.svg';
import { ReactComponent as Share } from '../../assets/shared.svg';

const HeaderWrap = styled.header`
  position: fixed;
  top: 0;
  z-index: 10;
  width: 100%;
  padding: 8px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${({ theme }) => theme.detailTopBgColor};
`;
const IconWrap = styled.span`
  qdisplay: block;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
`;

const BackIcon = styled(Back)`
  path {
    stroke: #fff;
  }
`;

const DetailHeader = () => {
  return (
    <HeaderWrap>
      <IconWrap>
        <BackIcon />
      </IconWrap>
      <IconWrap>
        <Share />
      </IconWrap>
    </HeaderWrap>
  );
};

export default DetailHeader;