import React from "react";
import "./Blog.css";
import { Article } from "../../components";
import { blog01, blog02, blog03, blog04, blog05 } from "./imports";

const Blog = () => {
  return (
    <div className="blog section__padding" id="blog">
      <div className="blog-heading">
        <h1 className="gradient__text">
          A lot is happening, We are blogging about it.
        </h1>
      </div>
      <div className="blog-container">
        <div className="blog-container__groupA">
          <Article
            imgUrl={blog01}
            date="04 Sept 2021"
            title="GPT-3 and Open AI is the future. let us explore how is it?"
          />
        </div>
        <div className="blog-container__groupB">
          <Article
            imgUrl={blog02}
            date="04 Sept 2021"
            title="GPT-3 and Open AI is the future. let us explore how is it?"
          />
          <Article
            imgUrl={blog03}
            date="04 Sept 2021"
            title="GPT-3 and Open AI is the future. let us explore how is it?"
          />
          <Article
            imgUrl={blog04}
            date="04 Sept 2021"
            title="GPT-3 and Open AI is the future. let us explore how is it?"
          />
          <Article
            imgUrl={blog05}
            date="04 Sept 2021"
            title="GPT-3 and Open AI is the future. let us explore how is it?"
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
