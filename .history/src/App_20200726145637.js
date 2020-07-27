import React, { Component } from "react";
import "./App.css";
import logo from "./logo.svg";
import Header from "./Header";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  componentDidMount() {
    // get all entities - GET
    fetch(
      "http://newsapi.org/v2/everything?apiKey=1e79b4b4e5f44f55afd238d5f56efd24",
      {
        method: "GET",
        
        params: {
          q: "bitcoin",
          // "from":"2020-06-25",
          sortBy: "publishedAt",
          apiKey: "1e79b4b4e5f44f55afd238d5f56efd24",
        },
      }
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        this.setState({
          data: response,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    return (
      <div className="App">
        <Header />
        <section class="top-nav">
          <nav class="navbar navbar-expand-lg py-0">
            <div class="container">
              <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="exCollapsingNavbar2">
                <ul class="nav navbar-nav ">
                  <li class="nav-item active">
                    {" "}
                    <a class="nav-link" href="#">
                      Home <span class="sr-only">(current)</span>
                    </a>{" "}
                  </li>
                  <li class="nav-item">
                    {" "}
                    <a class="nav-link" href="#">
                      World
                    </a>{" "}
                  </li>
                  <li class="nav-item">
                    {" "}
                    <a class="nav-link" href="#">
                      Politics
                    </a>{" "}
                  </li>
                  <li class="nav-item">
                    {" "}
                    <a class="nav-link" href="#">
                      Business
                    </a>{" "}
                  </li>
                  <li class="nav-item">
                    {" "}
                    <a class="nav-link" href="#">
                      Science
                    </a>{" "}
                  </li>
                  <li class="nav-item">
                    {" "}
                    <a class="nav-link" href="#">
                      Sports
                    </a>{" "}
                  </li>
                  <li class="nav-item">
                    {" "}
                    <a class="nav-link" href="#">
                      Tech
                    </a>{" "}
                  </li>
                  <li class="nav-item">
                    {" "}
                    <a class="nav-link" href="#">
                      Travel
                    </a>{" "}
                  </li>
                  <li class="nav-item">
                    {" "}
                    <a class="nav-link" href="#">
                      Health
                    </a>{" "}
                  </li>
                </ul>
                <form class="ml-auto">
                  <div class="search">
                    <input
                      type="text"
                      class="form-control"
                      maxlength="64"
                      placeholder="Search"
                    />
                    <button type="submit" class="btn btn-search">
                      <i class="fa fa-search"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </nav>
        </section>
        <section class="banner-sec">
          <div class="container">
            <div class="row">
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
                        <a href="#">
                          Syria war: Why the battle for Aleppo matters
                        </a>
                      </h2>
                    </div>
                    <p class="card-text">
                      <small class="text-time">
                        <em>3 mins ago</em>
                      </small>
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-3">
                <div class="card">
                  {" "}
                  <img
                    class="img-fluid"
                    src="https://i.guim.co.uk/img/media/73ec9db7723a38dba49ba7409c57da3a779b9531/690_23_3882_2329/master/3882.jpg?width=620&quality=85&auto=format&fit=max&s=372bc821a8d937e821981014036b2c8f"
                    alt=""
                  />
                  <div class="card-img-overlay">
                    {" "}
                    <span class="badge badge-pill badge-danger">Politics</span>
                  </div>
                  <div class="card-body">
                    <div class="news-title">
                      <h2 class=" title-small">
                        <a href="#">
                          Key Republicans sign letter warning against
                        </a>
                      </h2>
                    </div>
                    <p class="card-text">
                      <small class="text-time">
                        <em>3 mins ago</em>
                      </small>
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-3">
                <div class="card">
                  {" "}
                  <img
                    class="img-fluid"
                    src="https://static01.nyt.com/images/2016/08/09/business/09UP-Medicaid/09UP-Medicaid-superJumbo.jpg?quality=90&auto=webp"
                    alt=""
                  />
                  <div class="card-img-overlay">
                    {" "}
                    <span class="badge badge-pill badge-danger">
                      Travel
                    </span>{" "}
                  </div>
                  <div class="card-body">
                    <div class="news-title">
                      <h2 class=" title-small">
                        <a href="#">
                          Obamacare Appears to Be Making People Healthier
                        </a>
                      </h2>
                    </div>
                    <p class="card-text">
                      <small class="text-time">
                        <em>3 mins ago</em>
                      </small>
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-3">
                <div class="card">
                  {" "}
                  <img
                    class="img-fluid"
                    src="https://i.insider.com/5d0d3ef19c51010b2c7dadb5?width=900&format=jpeg&auto=webp"
                    alt=""
                  />
                  <div class="card-img-overlay">
                    {" "}
                    <span class="badge badge-pill badge-danger">News</span>{" "}
                  </div>
                  <div class="card-body">
                    <div class="news-title">
                      <h2 class=" title-small">
                        <a href="#">
                          ‘S.N.L.’ to Lose Two Longtime Cast Members
                        </a>
                      </h2>
                    </div>
                    <p class="card-text">
                      <small class="text-time">
                        <em>3 mins ago</em>
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default App;
