import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Home.scss";

// Import core components
import Header from "../../components/common/header/Header";
import HeaderSlider from "../../components/common/slider/HeaderSlider";
import Cta from "../../components/common/cta/Cta";
import Services from "../../components/common/services/Services";
import HomeGallery from "../../components/common/gallery/HomeGallery";
import Footer from "../../components/common/footer/Footer";

class HomePage extends Component {
  render() {
    return (
      <div className="HomePage">
        <Header></Header>
        <HeaderSlider></HeaderSlider>
        <Cta></Cta>
        <Services></Services>
        <HomeGallery></HomeGallery>
        <Footer></Footer>
      </div>
    );
  }
}

export default HomePage;
