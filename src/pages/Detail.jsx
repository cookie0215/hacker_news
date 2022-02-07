import React from 'react';
import styled from '@emotion/styled';
import DetailHeader from '../components/UI/DetailHeader';
import DetailTitle from '../components/UI/DetailTitle';
import DetailContent from '../components/UI/DetailContent';

const DetailContainer = styled.div``;

const Detail = () => {
  return (
    <DetailContainer>
      <DetailHeader />
      <DetailTitle />
      <DetailContent />
    </DetailContainer>
  );
};

export default Detail;