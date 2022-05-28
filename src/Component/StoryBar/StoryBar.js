import { Avatar } from "@material-ui/core";
import React, { Component } from "react";
import "./StoryBar.css";

class StoryBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      storyList: [],
    };
  }
  componentDidMount() {
    this.getData();
  }
  getData = () => {
    let data = [
      {
        username: "yonsoo.seo",
        imageURL:
          "https://i2-prod.somersetlive.co.uk/incoming/article3236026.ece/ALTERNATES/s1200c/0_JS189764871.jpg",
      },
      {
        username: "pzxcvasd",
        imageURL: "../../images/dog.jpg",
      },
      {
        username: "pzxcvasd",
        imageURL: "../../images/dog.jpg",
      },
      {
        username: "pzxcvasd",
        imageURL: "../../images/dog.jpg",
      },
      {
        username: "pzxcvasd",
        imageURL: "../../images/dog.jpg",
      },
      {
        username: "pzxcvasd",
        imageURL: "../../images/dog.jpg",
      },
      {
        username: "pzxcvasd",
        imageURL: "../../images/dog.jpg",
      },
      {
        username: "psd",
        imageURL: "../../images/dog.jpg",
      },
      {
        username: "pzxcvasd",
        imageURL: "../../images/poster.jpg",
      },
      {
        username: "pzxsdfcvasd",
        imageURL: "../../images/dog.jpg",
      },
      {
        username: "test",
        imageURL: "../../images/dog.jpg",
      },
    ];
    this.setState({ storyList: data });
  };
  render() {
    return (
      <div className="story_box">
        {this.state.storyList.map((item, index) => (
          <div className="profile">
            <Avatar className="prof_icon" src={item.imageURL} />
            <div className="ID">{item.username}</div>
          </div>
        ))}
      </div>
    );
  }
}
export default StoryBar;
