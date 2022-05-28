import React, { Component } from "react";
import Post from "../Post/Post";

class MainContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postArray: [],
    };
  }

  componentDidMount() {
    this.getPost();
  }

  getPost = () => {
    let data = [
      {
        postID: "123456",
        userName: "pzxcvasd",
        postImageURL:
          "https://i.guim.co.uk/img/media/64c687b75da57f3e82d9fcfd019a4103ce81db15/0_143_4284_2570/master/4284.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=b03ca8f1265401501deb033c7481740e",
        timeStampe: "12345",
        likes: "1234",
      },
    ];
    this.setState({ postArray: data });
  };
  render() {
    return (
      <div>
        {this.state.postArray.map((item, index) => (
          <Post
            id={item.postID}
            userName={item.userName}
            postImage={item.postImageURL}
            likes={item.likes}
          />
        ))}
        {this.state.postArray.map((item, index) => (
          <Post
            id={item.postID}
            userName={item.userName}
            postImage={item.postImageURL}
            likes={item.likes}
          />
        ))}
        {this.state.postArray.map((item, index) => (
          <Post
            id={item.postID}
            userName={item.userName}
            postImage={item.postImageURL}
            likes={item.likes}
          />
        ))}
        {this.state.postArray.map((item, index) => (
          <Post
            id={item.postID}
            userName={item.userName}
            postImage={item.postImageURL}
            likes={item.likes}
          />
        ))}
      </div>
    );
  }
}

export default MainContent;
