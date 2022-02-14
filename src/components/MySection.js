import React, { Component } from "react";

export default class MySection extends Component {

  render() {
    return (
      <div className="container text-center">
        <h1>Assalomu alaykum, {this.props.myName}</h1>
        <button
          // onClick={() => this.changeName(" Usmonxon")}
          onClick={this.props.сhangeName}
          className="btn btn-danger mb-4"
        >
          Change name
        </button>
      </div>
    );
  }
}