import React, { Component } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import MySection from "./components/MySection";
import Couter from "./components/Couter";
import Section from "./components/Section";

class App extends Component {
  state = {
    name: ["Ali ", "Vali", "G'ani", "Qani", "Sani","Mani"],
    currentNameIndex: 0,
    current: 0,
  };

  change = (status) => {
    if (status === "plus") {
      this.setState({
        current: this.state.current + 1,
      });
    } else if (status === "minus" && this.state.current > 0) {
      this.setState({
        current: this.state.current - 1,
      });
    }
  };

  сhangeName = () => {
    this.setState({
      currentNameIndex: this.state.currentNameIndex + 1,
    });
    if (this.state.currentNameIndex === this.state.name.length - 1) {
      this.setState({
        currentNameIndex: 0,
      });
    }
  };

  render() {
    return (
      <div>
        <Couter change={this.change} current={this.state.current} />
        <Navbar myName={this.state.name[this.state.currentNameIndex]} />
        <MySection
          myName={this.state.name[this.state.currentNameIndex]}
          сhangeName={this.сhangeName}
        />
        <Footer myName={this.state.name[this.state.currentNameIndex]} />
        <Section />
      </div>
    );
  }
}

export default App;
