import React from 'react';
import styled from '@emotion/styled';
import Header from '../components/Header';
import { ReactComponent as NotFoundImg } from '../assets/notfound.svg';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding-top: 60px;
  padding-bottom: 78px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Wrap = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  >  h2 {
    font-size: 3.5rem;
  }
  > p {
    font-size: 1.8rem;
    text-align: center;
    margin: 10px 0; 
  }
`;
const ImgWrap = styled.div`
  width: calc(100% - 100px);
  min-width: 300px;
`;

const NotFound = () => {
  return (
    <>
      <Header />
      <Container>
        <Wrap>
          <h2>OOPS!</h2>
          <p>We can't find the page <br /> that you're looking for...</p>
          <ImgWrap>
            <NotFoundImg />
          </ImgWrap>
        </Wrap>
      </Container>
    </>
  );
};

export default NotFound;