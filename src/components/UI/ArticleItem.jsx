import React from 'react';
import styled from '@emotion/styled';
import { NavLink, useLocation } from 'react-router-dom';
import { ReactComponent as CommentIcon } from '../../assets/comment.svg';
import { ReactComponent as Arrow } from '../../assets/right_arrow.svg'
import { ReactComponent as Link } from '../../assets/linkIcon.svg';

const ArticleItemWrap = styled.li`
  border-top: 1px solid #ECECEC;
  padding: 20px 15px 10px;
  margin: 0 15px;
`;
const ItemTop = styled(NavLink)`
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
  color: ${({ theme }) => theme.linkColor};
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


const ArticleItem = ({ index, story: { id, by, title, kids, time, url } }) => {
  const { pathname } = useLocation();
  return (
    <ArticleItemWrap>
      <ItemTop to={`item/${id}`}>
        <Lank>{index + 1}</Lank>
        <Title>{title}</Title>
        <ArrowIcon></ArrowIcon>
      </ItemTop>
      {pathname.includes('ask') || !url ? null :
        <ItemLink>
          <ArticleLink href={url} target='_blank' rel='noreferrer'>
            {url}
            <LinkIcon></LinkIcon>
          </ArticleLink>
        </ItemLink>
      }
      {pathname.includes('show') || pathname.includes('ask') ?
        <ItemBottom>
          <Author>{by}</Author>
          <CommentWrap>
            <CommentIcon></CommentIcon>
            <CommentCount>{kids !== undefined ? kids.length : '0'}</CommentCount>
            <CommentUpdate>6 minutes ago</CommentUpdate>
          </CommentWrap>
        </ItemBottom>
        : null}
    </ArticleItemWrap>
  );
};

export default React.memo(ArticleItem);