import React from 'react';
import styled from '@emotion/styled';

const Wrap = styled.div`
  width: 100%;
  padding: 25px;
`;

const Content = styled.div`
  font-size: 1.4rem;
`;

const DetailContent = () => {
  // dangerouslySetInnerHTML={{ __html: text }}  html내용 text형태로 바꿔서 보여줌
  return (
    <Wrap>
      <Content>
        https://www.docker.com/blog/the-grace-period-for-the-docker-subscription-service-agreement-ends-soon-heres-what-you-need-to-know/

        I heard that OSS does not discriminate against particular use cases. If Docker soon requires a paid subscription for companies of a certain size, doesn't discriminate against a use case...or user (?)...so would that make it not free or OSS?
      </Content>
    </Wrap>
  );
};

export default DetailContent;