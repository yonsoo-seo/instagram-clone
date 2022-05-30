import React, { Component } from "react";
import MainContainer from "../MainContainer/MainContainer";
import NavBar from "../NavBar/NavBar";
import "./Home.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <NavBar />
        <MainContainer />
      </div>
    );
  }
}

export default Home;
