import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import ContItem from './ContItem';
import { ReactComponent as ArrowIcon } from '../../assets/right_arrow.svg';

const Wrap = styled.article`
  padding-top: 12px;
  padding-bottom: 32px;
  padding-left: 15px;
`;
const Title = styled.h2`
  font-weight: bold;
  font-size: 1.8rem;
  line-height: 2.4;
  color: ${({ theme }) => theme.fontColor};
`;

const Slides = styled.ul`
  width: 400%;
  display: flex;
`;
const SlideItem = styled.li`
  width: 15%;
  background: #fff;
  border-radius: 10px;
  padding: 9px 0;
  display: flex;
  flex-direction: column;
  box-shadow: 1px 1px 5px ${({ theme }) => theme.shadowColor};

  & + & {
    margin-left: 30px;
  }
`;
const SlideHeader = styled.div`
  padding: 12px 9px 0 21px;
  display: flex;
  justify-content: space-between;
`;
const SubTitle = styled.h4`
  font-size: 1.8rem;
  font-weight: bold;
`;


const SlideContent = styled.div`
  padding-top: 23px;
`;


const HomeEtcArticle = () => {
  return (
    <Wrap>
      <Title>Today’s New!</Title>
      <Slides>
        <SlideItem>
          <SlideHeader>
            <SubTitle>New</SubTitle>
            <Link to='/new'>
              <ArrowIcon width="10" height="20"></ArrowIcon>
            </Link>
          </SlideHeader>
          <SlideContent>
            <ContItem></ContItem>
            <ContItem></ContItem>
            <ContItem></ContItem>
            <ContItem></ContItem>
          </SlideContent>
        </SlideItem>
        <SlideItem>
          <SlideHeader>
            <SubTitle>Ask</SubTitle>
            <Link to='/Ask'>
              <ArrowIcon width="10" height="20"></ArrowIcon>
            </Link>
          </SlideHeader>
          <SlideContent>
            <ContItem></ContItem>
          </SlideContent>
        </SlideItem>
      </Slides>
    </Wrap>
  );
};

export default HomeEtcArticle;