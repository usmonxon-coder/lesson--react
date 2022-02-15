import React, { Component } from "react";
import "./Section.css";

export default class Section extends Component {
  state = {
    products: [
      {
        id: 1,
        imgUrl: "1.jpg",
        title: "title1",
        description: "Lorem ipsum dolor sit amet1",
      },
      {
        id: 2,
        imgUrl: "2.jpg",
        title: "title2",
        description: "Lorem ipsum dolor sit amet2",
      },
      {
        id: 3,
        imgUrl: "3.jpg",
        title: "title3",
        description: "Lorem ipsum dolor sit amet3",
      },
      {
        id: 4,
        imgUrl: "4.jpg",
        title: "title4",
        description: "Lorem ipsum dolor sit amet4",
      },
      {
        id: 5,
        imgUrl: "5.jpg",
        title: "title5",
        description: "Lorem ipsum dolor sit amet5",
      },
      {
        id: 6,
        imgUrl: "6.jpg",
        title: "title6",
        description: "Lorem ipsum dolor sit amet6",
      },
      {
        id: 7,
        imgUrl: "7.jpg",
        title: "title7",
        description: "Lorem ipsum dolor sit amet7",
      },
      {
        id: 8,
        imgUrl: "8.jpg",
        title: "title8",
        description: "Lorem ipsum dolor sit amet8",
      },
      {
        id: 8,
        imgUrl: "9.jpg",
        title: "title9",
        description: "Lorem ipsum dolor sit amet9",
      },
      {
        id: 10,
        imgUrl: "10.jpg",
        title: "title10",
        description: "Lorem ipsum dolor sit amet10",
      },
    ],
  };

  delete = () => {
    let quti = document.querySelector(".box");
    // let btn = document.querySelector(".btn");
    // if (this.state.products[9]) {
      quti.remove();
    }
  };

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            {this.state.products.map((item, index) => (
              <div className="col-3 mb-4 box">
                <div className="card p-2" style={{ width: "18rem" }}>
                  <img
                    src={`images/${item.imgUrl}`}
                    className="card-img-top"
                    style={{ height: "180px", objectFit: "cover" }}
                    alt="rasm"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.description}</p>
                    <button
                      onClick={() => this.delete()}
                      href="/"
                      className="btn btn-primary submit"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
