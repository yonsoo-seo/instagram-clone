import React, { Component } from "react";
import "./Suggestions.css";
import { Avatar } from "@material-ui/core";
import imageSrc3 from "../../images/dog.jpg";

class Suggestions extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className="suggestions__container">
          <div className="suggestions__header">
            <div className="sug_text">회원님을 위한 추천</div>
          </div>
          <div className="suggestions__body">
            <div className="suggestions__friends">
              <Avatar src={imageSrc3} className="suggestions__image" />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: "10px",
                }}
              >
                <div>
                  <div className="suggestions__username">helllo</div>
                  <div className="suggestions__ment">회원님을 위한 추천</div>
                </div>
              </div>
              <div className="sug_follow">팔로우</div>
            </div>
            <div className="suggestions__friends">
              <Avatar src={imageSrc3} className="suggestions__image" />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: "10px",
                }}
              >
                <div>
                  <div className="suggestions__username">hihiih</div>
                  <div className="suggestions__ment">회원님을 위한 추천</div>
                </div>
              </div>
              <div className="sug_follow">팔로우</div>
            </div>
            <div className="suggestions__friends">
              <Avatar src={imageSrc3} className="suggestions__image" />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: "10px",
                }}
              >
                <div>
                  <div className="suggestions__username">hihih</div>
                  <div className="suggestions__ment">회원님을 위한 추천</div>
                </div>
              </div>
              <div className="sug_follow">팔로우</div>
            </div>
            <div className="suggestions__friends">
              <Avatar src={imageSrc3} className="suggestions__image" />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: "10px",
                }}
              >
                <div>
                  <div className="suggestions__username">testestestesets</div>
                  <div className="suggestions__ment">회원님을 위한 추천</div>
                </div>
              </div>
              <div className="sug_follow">팔로우</div>
            </div>
            <div className="suggestions__friends">
              <Avatar src={imageSrc3} className="suggestions__image" />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: "10px",
                }}
              >
                <div>
                  <div className="suggestions__username">pzxcvasd</div>
                  <div className="suggestions__ment">회원님을 위한 추천</div>
                </div>
              </div>
              <div className="sug_follow">팔로우</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Suggestions;
