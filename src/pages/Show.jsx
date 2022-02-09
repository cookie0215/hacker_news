import React from 'react';
import PageHeader from '../components/UI/PageHeader';
import PageContents from '../components/UI/PageContents';

const Show = () => {
  return (
    <>
      <PageHeader title={["Check out", "hacker's work"]}>
      </PageHeader>
      <PageContents type='show'>
      </PageContents>
    </>
  );
};

export default Show;