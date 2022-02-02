import React from 'react';
import PageHeader from '../components/UI/PageHeader';
import PageContents from '../components/UI/PageContents';

const Show = () => {
  return (
    <>
      <PageHeader>
        <div className='page_header_top'>
          <h1>
            Check out<br />
            hacker's work
          </h1>
        </div>
        <div className='page_header_bottom'>
          <span>Recent Post : a few seconds ago</span>
        </div>
      </PageHeader>
      <PageContents>
      </PageContents>
    </>
  );
};

export default Show;