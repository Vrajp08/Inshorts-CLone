import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <span className="name">
        Inshorts clone 
      </span>
      <hr style={{ width: "90%" }} />
      <div className="iconContainer">
        <i class="fa-brands fa-instagram fa-2x"></i>
          <i className="fab fa-linkedin fa-2x"></i>
      </div>
    </div>
  );
};

export default Footer;
