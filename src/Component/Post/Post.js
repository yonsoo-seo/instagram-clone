/* eslint-disable no-useless-constructor */
/* eslint-disable jsx-a11y/alt-text */
import { Avatar } from "@material-ui/core";
import React, { Component } from "react";
import "./Post.css";
import more_img from "../../images/more.png";
import like_btn from "../../images/like.png";
import cmt_btn from "../../images/chat.png";
import send_btn from "../../images/send.png";
import scrap_btn from "../../images/bookmark.png";
import emoji from "../../images/friendly.png";

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      commentList: [],
    };
  }

  componentDidMount() {
    this.getComments();
  }

  getComments = () => {
    let data = [
      {
        username: "pzxcvasd",
        commentID: "1234",
        timeStamp: "12356",
        description: "Comment1",
      },
      {
        username: "hwa_e.ewha",
        commentID: "1234",
        timeStamp: "12356",
        description: "Clone-coding",
      },
      {
        username: "yonsoo-seo",
        commentID: "1234",
        timeStamp: "12356",
        description: "GithubID",
      },
    ];

    this.setState({ commentList: data });
  };
  render() {
    return (
      //       <div>
      <div className="post">
        <div className="writer_info">
          <Avatar
            className="writer_img"
            src={this.props.profileImage}
            style={{ width: "32px", height: "32px" }}
          />
          <div className="writer_id">{this.props.userName}</div>
          <img className="more" src={more_img} />
        </div>
        <div className="post_img">
          <img
            className="post__img"
            src={this.props.postImage}
            style={{ width: "616px" }}
          />
        </div>
        <div className="like_sec">
          <img className="btn" src={like_btn} />
          <img className="btn" src={cmt_btn} />
          <img className="btn" src={send_btn} />
          <img
            className="btn"
            src={scrap_btn}
            style={{ marginLeft: "440px", height: "22px" }}
          />
        </div>

        <div className="post__text">
          <div className="like_num">{this.props.likes}명이 좋아합니다</div>
          {this.state.commentList.map((item, index) => (
            <div className="user_comment">
              <div className="cmt_usr">{item.username}</div>
              <div className="cmt_txt">{item.description}</div>
            </div>
          ))}
        </div>

        <div className="post__comment">
          <img className="emoji" src={emoji}></img>
          <input
            className="comment_here"
            type="text"
            placeholder="댓글 달기..."
          />
          <div className="comment_up">게시</div>
        </div>
      </div>
      // </div>
    );
  }
}

export default Post;
