import React from "react";
import "./Header.css";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";

const Header = () => {
  return (
    <div className="header section__padding" id="home">
      <div className="header-content">
        <h1 className="gradient__text">
          Lets Build Something amazing with GPT-3 OpenAI
        </h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,
        </p>
        <div className="header-content__input">
          <input
            className=""
            type="email"
            placeholder="Your email address"
          ></input>
          <button type="button">Get Started</button>
        </div>
        <div className="header-content__people">
          <img src={people} alt="number of users" />
          <p>1600 people requested access in last 24 hours</p>
        </div>
      </div>
      <div className="header-image">
        <img src={ai} alt="AI face" />
      </div>
    </div>
  );
};

export default Header;
