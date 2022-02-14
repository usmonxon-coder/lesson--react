import React, { Component } from "react";
import "./Footer.css";

export default class Footer extends Component {
  render() {
    return (
      <div>
        <div className="footer mb-5">Footer, {this.props.myName} </div>
      </div>
    );
  }
}