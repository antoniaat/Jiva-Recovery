import React from "react";
import { Link } from "react-router-dom";

// Import styles
import "./Footer.scss";

// Import images and assets
import logo from "../../../assets/images/logo.png";

// Import icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faMap } from "@fortawesome/free-solid-svg-icons";
import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Footer = props => {
  const fbIcon = <FontAwesomeIcon icon={faFacebookF} />;
  const instagramIcon = <FontAwesomeIcon icon={faInstagram} />;
  const mapIcon = <FontAwesomeIcon icon={faMap} />;
  const mailIcon = <FontAwesomeIcon icon={faMailBulk} />;
  const phoneIcon = <FontAwesomeIcon icon={faPhone} />;
  const clockIcon = <FontAwesomeIcon icon={faClock} />;
  const rightArrowIcon = <FontAwesomeIcon icon={faArrowRight} />;

  return (
    <div className="Footer">
      <section className="about-us">
        <img src={logo}></img>
        <p>
          We provide highest quality towing services. We are fast and reliable.
          We work fast and a smile! Call us if you need car recovery service!
        </p>
        <article className="social-media-box">
          <a href="https://www.facebook.com/jivarecovery/">
            <span>{fbIcon}</span>
          </a>
          <a href="https://www.instagram.com/jivarecovery/">
            <span>{instagramIcon}</span>
          </a>
        </article>
      </section>
      <section className="get-in-touch">
        <h3>
          GET IN <strong>TOUCH</strong>
        </h3>
        <a href="https://goo.gl/maps/JhQSWkSP8EHWh4js9">
          <span>{mapIcon}</span> 52 Hunters Way, Slough, SL1 5UB
        </a>
        <a href="mailto:jivatradeuk@gmail.com">
          <span>{mailIcon}</span> jivatradeuk@gmail.com
        </a>
        <a href="tel:447957511350">
          <span>{phoneIcon}</span> +447957511350
        </a>
        <a href="https://goo.gl/maps/JhQSWkSP8EHWh4js9">
          <span>{clockIcon}</span> 24 hours a day, 7 days a week
        </a>
      </section>
      <section className="useful-links">
        <ul>
          <h3>
            USEFUL <strong>LINKS</strong>
          </h3>
          <li>
            <span>{rightArrowIcon}</span> <Link>About</Link>
          </li>
          <li>
            <span>{rightArrowIcon}</span> <Link>Gallery</Link>
          </li>
          <li></li>
          <li>
            <span>{rightArrowIcon}</span>
            <Link>Services</Link>
          </li>
          <li>
            <span>{rightArrowIcon}</span> <Link>Contacts</Link>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Footer;
