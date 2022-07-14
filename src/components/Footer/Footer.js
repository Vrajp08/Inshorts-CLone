import React from "react";
import "./Footer.css";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'

const Footer = () => {
  return (
    <div className="footer">
      <span className="name">
        Inshorts clone made by -{" "}
        {/* <a href="https://www.linkedin.com/in/piyush-eon" target="__blank">
          Piyush Agarwal
        </a> */}
      </span>
      <hr style={{ width: "90%" }} />
      <div className="iconContainer">
     

        {/* <a href="https://www.instagram.com/roadsidecoder/" target="__blank"> */}
        <i class="fa-brands fa-instagram fa-2x"></i>

        {/* </a> */}
        {/* <a href="https://www.linkedin.com/in/piyush-eon" target="__blank"> */}
          <i className="fab fa-linkedin fa-2x"></i>
        {/* </a> */}
        <a href="https://piyushjsx.netlify.app/" target="__blank">
          <i className="fas fa-link fa-2x"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;