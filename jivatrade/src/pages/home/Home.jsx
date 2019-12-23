import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Home.scss";

// Import core components
import Header from "../../components/common/header/Header";

class HomePage extends Component {
  render() {
    return (
      <div className="HomePage">
        <Header></Header>
        HomePage
      </div>
    );
  }
}

export default HomePage;
