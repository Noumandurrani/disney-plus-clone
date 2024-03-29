import React from "react";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function ImgSlider() {
  let setting = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Carousel {...setting}>
      <Wrap>
        <img src="/images/slider-badging.jpg"></img>
      </Wrap>
      <Wrap>
        <img src="/images/slider-badag.jpg"></img>
      </Wrap>
      <Wrap>
        <img src="/images/slider-scale.jpg"></img>
      </Wrap>
      <Wrap>
        <img src="/images/slider-scales.jpg"></img>
      </Wrap>
    </Carousel>
  );
}

export default ImgSlider;

const Carousel = styled(Slider)`
  margin-top: 20px;
  .slick-list {
    overflow: visible;
  }
  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }
  li.slick-active button::before {
    color: white;
  }
  button {
    z-index: 1;
  }
`;
const Wrap = styled.div`
  cursor: pointer;
  img {
    border: 4px solid transparent;
    border-radius: 4px;
    width: 100%;
    height: 100%;
    box-shadow: rgb(0 0 0 /69%) 0px 25px 30px -10px,
      rgb(0 0 0 /73%) 0 16px 10px -10px;
    transition-duration: 300ms;
    &:hover {
      border: 4px solid rgba(249, 249, 249, 0.8);
    }
  }
`;
