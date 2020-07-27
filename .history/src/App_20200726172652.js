import React, { Component } from "react";
import "./App.css";
import logo from "./logo.svg";
import Header from "./Header";
import Card from "./Card";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoading: true,
    };
  }
  componentDidMount() {
    // get all entities - GET
    fetch(
      "http://newsapi.org/v2/top-headlines?apiKey=1e79b4b4e5f44f55afd238d5f56efd24" + new URLSearchParams,
      {
        method: "GET",
        params:{
          category:"sports",
          country:"de"
        }
      }
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        this.setState({
          data: response,
          isLoading: false,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    const { isLoading, data } = this.state;
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
        {!isLoading && (
          <>
            <section class="banner-sec">
              <div class="container">
                <div class="row">
                  {data.articles.map((article) => (
                    <Card article={article} key={article.title} />
                  ))}
                </div>
              </div>
            </section>
          </>
        )}
      </div>
    );
  }
}
export default App;
