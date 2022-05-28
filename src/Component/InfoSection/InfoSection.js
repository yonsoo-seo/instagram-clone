import React, { Component } from "react";
import "./InfoSection.css";
import info_img from "../../images/profile.JPG";
import { Avatar } from "@material-ui/core";

class InfoSection extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <div className="info_container">
        <Avatar src={info_img} className="info_image" />
        <div className="info_username">pzxcvasd</div>
        <div className="change_user">전환</div>
      </div>
    );
  }
}

export default InfoSection;
