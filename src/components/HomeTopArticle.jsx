import React from 'react';
import styled from '@emotion/styled';

const Wrap = styled.article`
  padding-top: 28px;
  padding-bottom: 25px;
  padding-left: 18px;
`;
const Slides = styled.ul`
  width: 500%;
  display: flex;
`;
const SlideItem = styled.li`
  width: 12%;
  height: 182px;
  background: #fff;
  border-radius: 10px;
  padding: 27px 16px 32px;
  display: flex;
  flex-direction: column;

  & + & {
    margin-left: 16px;
  }
`;
const Author = styled.div`
  font-weight: bold;
  font-size: 1.2rem;
  color: #FF6B00;
  margin-bottom: 6px;
`;
const Title = styled.div`
  flex-basis: 63px;
  font-weight: 600;
  font-size: 1.4rem;
  margin-bottom: 12px;
`;
const Link = styled.div`
  font-size: 0.9rem;
  color: #BFBFBF;
    margin-bottom: 5px;
`;
const Update = styled.div`
  font-size: 0.9rem;
  color: #BFBFBF;
  margin-bottom: 5px;
`;

const IndiBtnGroup = styled.ul`
  padding: 7px 0;
  display: flex;
`;
const IndiItem = styled.li`
display: flex;
align-items: center;
justify-content: center;
  & + & {
    margin-left: 4px;
  }
`;
const IndiBtn = styled.button`
  width: 12px;
  height: 12px;
  background: #c4c4c4;
  border: none;
  border-radius: 50%;
`;



const TopArticle = () => {
  return (
    <Wrap>
      <Slides>
        <SlideItem>
          <Author>by peatmonster </Author>
          <Title>Quantum Computer with 5K Qubits Launched </Title>
          <Link>bleepingcomputer.com</Link>
          <Update>8 hours ago</Update>
        </SlideItem>
      </Slides>

      <IndiBtnGroup>
        <IndiItem>
          <IndiBtn></IndiBtn>
        </IndiItem>
        <IndiItem>
          <IndiBtn></IndiBtn>
        </IndiItem>
      </IndiBtnGroup>
    </Wrap>
  );
};

export default TopArticle; 