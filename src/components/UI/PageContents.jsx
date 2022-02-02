import React from 'react';
import styled from '@emotion/styled';
import ArticleItem from './ArticleItem';

const PageContentsWrap = styled.div`
  width: 100%;
`;

const ArticleList = styled.ul`
  width: 100%;
`;

const PageContents = () => {
  return (
    <PageContentsWrap>
      <ArticleList>
        <ArticleItem></ArticleItem>
      </ArticleList>
    </PageContentsWrap>
  );
};

export default PageContents;