import React from 'react';
import PageHeader from '../components/UI/PageHeader';
import PageContents from '../components/UI/PageContents';

const New = () => {
  return (
    <>
      <PageHeader>
        <div className='page_header_top'>
          <h1>
            Check out today's <br />
            News now
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

export default New;