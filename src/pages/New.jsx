import React from 'react';
import PageHeader from '../components/UI/PageHeader';
import PageContents from '../components/UI/PageContents';

const New = () => {
  return (
    <>
      <PageHeader title={["Check out today's", "News now"]}>
      </PageHeader>
      <PageContents type='new'>
      </PageContents>
    </>
  );
};

export default New;