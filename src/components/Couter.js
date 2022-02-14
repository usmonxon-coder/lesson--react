import React from "react";

class Couter extends React.Component {
  render() {
    return (
      <div>
        <div className="container my-4">
          <div
            onClick={() => this.props.change("minus")}
            className="btn btn-danger px-4"
          >
            -
          </div>
          <div className="btn btn-light"> {this.props.current}</div>
          <div
            onClick={() => this.props.change("plus")}
            className="btn btn-danger px-4"
          >
            +
          </div>
        </div>
      </div>
    );
  }
}

export default Couter;
