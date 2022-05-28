import React, { Component } from "react";
import "./MainContainer.css";
import Grid from "@material-ui/core/Grid";
import StoryBar from "../StoryBar/StoryBar";
import InfoSection from "../InfoSection/InfoSection";
import Suggestions from "../Suggesstions/Suggestions";
import MainContent from "../MainContent/MainContent";

class MainContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Grid container>
          <Grid item xs={2}></Grid>

          <div style={{ width: "650px" }}>
            <StoryBar />
            <MainContent />
          </div>

          <Grid item xs={2}>
            <InfoSection />
            <Suggestions />
          </Grid>
          <Grid item xs={2}></Grid>
        </Grid>
      </div>
    );
  }
}

export default MainContainer;
