import React from "react";
import "./Possibility.css";
import possibilityImage from "../../assets/possibility.png";

const Possibility = () => {
  return (
    <div className="possibility section__padding" id="possibility">
      <div className="possibility-image">
        <img src={possibilityImage} alt="women with AR headset" />
      </div>
      <div className="possibility-content">
        <h4>Request early access to get started</h4>
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,
        </p>
        <h4>Request early access </h4>
      </div>
    </div>
  );
};

export default Possibility;
