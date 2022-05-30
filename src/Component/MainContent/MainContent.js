import React, { Component } from "react";
import Post from "../Post/Post";
import { storage, auth } from "../firebase";

class MainContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postArray: [],
      progressBar: "",
    };
  }

  componentDidMount() {
    this.getPost();
  }

  getPost = () => {
    const thisContext = this;
    // let data = [
    //   {
    //     postID: "123456",
    //     userName: "pzxcvasd",
    //     postImageURL:
    //       "https://i.guim.co.uk/img/media/64c687b75da57f3e82d9fcfd019a4103ce81db15/0_143_4284_2570/master/4284.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=b03ca8f1265401501deb033c7481740e",
    //     timeStampe: "12345",
    //     likes: "1234",
    //   },
    // ];

    fetch("http://localhost:8080/post")
      .then((response) => response.json())
      .then((data) => {
        thisContext.setState({ postArray: data });
      });
  };

  upload = (event) => {
    let image = event.target.files[0];
    const thisContext = this;
    if (image == null || image == undefined) return;

    var uploadTask = storage.ref("images").child(image.name).put(image);
    uploadTask.on(
      "state_changed",
      function (snapshot) {
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        thisContext.setState({ progressBar: progress });
      },
      function (error) {},
      function () {
        uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
          console.log(downloadURL);

          let payload = {
            postId: Math.floor(Math.random() * 100000).toString(),
            userId: JSON.parse(localStorage.getItem("users")).uid,
            postPath: downloadURL,
            timeStamp: new Date().getTime(),
            likeCount: 0,
          };

          const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
          };

          fetch("http://localhost:8080/post", requestOptions)
            .then((response) => response.json())
            .then((data) => {
              console.log(data);
              thisContext.getPost();
            })
            .catch((error) => {});
        });
      }
    );
  };

  render() {
    return (
      <div>
        {this.state.postArray.map((item, index) => (
          <Post
            id={item.postID}
            userName={item.userName}
            postImage={item.postPath}
            likes={item.likeCount}
          />
        ))}
      </div>
    );
  }
}

export default MainContent;
