import React from "react";
import { Feature } from "../../components";

import "./Features.css";

const Features = () => {
  return (
    <div className="features section__padding" id="features">
      <div className="features-heading">
        <h1 className="gradient__text">
          The future is now you just need to realize it . Step into future today
          & make it happen.
        </h1>
        <p>Request early access to get started</p>
      </div>
      <div className="features-container">
        <Feature
          title="Improving end distrusts instantly"
          text="Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,"
        />
        <Feature
          title="Becoming the tend active"
          text="Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,"
        />
        <Feature
          title="Message or am nothing"
          text="Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,"
        />
        <Feature
          title="Really boy law county"
          text="Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,"
        />
      </div>
    </div>
  );
};

export default Features;
