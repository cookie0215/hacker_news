import React from 'react';
import styled from '@emotion/styled';
import ArticleItem from './ArticleItem';


const PageContentsWrap = styled.div`
  width: 100%;
`;

const ArticleList = styled.ul`
  width: 100%;
`;

const PageContents = ({ stories }) => {
  return (
    <PageContentsWrap>
      <ArticleList>
        {stories && stories.map(({ data: story }) => story && <ArticleItem key={story.id} story={story}></ArticleItem>)}
      </ArticleList>
    </PageContentsWrap>
  );
};

export default PageContents;