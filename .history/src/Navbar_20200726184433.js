import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <Navbar inverse collapseOnSelect>
        <Navbar.Collapse>
          <Navbar.Form>
            <Navbar.Brand> Projects </Navbar.Brand> //button click here, how to?
          </Navbar.Form>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navbar;
