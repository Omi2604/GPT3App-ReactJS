import React from "react";
import { Feature } from "../../components";
import "./whatGPT3.css";

const whatGPT3 = () => {
  return (
    <div className="whatgpt3 section__margin" id="wgpt3">
      <div className="whatgpt3-feature">
        <Feature
          title="What is GPT-3"
          text="Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,"
        />
      </div>
      <div className="whatgpt3-heading">
        <h1 className="gradient__text">
          The possibilities are beyound your imagination
        </h1>
        <p>Explore the library</p>
      </div>
      <div className="whatgpt3-container">
        <Feature
          title="Chatbots"
          text="Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,"
        />
        <Feature
          title="Knowledgebase"
          text="Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,"
        />
        <Feature
          title="Education"
          text="Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,"
        />
      </div>
    </div>
  );
};

export default whatGPT3;
