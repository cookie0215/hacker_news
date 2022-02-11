import React, { useRef, useState } from 'react';
import styled from '@emotion/styled';
import ArticleItem from './ArticleItem';
import { ReactComponent as MoreIcon } from '../../assets/more.svg';
import useAxios from '../../hooks/useAxios';


const PageContentsWrap = styled.div`
  width: 100%;
`;

const ArticleList = styled.ul`
  width: 100%;
`;
const More = styled.div`
  width: 100%;
  padding: 26px 0 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  `;
const MoreWrap = styled.span`
  cursor: pointer;
`;


const PageContents = ({ type }) => {
  const stories = useAxios(type);
  const addArticle = () => {
  }
  return (
    <PageContentsWrap>
      <ArticleList>
        {stories && stories.map(({ data: story }, index) =>
          story && <ArticleItem key={story.id} story={story} index={index} />
        )}
      </ArticleList>
      <More>
        <MoreWrap onClick={addArticle}>
          <MoreIcon />
        </MoreWrap>
      </More>
    </PageContentsWrap>
  );
};

export default React.memo(PageContents);