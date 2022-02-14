import React, { Component } from "react";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar1 navbar-expand-lg navbar-dark ">
          <div className="container-fluid">
            <a href="/"> Navbar, {this.props.myName}</a>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
