import React from "react";
import "./Footer.css";
import gpt3logo from "../../assets/logo.svg";

const Footer = () => {
  return (
    <div className="footer section__padding">
      <div className="footer-heading">
        <h1 className="gradient__text">
          Do you want to step into the future before others
        </h1>
      </div>
      <div className="footer-button">
        <p>Request Early Access</p>
      </div>
      <div className="footer-links">
        <div className="footer-links__logo">
          <img src={gpt3logo} alt="logo" />
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
        <div className="footer-links__div">
          <h4>Links</h4>
          <p>Overans</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className="footer-links__div">
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className="footer-links__div">
          <h4>Get In Touch</h4>
          <p>Sydney, Australia</p>
          <p>085-37153910</p>
          <p>info@me.com</p>
        </div>
      </div>
      <div className="footer-copyright">
        <p>2022 GPT-3. All Rights Reserved </p>
      </div>
    </div>
  );
};

export default Footer;
