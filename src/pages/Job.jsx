import React from 'react';
import PageHeader from '../components/UI/PageHeader';
import PageContents from '../components/UI/PageContents';

const Job = () => {
  return (
    <>
      <PageHeader title={["What job you want?", "Check out job!"]}>
      </PageHeader>
      <PageContents type='job'>
      </PageContents>
    </>
  );
};

export default Job;