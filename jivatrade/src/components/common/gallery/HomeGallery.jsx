import React, { Component } from "react";
import Gallery from "react-photo-gallery";

// Import gallery images
import oneImg from "../../../assets/images/gallery/1.png";
import twoImg from "../../../assets/images/gallery/2.png";
import threeImg from "../../../assets/images/gallery/3.png";
import fourthImg from "../../../assets/images/gallery/4.png";
import fiftImg from "../../../assets/images/gallery/5.png";
import sixImg from "../../../assets/images/gallery/6.png";
import sevenImg from "../../../assets/images/gallery/7.png";
import eightImg from "../../../assets/images/gallery/8.png";
import nineImg from "../../../assets/images/gallery/9.png";
import tenImg from "../../../assets/images/gallery/10.png";

const PHOTO_SET = [
  {
    src: oneImg,
    width: 4,
    height: 3
  },
  {
    src: twoImg,
    width: 1,
    height: 1
  },
  {
    src: threeImg,
    width: 1,
    height: 1
  },
  {
    src: fourthImg,
    width: 1,
    height: 1
  },
  {
    src: fiftImg,
    width: 1,
    height: 1
  },
  {
    src: sixImg,
    width: 1,
    height: 1
  },
  {
    src: sevenImg,
    width: 1,
    height: 1
  },
  {
    src: eightImg,
    width: 1,
    height: 1
  },
  {
    src: nineImg,
    width: 1,
    height: 1
  },
  {
    src: tenImg,
    width: 1,
    height: 1
  }
];

export default class Sample extends Component {
  render() {
    return <Gallery className="home-page-gallery" photos={PHOTO_SET} />;
  }
}
