import React from 'react';
import styled from '@emotion/styled';
import TopArticleItem from './TopArticleItem';
import { ReactComponent as MoreIcon } from '../../assets/more.svg';
import useAxios from '../../hooks/useAxios'


const Wrap = styled.section`
`;
const Articles = styled.ul`
  width: 100%;
`;
const MoreWrap = styled.div`
  width: 100%;
  padding: 35px 0 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TopContents = ({ type }) => {
  const stories = useAxios(type);
  return (
    <Wrap>
      <Articles>
        {stories && stories.map(
          ({ data: story }, index) => story && <TopArticleItem key={story.id} story={story} index={index} />
        )}
      </Articles>
      <MoreWrap>
        <MoreIcon />
      </MoreWrap>
    </Wrap>
  );
};

export default React.memo(TopContents);