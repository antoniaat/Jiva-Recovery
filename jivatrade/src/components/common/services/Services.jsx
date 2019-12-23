import React from "react";

// Import core components
import Service from "./Service";

// Import styles
import "./Services.scss";

// Import images and assets
import accidentImg from "../../../assets/images/icons/accident.png";
import hailImg from "../../../assets/images/icons/hail.png";
import towingImg from "../../../assets/images/icons/towing.png";

const Services = props => {
  return (
    <div className="Services">
      <header>
        <h1>OUR SERVICES</h1>
        <p className="service-title">EMERGENCY ROADSIDE ASSISTANCE</p>
      </header>

      <main>
        <section>
          <Service
            icon={accidentImg}
            title="Vehicle Recovery Service"
            description="Vehicle Recovery Service is avaliable 24/7"
          ></Service>
          <Service
            icon={hailImg}
            title="Vehicle Breakdown Service"
            description="Vehicle Breakdown Service is avaliable 24/7"
          ></Service>
          <Service
            icon={towingImg}
            title="Dealership and Fleet Services"
            description="Dealership and Fleet Services are avaliable 24/7"
          ></Service>
        </section>
      </main>
    </div>
  );
};

export default Services;
