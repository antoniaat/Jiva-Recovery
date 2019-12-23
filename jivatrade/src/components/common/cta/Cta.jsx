import React from "react";

// Import styles
import "./Cta.scss";

// Import icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const Cta = props => {
  const clockIcon = <FontAwesomeIcon icon={faClock} />;
  const phoneIcon = <FontAwesomeIcon icon={faPhone} />;

  return (
    <div className="Cta">
      <article>
        <span>{clockIcon}</span>
        <h3>FAST ARRIVAL, GREAT SERVICE</h3>
      </article>
      <article>
        <a href="tel:447957511350">+44 795 751 1350</a>
      </article>
      <article>
        <span>{phoneIcon}</span>
        <h3>
          <strong>24/7 </strong>CAR RECOVERY SERVICE
        </h3>
      </article>
    </div>
  );
};

export default Cta;
