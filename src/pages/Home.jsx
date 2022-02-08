import styled from '@emotion/styled';
import PageHeader from '../components/UI/PageHeader';
import HomeTopArticle from '../components/HomeTopArticle';
import HomeNewArticle from '../components/HomeNewArticle';

const Wrap = styled.section`
  width: 100%;
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
      <HomeTopArticle></HomeTopArticle>
      <HomeNewArticle></HomeNewArticle>
    </Wrap>
  );
};

export default Home;