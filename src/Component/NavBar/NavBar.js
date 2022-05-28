/* eslint-disable no-useless-constructor */
/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import "./NavBar.css";
import NavLogo from "../../images/NavLogo.png";
import { Avatar, Grid } from "@material-ui/core";
import home from "../../images/home.png";
import heart from "../../images/like.png";
import message from "../../images/send.png";
import upload from "../../images/add.png";
import find from "../../images/compass.png";
import profile_img from "../../images/profile.JPG";

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
            <div className="logo_con">
              <img className="nav_logo" src={NavLogo} />
              <input className="search" text="text" placeholder="검색"></input>
            </div>
            {/* <Grid item xs={5} style={{ display: "flex" }}>
              <img className="nav_logo" src={NavLogo} />
              <input className="search" text="text" placeholder="검색"></input>
            </Grid> */}
            <Grid item xs={4} style={{ display: "flex", marginLeft: "70px" }}>
              <img className="icon" src={home} />
              <img className="icon" src={message} />
              <div className="upload_post">
                <label for="file-upload">
                  <img className="icon" src={upload} />
                </label>
                <input onChange={this.upload} id="file-upload" type="file" />
              </div>

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
