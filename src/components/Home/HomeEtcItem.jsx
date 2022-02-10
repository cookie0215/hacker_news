import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import HomeContItem from './HomeContItem';
import useAxios from '../../hooks/useAxios';
import { ReactComponent as ArrowIcon } from '../../assets/right_arrow.svg';

const SlideItem = styled.li`
  background: ${({ theme }) => theme.modalBgColor};
  border-radius: 10px;
  padding: 9px 0;
  display: flex;
  flex-direction: column;
  box-shadow: 1px 1px 5px ${({ theme }) => theme.shadowColor};
  margin-right: 16px;
  margin-bottom: 14px;
`;
const SlideHeader = styled.div`
  padding: 12px 9px 0 21px;
  display: flex;
  justify-content: space-between;
`;
const SubTitle = styled.h4`
  font-size: 1.8rem;
  font-weight: bold;
`;


const SlideContent = styled.div`
  padding-top: 23px;
`;

const HomeEtcItem = ({ type, title }) => {
  const stories = useAxios(type);
  return (
    <SlideItem>
      <SlideHeader>
        <SubTitle>{title}</SubTitle>
        <Link to={`/${title}`}>
          <ArrowIcon width="10" height="20"></ArrowIcon>
        </Link>
      </SlideHeader>
      <SlideContent>
        {stories && stories.slice(0, 5).map(({ data: story }) =>
          <HomeContItem key={story.id} story={story} />
        )}
      </SlideContent>
    </SlideItem >
  );
};

export default HomeEtcItem;