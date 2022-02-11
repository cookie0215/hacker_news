import React from 'react';
import styled from '@emotion/styled';
import ModalPortal from "./ModalPotal";
import { ReactComponent as CloseIcon } from '../../assets/close.svg';

const ModalContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 11;
`;
const ModalBlack = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,.5);
`;
const UserWrap = styled.div`
  width: calc(100% - 60px);
  max-width: 600px;
  /* height: 20vh; */
  background: ${({ theme }) => theme.modalBgColor};
  border-radius: 10px;
  padding: 20px 15px;
  position: absolute;
  left: 0;
  right: 0;
  margin: 96px auto 0;
`;
const UserTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Title = styled.h5`
  color: ${({ theme }) => theme.fontColor};
  font-weight: 700;
  font-size: 1.8rem;
`;
const CloseBtn = styled(CloseIcon)`
  cursor: pointer;
  path {
    stroke: ${({ theme }) => theme.fontColor}
  }
`;

const UserCont = styled.div``;

const User = ({ userClose }) => {
  return (
    <ModalPortal>
      <ModalContainer>
        <ModalBlack>
          <UserWrap>
            <UserTop>
              <Title>USER Info</Title>
              <CloseBtn onClick={userClose} />
            </UserTop>
            <UserCont></UserCont>
          </UserWrap>
        </ModalBlack>
      </ModalContainer>
    </ModalPortal>
  );
};

export default User;