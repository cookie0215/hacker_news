import React, { useState } from 'react';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as BackIcon } from '../../assets/left_arrow.svg';
import { ReactComponent as ShareIcon } from '../../assets/shared.svg';
import ModalPotal from '../Modal/ModalPotal';
import Share from '../Modal/Share';

const HeaderWrap = styled.header`
  position: fixed;
  top: 0;
  left: 0
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

const BackBtn = styled(BackIcon)`
  path {
    stroke: #fff;
  }
`;
const ShareBtn = styled(ShareIcon)``;

const DetailHeader = () => {
  const [shareActive, setShareActive] = useState(false);
  const navigate = useNavigate();

  const shareOpen = () => {
    setShareActive(true);
  }
  const shareClose = () => {
    setShareActive(false);
  }
  const goBack = () => {
    navigate(-1);
  }

  return (
    <>
      <ModalPotal>
        {shareActive &&
          <Share shareClose={shareClose} />
        }
      </ModalPotal>
      <HeaderWrap>
        <IconWrap onClick={goBack}>
          <BackBtn />
        </IconWrap>
        <IconWrap onClick={shareOpen}>
          <ShareBtn />
        </IconWrap>
      </HeaderWrap>
    </>
  );
};

export default DetailHeader;