import React from "react";

const Card = (props) => {
  const { article } = props;
  return (
    <div class="col-md-3">
      <div class="card">
        <img
          class="img-fluid"
          src=
          alt=""
        />
        <div class="card-img-overlay">
          {" "}
          <span class="badge badge-pill badge-danger">News</span>{" "}
        </div>
        <div class="card-body">
          <div class="news-title">
            <h2 class=" title-small">
              <a href={article.url}>{article.title}</a>
            </h2>
          </div>
          <p class="card-text">
            <small class="text-time">
              <em>{article.publishedAt}</em>
            </small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
