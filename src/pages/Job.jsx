import React from 'react';
import PageHeader from '../components/UI/PageHeader';
import PageContents from '../components/UI/PageContents';
import useAxios from '../hooks/useAxios';

const Job = ({ type }) => {
  const stories = useAxios(type ? type : 'job');
  return (
    <>
      <PageHeader>
        <div className='page_header_top'>
          <h1>
            What job you want? <br />
            Check out job!
          </h1>
        </div>
        <div className='page_header_bottom'>
          <span>Recent Post : a few seconds ago</span>
        </div>
      </PageHeader>
      <PageContents stories={stories}>
      </PageContents>
    </>
  );
};

export default Job;