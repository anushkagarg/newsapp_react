import React, { Component } from "react";
import "./App.css";
import logo from "./logo.svg";
import Header from "./Header";
import Card from "./Card";
import Navbar from "./Navbar";

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
let url = new URL('https://newsapi.org/v2/top-headlines?apiKey=1e79b4b4e5f44f55afd238d5f56efd24');
let params = {
  sources:"cnn"
};
Object.keys(params).forEach(key =>url.searchParams.append(key,params[key]));
console.log(url);
fetch(url.href)
    .then(response => response.json())
    .then(response => {
          console.log("here",response);
          this.setState({
            data:response,
            isLoading:false
          })
     }).catch((err) =>{
       console.log(err);
     });
    }
  render() {
    const { isLoading, data } = this.state;
    return (
      <div className="App">
        <Header />
        <div>
        {data.articles.map((article) => (
          <Navbar article={article} key={article.title} />
        ))}
        </div>
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
