import React from "react";
import "./Brand.css";
import { google, slack, atlassian, dropbox, shopify } from "./import";

const Brand = () => {
  return (
    <div className="brand section__padding">
      <div>
        <img src={google} alt="google logo" />
      </div>
      <div>
        <img src={slack} alt="slack logo" />
      </div>
      <div>
        <img src={atlassian} alt="atlassian logo" />
      </div>
      <div>
        <img src={dropbox} alt="dropbox logo" />
      </div>
      <div>
        <img src={shopify} alt="shopify logo" />
      </div>
    </div>
  );
};

export default Brand;
