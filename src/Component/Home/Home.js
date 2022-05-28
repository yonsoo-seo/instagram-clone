import React, { Component } from "react";
import MainContainer from "../MainContainer/MainContainer";
import MainContent from "../MainContainer/MainContainer";

import NavBar from "../NavBar/NavBar";
import Post from "../Post/Post";
import "./Home.css";

class Home extends Component {
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
