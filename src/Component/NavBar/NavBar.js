import React, { Component } from "react";
import "./NavBar.css";
import NavLogo from "/Users/yeonsuseo/Desktop/hello/Git/instagram-clone/insta/src/images/NavLogo.png";
import { Avatar, Grid } from "@material-ui/core";
import home from "/Users/yeonsuseo/Desktop/hello/Git/instagram-clone/insta/src/images/home.png";
import heart from "/Users/yeonsuseo/Desktop/hello/Git/instagram-clone/insta/src/images/like.png";
import message from "/Users/yeonsuseo/Desktop/hello/Git/instagram-clone/insta/src/images/send.png";
import upload from "/Users/yeonsuseo/Desktop/hello/Git/instagram-clone/insta/src/images/add.png";
import find from "/Users/yeonsuseo/Desktop/hello/Git/instagram-clone/insta/src/images/compass.png";
import profile_img from "/Users/yeonsuseo/Desktop/hello/Git/instagram-clone/insta/src/images/profile.JPG";
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
            <Grid item xs={2}></Grid>
            <Grid item xs={5} style={{ display: "flex" }}>
              <img className="nav_logo" src={NavLogo} />
              <input className="search" text="text" placeholder="검색"></input>
            </Grid>
            <Grid item xs={4} style={{ display: "flex", marginLeft: "70px" }}>
              <img className="icon" src={home} />
              <img className="icon" src={message} />
              <img className="icon" src={upload} />
              <img className="icon" src={find} />
              <img className="icon" src={heart} />
              <Avatar className="icon" src={profile_img} />
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default NavBar;
