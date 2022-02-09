import React from 'react';
import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Arrow } from '../../assets/right_arrow.svg';
import { ReactComponent as Link } from '../../assets/linkIcon.svg'

const Article = styled.li`
  width: 100%;
  background: #FF6B00;
  padding: 21px 15px;
  color: #fff;
`;

const ArticleTop = styled(NavLink)`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 5px;
  color: #fff;
`;
const Lank = styled.span`
  font-size: 5rem;
  line-height: 0.8;
  margin-right: 12px;
  flex-basis: 38px;
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

const ItemLink = styled.div`
  padding-left: 50px;
	margin-bottom: 5px;
`;
const ArticleLink = styled.a`
  font-size: 1.2rem;
	font-weight: 400;
  color: #fff;
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

const TopArticleItem = ({ index, story: { id, by, title, kids, time, url, score } }) => {
  return (
    <>
      <Article>
        <ArticleTop to={`item/${id}`}>
          <Lank>{index + 1}</Lank>
          <Title>{title}</Title>
          <ArrowIcon></ArrowIcon>
        </ArticleTop>
        {!url ? null :
          <ItemLink>
            <ArticleLink href={url} target='_blank' rel='noreferrer'>
              {url}
              <LinkIcon></LinkIcon>
            </ArticleLink>
          </ItemLink>
        }
        <ArticleBottom>
          <Update>{score} points by {by} a few seconds ago </Update>
          <Comments>{kids !== undefined ? kids.length : '0'} comments</Comments>
        </ArticleBottom>
      </Article>
    </>
  );
};

export default React.memo(TopArticleItem);