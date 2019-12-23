import React, { Component } from "react";
import Slider from "react-slick";

// Import styles
import "./HeaderSlider.scss";

// Import images and assets
import firstSlide from "../../../assets/images/slider/1.png";
import secondSlide from "../../../assets/images/slider/2.png";

class HeaderSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      lazyLoad: true,
      adaptiveHeight: true,
      fade: true,
      arrows: true,
      autoplaySpeed: 5000
    };

    return (
      <Slider {...settings} className="HeaderSlider">
        <div>
          <img src={firstSlide} alt="slide-img"></img>
          <div className="HeaderSlider">
            <header>
              <h2>WE PROVIDE HIGHEST QUALITY</h2>
              <h2>TOWING SERVICES</h2>
              <p>
                Fast, courteous and inexpensive towing and roadside assistance.
              </p>
            </header>
          </div>
        </div>
        <div>
          <img src={secondSlide} alt="slide-img"></img>
          <header>
            <h2>WE PROVIDE HIGHEST QUALITY</h2>
            <h2>TOWING SERVICES</h2>
            <p>
              Fast, courteous and inexpensive towing and roadside assistance.
            </p>
          </header>
        </div>
        <div>
          <img src={firstSlide} alt="slide-img"></img>
          <header>
            <h2>WE PROVIDE HIGHEST QUALITY</h2>
            <h2>TOWING SERVICES</h2>
            <p>
              Fast, courteous and inexpensive towing and roadside assistance.
            </p>
          </header>
        </div>
      </Slider>
    );
  }
}

export default HeaderSlider;
