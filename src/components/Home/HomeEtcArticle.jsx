import styled from '@emotion/styled';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import HomeEtcItem from './HomeEtcItem'

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

const Slides = styled(Slider)`
  width: 100%;
  display: flex;
`;


const HomeEtcArticle = () => {
  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 8000,
    speed: 500,
    arrows: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 1, slidesToScroll: 1
        }
      },
    ]
  };
  return (
    <Wrap>
      <Title>Today’s New!</Title>
      <Slides {...settings}>
        <HomeEtcItem title="New" type='new' />
        <HomeEtcItem title="Show" type='show' />
        <HomeEtcItem title="Ask" type='ask' />
        <HomeEtcItem title="Job" type='job' />
      </Slides>
    </Wrap>
  );
};

export default HomeEtcArticle;