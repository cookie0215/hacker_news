import React from 'react';
import styled from '@emotion/styled';
import DetailHeader from '../components/Detail/DetailHeader';
import DetailTitle from '../components/Detail/DetailTitle';
import DetailContent from '../components/Detail/DetailContent';
import Comments from '../components/Detail/Comments';

const DetailContainer = styled.div`
  position: relative;
`;

const Detail = () => {
  return (
    <DetailContainer>
      <DetailHeader />
      <DetailTitle />
      <DetailContent />
      <Comments />
    </DetailContainer>
  );
};

export default Detail;