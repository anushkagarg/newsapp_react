import React from "react";

const Card = (props) => {
  const { article } = props;
  return (
    <div class="col-md-3">
      <div class="card">
        <img
          class="img-fluid"
          src="https://ichef.bbci.co.uk/news/624/cpsprodpb/A65E/production/_90709524_a8f74dc1-ebc2-4c7d-b71c-8dde30c96386.jpg"
          alt=""
        />
        <div class="card-img-overlay">
          {" "}
          <span class="badge badge-pill badge-danger">News</span>{" "}
        </div>
        <div class="card-body">
          <div class="news-title">
            <h2 class=" title-small">
              <a href="#">{article.title}</a>
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
