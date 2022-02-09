import styled from '@emotion/styled';
import PageHeader from '../components/UI/PageHeader';
import HomeTopArticle from '../components/Home/HomeTopArticle';
import HomeEtcArticle from '../components/Home/HomeEtcArticle';

const Wrap = styled.section`
  width: 100%;
  overflow: hidden;
`;



const Home = () => {
  return (
    <Wrap>
      <PageHeader title={["Check out today's", "Popular Information"]}>
      </PageHeader>
      <HomeTopArticle type='top'></HomeTopArticle>
      <HomeEtcArticle></HomeEtcArticle>
    </Wrap>
  );
};

export default Home;