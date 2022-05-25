import { Grid } from "@material-ui/core";
import React, { Component } from "react";
import MainPage from "../MainPage/MainPage";
import StoryBar from "../StoryBar/StoryBar";

class MainContent extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <div>
        <Grid container>
          <Grid item xs={2}></Grid>
          <Grid item xs={6}>
            <div>
              <StoryBar />
              <MainPage />
            </div>
          </Grid>
          <Grid item xs={2}>
            sdf
          </Grid>
          <Grid item xs={2}>
            sdf
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default MainContent;
