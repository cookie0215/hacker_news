import React from 'react';
import styled from '@emotion/styled';

const ContItemWrap = styled.div`
  display: flex;
  padding: 10px 16px;
`;
const Thumbnail = styled.div`
flex-basis: 58px;
flex-shrink: 0;
  width: 58px;
  height: 54px;
  border-radius: 5px;
  background: #FF6B00;
  margin-right: 16px;
`;
const ArticleInfo = styled.div`
  display: flex;
  flex-direction: column;
`;
const ArticleTitle = styled.h5`
  font-size: 1.2rem;
  font-weight: 700;
`;
const ArticleUpdate = styled.span`
  font-size: 0.9rem;
  color: #BFBFBF;
`;
const ArticleLink = styled.span`
  font-size: 0.9rem;
  color: #9F9F9F;
`;

const HomeContItem = ({ story: { title, url } }) => {

  return (
    <ContItemWrap>
      <Thumbnail></Thumbnail>
      <ArticleInfo>
        <ArticleTitle>{title}</ArticleTitle>
        <ArticleUpdate>a day ago</ArticleUpdate>
        <ArticleLink>{url}</ArticleLink>
      </ArticleInfo>
    </ContItemWrap>
  );
};

export default HomeContItem;