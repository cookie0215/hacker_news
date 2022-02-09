import React from 'react';
import PageHeader from '../components/UI/PageHeader';
import TopContents from '../components/Top/TopContents';

const Top = () => {
  return (
    <>
      <PageHeader title={["Check out today's", "Popular Information"]}>
      </PageHeader>
      <TopContents type='top' />
    </>
  );
};

export default Top;