import React, { Component } from "react";
import "./NavBar.css";
import NavLogo from "/Users/yeonsuseo/Desktop/hello/Git/instagram-clone/insta/src/images/NavLogo.png";
import { Grid } from "@material-ui/core";
import home from "/Users/yeonsuseo/Desktop/hello/Git/instagram-clone/insta/src/images/home.png";
import heart from "/Users/yeonsuseo/Desktop/hello/Git/instagram-clone/insta/src/images/like.png";
import message from "/Users/yeonsuseo/Desktop/hello/Git/instagram-clone/insta/src/images/send.png";
import upload from "/Users/yeonsuseo/Desktop/hello/Git/instagram-clone/insta/src/images/add.png";
import find from "/Users/yeonsuseo/Desktop/hello/Git/instagram-clone/insta/src/images/compass.png";
class NavBar extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <div>
        <div className="nav_top">
          <Grid container>
            <Grid item xs={4}>
              <img className="nav_logo" src={NavLogo} />
            </Grid>
            <Grid item xs={3}>
              <input className="search" text="text" placeholder="검색"></input>
            </Grid>
            <Grid item xs={3} style={{ display: "flex", marginLeft: "75px" }}>
              <img className="icon" src={home} />
              <img className="icon" src={message} />
              <img className="icon" src={upload} />
              <img className="icon" src={find} />
              <img className="icon" src={heart} />
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default NavBar;
