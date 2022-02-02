import React from 'react';
import PageHeader from '../components/UI/PageHeader';
import TopContents from '../components/TopContents';

const Top = () => {
  return (
    <>
      <PageHeader>
        <div className='page_header_top'>
          <h1>
            Check out today's <br />
            Popular Information
          </h1>
        </div>
        <div className='page_header_bottom'>
          <span>Recent Post : a few seconds ago</span>
        </div>
      </PageHeader>
      <TopContents></TopContents>
    </>
  );
};

export default Top;