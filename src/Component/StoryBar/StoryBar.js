import { Avatar } from "@material-ui/core";
import React, { Component } from "react";
import "./StoryBar.css";
import { storage, auth } from "../firebase";
import uploadimage from "../../images/upload.png";

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
    // let data = [
    //   {
    //     username: "yonsoo.seo",
    //     imageURL:
    //       "https://i2-prod.somersetlive.co.uk/incoming/article3236026.ece/ALTERNATES/s1200c/0_JS189764871.jpg",
    //   },
    //   {
    //     username: "pzxcvasd",
    //     imageURL: "../../images/dog.jpg",
    //   },
    //   {
    //     username: "pzxcvasd",
    //     imageURL: "../../images/dog.jpg",
    //   },
    //   {
    //     username: "pzxcvasd",
    //     imageURL: "../../images/dog.jpg",
    //   },
    //   {
    //     username: "pzxcvasd",
    //     imageURL: "../../images/dog.jpg",
    //   },
    //   {
    //     username: "pzxcvasd",
    //     imageURL: "../../images/dog.jpg",
    //   },
    //   {
    //     username: "pzxcvasd",
    //     imageURL: "../../images/dog.jpg",
    //   },
    //   {
    //     username: "psd",
    //     imageURL: "../../images/dog.jpg",
    //   },
    //   {
    //     username: "pzxcvasd",
    //     imageURL: "../../images/poster.jpg",
    //   },
    //   {
    //     username: "pzxsdfcvasd",
    //     imageURL: "../../images/dog.jpg",
    //   },
    //   {
    //     username: "test",
    //     imageURL: "../../images/dog.jpg",
    //   },
    // ];

    fetch("http://localhost:3001/status")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ statusList: data });
      });
  };
  ploadStatus = (event) => {
    let image = event.target.files[0];
    const thisContext = this;
    if (image == null || image == undefined) return;

    var uploadTask = storage.ref("story").child(image.name).put(image);
    uploadTask.on(
      "state_changed",
      function (snapshot) {},
      function (error) {},
      function () {
        uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
          console.log(downloadURL);

          let payload = {
            statusId: Math.floor(Math.random() * 100000).toString(),
            userId: JSON.parse(localStorage.getItem("users")).uid,
            path: downloadURL,
            timeStamp: new Date().getTime(),
          };

          const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
          };

          fetch("http://localhost:3001/story", requestOptions)
            .then((response) => response.json())
            .then((data) => {
              thisContext.getData();
            })
            .catch((error) => {});
        });
      }
    );
  };
  render() {
    return (
      <div className="story_box">
        {/* Later */
        /* <div className="storyuser_upload">
          <label for="file-upload-status">
            <img
              className="statusbar__upload"
              src={uploadimage}
              width="55px"
              height="55px"
            />
          </label>
          <input
            id="file-upload-status"
            onChange={this.uploadStatus}
            type="file"
          />
        </div> */}

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
