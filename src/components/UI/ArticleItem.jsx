import React from 'react';
import styled from '@emotion/styled';
import { ReactComponent as CommentIcon } from '../../assets/comment.svg';
import { ReactComponent as Arrow } from '../../assets/arrow.svg'
import { ReactComponent as Link } from '../../assets/linkIcon.svg'

const ArticleItemWrap = styled.li`
  border-top: 1px solid #ECECEC;
  padding: 20px 15px 10px;
  margin: 0 15px;
`;
const ItemTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 5px;
  color: ${({ theme }) => theme.fontColor};
`;
const Lank = styled.span`
  font-size: 3.5rem;
  margin-right: 13px;
  flex-basis: 38px;
  flex-shrink: 0;
`;
const Title = styled.span`
  font-weight: 700;
  font-size: 1.8rem;
  line-height: 1.6;
  margin-right: 13px;
  flex-grow: 1;
`;
const ArrowIcon = styled(Arrow)`
  flex-shrink: 0;
  path {
    stroke: ${({ theme }) => theme.fontColor};
  }
`;

const ItemLink = styled.div`
  padding-left: 50px;
	margin-bottom: 5px;
`;
const ArticleLink = styled.a`
  font-size: 1.2rem;
	font-weight: 400;
`;
const LinkIcon = styled(Link)`
  margin-left: 8px;
`;

const ItemBottom = styled.div`
  padding-left: 50px;
  padding-top: 9px;
  padding-bottom: 10px;
  display: flex;
  justify-content: space-between;
`;
const Author = styled.span`
  height: 16px;
  display: block;
  background: ${({ theme }) => theme.activeColor};
  color: #fff;
  padding: 1px 9px;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 400;
`;
const CommentWrap = styled.span`
  color: #c0c0c0;
  font-size: 1rem;
`;
const CommentCount = styled.span`
  padding-left: 6px;
  padding-right: 6px;
  position: relative;
`;
const CommentUpdate = styled.span`
  padding-left: 6px;
  position: relative;

  &::before {
    content: '';
    width: 1px;
    height: 10px;
    background: #C0C0C0;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    margin: auto 0;
  }
`;

const ArticleItem = () => {
  return (
    <div>
      <ArticleItemWrap>
        <ItemTop>
          <Lank>1</Lank>
          <Title>Apple AirPods could soon identify you based on the shape of your ear</Title>
          <ArrowIcon></ArrowIcon>
        </ItemTop>
        <ItemLink>
          <ArticleLink href='#' target='_blank'>
            ribbonhealth.com
            <LinkIcon></LinkIcon>
          </ArticleLink>
        </ItemLink>
        <ItemBottom>
          <Author>kraenhansen</Author>
          <CommentWrap>
            <CommentIcon></CommentIcon>
            <CommentCount>0</CommentCount>
            <CommentUpdate>6 minutes ago</CommentUpdate>
          </CommentWrap>
        </ItemBottom>
      </ArticleItemWrap>
    </div>
  );
};

export default ArticleItem;