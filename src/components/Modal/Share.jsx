import React, { useRef, useState } from 'react';
import styled from '@emotion/styled';
import ModalPortal from "./ModalPotal";
import { ReactComponent as CloseIcon } from '../../assets/close.svg';
import { ReactComponent as FacebookIcon } from '../../assets/facebook.svg';
import { ReactComponent as TwitterIcon } from '../../assets/twitter.svg';
import { ReactComponent as InstagramIcon } from '../../assets/instagram.svg';
import { ReactComponent as RedditIcon } from '../../assets/reddit.svg';
import { ReactComponent as CopyIcon } from '../../assets/copy.svg';

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
const ShareWrap = styled.div`
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
const ShareTop = styled.div`
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
const ShareIcons = styled.ul`
  margin: 12px 0;
  padding: 7px 0;
  display: flex;
  justify-content: space-around;
`;
const ShareIcon = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.fontColor};
  cursor: pointer;
  
  > span + span {
    margin-top: 4px;
  }
`;
const ShareBottom = styled.div`
  padding: 4px 0;
  display: flex;
  justify-content: space-between;
`;
const CopyUrl = styled.input`
flex: 2;
  background: #FAFAFA;
  opacity: 0.5;
  border: 0.5px solid #D3D3D3;
  border-radius: 5px;
  padding: 6px 8px;
  outline: none;
`;
const CopyBtn = styled.button`
  flex: 0.5;
  font-size: 1.2rem;
  margin-left: 7px;
  background: #F5F2F2;
  border-radius: 5px;
  border: none;
`;

const Share = ({ shareActiveOn, shareOpen, shareClose }) => {
  const icons = [
    { name: 'Facebook', iconShape: FacebookIcon },
    { name: 'Twitter', iconShape: TwitterIcon },
    { name: 'Instagram', iconShape: InstagramIcon },
    { name: 'Reddit', iconShape: RedditIcon },
    { name: 'Copy', iconShape: CopyIcon },
  ]

  const [isCopied, setIsCopied] = useState(false);

  const inputUrl = useRef();
  const clickCopy = () => {
    const el = inputUrl.current;
    el.select();
    document.execCommand("copy");
    setIsCopied(true);
  }

  return (
    <ModalPortal>
      <ModalContainer>
        <ModalBlack>
          <ShareWrap>
            <ShareTop>
              <Title>SNS</Title>
              <CloseBtn onClick={shareClose} />
            </ShareTop>
            <ShareIcons>
              {icons.map((icon) =>
                <ShareIcon key={icon.name}>
                  <span><icon.iconShape /></span>
                  <span>{icon.name}</span>
                </ShareIcon>
              )}
            </ShareIcons>
            <ShareBottom>
              <CopyUrl type='text' ref={inputUrl} readOnly value={window.location.href} />
              <CopyBtn onClick={clickCopy}>{isCopied ? '✅ Copied!' : 'COPY'}</CopyBtn>
            </ShareBottom>
          </ShareWrap>
        </ModalBlack>
      </ModalContainer>
    </ModalPortal>

  );
};

export default Share;