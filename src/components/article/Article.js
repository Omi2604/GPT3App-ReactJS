import React from "react";
import "./Article.css";

const Article = ({ imgUrl, title, date }) => {
  return (
    <div className="blog-container__article">
      <div className="blog-container__article-image">
        <img src={imgUrl} alt="blog" />
      </div>
      <div className="blog-container__article-content">
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
        </div>
        <p>Read full article</p>
      </div>
    </div>
  );
};

export default Article;
