import React from 'react';
import styled from '@emotion/styled';
import { ReactComponent as Arrow } from '../assets/arrow.svg';
import { ReactComponent as Link } from '../assets/linkIcon.svg'

const Wrap = styled.section`
`;
const Article = styled.article`
  width: 100%;
  background: #FF6B00;
  padding: 21px 15px;
  color: #fff;
`;

const ArticleTop = styled.div`
  display: flex;
`;
const Lank = styled.span`
  font-size: 5rem;
  line-height: 0.8;
  margin-right: 12px;
  flex-basis: 29px;
  flex-shrink: 0;
`;
const Title = styled.span`
  font-weight: 700;
  font-size: 2.1rem;
  margin-right: 13px;
  flex-grow: 1;
`;
const ArrowIcon = styled(Arrow)`
  flex-shrink: 0;
  path {
    stroke: white;
  }
`;


const ArticleLink = styled.div`
  padding-left: 40px;
`;
const LinkIcon = styled(Link)`
  margin-left: 8px;
  path {
    fill: white;
  }
`;


const ArticleBottom = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 45px;
  padding-top: 11px;
  border-top: 2px solid #fff;
`;
const Update = styled.span``;
const Comments = styled.span``;

const TopContents = () => {
  return (
    <Wrap>
      <Article>
        <ArticleTop>
          <Lank>1</Lank>
          <Title>Check out today's popular information</Title>
          <ArrowIcon></ArrowIcon>
        </ArticleTop>
        <ArticleLink href='#' target='_blank'>
          bleepingcomputer.com
          <LinkIcon></LinkIcon>
        </ArticleLink>
        <ArticleBottom>
          <Update>1 points by melissalobos a few seconds ago </Update>
          <Comments>5 comments</Comments>
        </ArticleBottom>
      </Article>
    </Wrap>
  );
};

export default TopContents;