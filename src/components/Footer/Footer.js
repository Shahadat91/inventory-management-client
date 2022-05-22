import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitterSquare,
  faFacebookSquare,
  faInstagramSquare,
} from "@fortawesome/free-brands-svg-icons";

import "./Footer.css";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <div>
      <footer className="footer">
        <div className="footer-style">
          <div className="mt-3">
            <h5>Contact us</h5>
            <p className="mb-0">Email: support@chairbazar.com</p>
            <p className="mb-0">Cell: 017-000000</p>
          </div>
          <div>
            <h5>flow us</h5>
            <FontAwesomeIcon
              className="fs-5 text-light ms-3"
              icon={faTwitterSquare}
            />
            <FontAwesomeIcon
              className="fs-5 text-light ms-3"
              icon={faInstagramSquare}
            />
            <FontAwesomeIcon
              className="fs-5 text-light ms-3"
              icon={faFacebookSquare}
            />
          </div>
        </div>

        <small>
          Copyright &copy; {year} Wild Photographer All Rights Reserved
        </small>
      </footer>
    </div>
  );
};

export default Footer;
