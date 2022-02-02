import styled from '@emotion/styled';
import PageHeader from '../components/UI/PageHeader';
import TopArticle from '../components/TopArticle';
import NewArticle from '../components/NewArticle';

const Wrap = styled.section`
  width: 100%;
  background: #F4F4F4;
  overflow: hidden;
`;

const Home = () => {
  return (
    <Wrap>
      <PageHeader>
        <div className='page_header_top'>
          <h1>
            Check out today's <br />
            Popular Information
          </h1>
        </div>
      </PageHeader>
      <TopArticle></TopArticle>
      <NewArticle ></NewArticle>
    </Wrap>
  );
};

export default Home;