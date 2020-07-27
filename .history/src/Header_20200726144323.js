import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <>
        <title>Triveous News</title>
        <header>
          <div class="top-head left">
            <div class="container">
              <div class="row">
                <div class="col-md-6 col-lg-4">
                  <h1>
                    Triveous News<small>Get the latest News</small>
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </header>
      </>
    );
  }
}

export default Header;
