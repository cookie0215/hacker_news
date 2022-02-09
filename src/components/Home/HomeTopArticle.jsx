import React from 'react';
import styled from '@emotion/styled';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import useAxios from '../../hooks/useAxios';
import HomeSlideItem from './HomeSlideItem';

const Wrap = styled.article`
  padding-top: 28px;
  padding-bottom: 25px;
  padding-left: 18px;

  .slick-dots {
    width: auto;
  }
  .slick-dots li {
    cursor: pointer;
    transition: width 0.3s ease-in-out;
      margin-left: 6px;
      margin-right: 0;
  }
  .slick-dots li button::before {
    content: '';
    width: 10px;
    height: 10px;
    background: #C4C4C4;
    border-radius: 50%;
    bottom: 0;
    right: 0;
    margin: auto;
  }
  .slick-dots li.slick-active {
    width: 30px;
    transition: width 0.3s ease-in-out;
  }
  .slick-dots li.slick-active button::before {
    width: 30px;
    border-radius: 8px;
    background: #FF6B00;
  }
`;

const Slides = styled(Slider)`
width: 100%;
`

const TopArticle = ({ type }) => {
  const stories = useAxios(type);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 2,
    slidesToScroll: 1,
  };
  return (
    <Wrap>
      <Slides {...settings}>
        {stories && stories.slice(0, 5).map(({ data: story }) =>
          <HomeSlideItem key={story.id} story={story}></HomeSlideItem>
        )}
      </Slides>
    </Wrap >
  );
};

export default React.memo(TopArticle); 