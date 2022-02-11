import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const SlideItem = styled.div`
  height: 182px;
  background: ${({ theme }) => theme.modalBgColor};
  border-radius: 10px;
  padding: 27px 16px 32px;
  display: flex;
  flex-direction: column;
  box-shadow: 1px 1px 5px ${({ theme }) => theme.shadowColor};
  margin-right: 16px;
  margin-bottom: 14px;
`;
const Author = styled.p`
  font-weight: bold;
  font-size: 1.2rem;
  color: #FF6B00;
  margin-bottom: 6px;
`;
const MovePage = styled(Link)`
  color: ${({ theme }) => theme.fontColor};
`;
const Title = styled.h3`
  font-size: 1.4rem;
  flex-basis: 63px;
  font-weight: 600;
  margin-bottom: 12px;
`;
const ExUrl = styled.a`
  font-size: 0.9rem;
  color: #BFBFBF;
    margin-bottom: 5px;
`;
const Update = styled.div`
  font-size: 0.9rem;
  color: #9F9F9F;
  margin-bottom: 5px;
`;

const HomeTopItem = ({ story: { id, by, title, url, time } }) => {
  return (
    <SlideItem>
      <Author>by {by} </Author>
      <MovePage to={`top/item/${id}`}><Title>{title} </Title></MovePage>
      <ExUrl href={url} target='_blank' rel='noreferrer'>{(url || '').split('/')[2]}</ExUrl>
      <Update>{time} hours ago</Update>
    </SlideItem>
  );
};

export default React.memo(HomeTopItem);