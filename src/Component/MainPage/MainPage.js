import { Avatar } from "@material-ui/core";
import React, { Component } from "react";
import "./MainPage.css";
import writer_img from "/Users/yeonsuseo/Desktop/hello/Git/instagram-clone/insta/src/images/dog.jpg";
import more_img from "/Users/yeonsuseo/Desktop/hello/Git/instagram-clone/insta/src/images/more.png";

class MainPage extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <div>
        <div className="post">
          <div className="writer_info">
            <Avatar
              className="writer_img"
              src={writer_img}
              style={{ width: "32px", height: "32px" }}
            />
            <div className="writer_id">b.e_cky</div>
            <img className="more" src={more_img} />
          </div>
          <div className="post_img"></div>
          <div className="post_text"></div>

          <div className="post_comment"></div>
        </div>
      </div>
    );
  }
}

export default MainPage;
