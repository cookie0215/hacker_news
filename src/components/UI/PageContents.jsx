import React from 'react';
import styled from '@emotion/styled';
import ArticleItem from './ArticleItem';
import { ReactComponent as MoreIcon } from '../../assets/more.svg';


const PageContentsWrap = styled.div`
  width: 100%;
`;

const ArticleList = styled.ul`
  width: 100%;
`;
const MoreWrap = styled.div`
  width: 100%;
  padding: 26px 0 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PageContents = ({ stories }) => {
  return (
    <PageContentsWrap>
      <ArticleList>
        {stories && stories.map(({ data: story }, index) => story && <ArticleItem key={story.id} story={story} index={index} />)}
      </ArticleList>
      <MoreWrap>
        <MoreIcon />
      </MoreWrap>
    </PageContentsWrap>
  );
};

export default PageContents;