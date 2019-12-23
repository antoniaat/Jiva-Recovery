import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Home.scss";

// Import core components
import Header from "../../components/common/header/Header";
import HeaderSlider from "../../components/common/slider/HeaderSlider";

class HomePage extends Component {
  render() {
    return (
      <div className="HomePage">
        <Header></Header>
        <HeaderSlider></HeaderSlider>
        HomePage
      </div>
    );
  }
}

export default HomePage;
