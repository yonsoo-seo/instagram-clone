/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import "./LoginPage.css";
import Grid from "@material-ui/core/Grid";
import inst_image from "/Users/yeonsuseo/Desktop/hello/Git/instagram-clone/insta/src/images/9364675fb26a.svg";
import inst_logo from "/Users/yeonsuseo/Desktop/hello/Git/instagram-clone/insta/src/images/logoinsta.png";
import fb_img from "/Users/yeonsuseo/Desktop/hello/Git/instagram-clone/insta/src/images/fb.png";
import ios_app from "/Users/yeonsuseo/Desktop/hello/Git/instagram-clone/insta/src/images/app.png";
import and_app from "/Users/yeonsuseo/Desktop/hello/Git/instagram-clone/insta/src/images/play.png";
class LoginPage extends Component {
  state = {};
  render() {
    return (
      <div>
        <Grid container>
          <Grid item xs={3}></Grid>
          <Grid item xs={6}>
            <div className="loginpage__main">
              <div>
                <img src={inst_image} width="454px" />
              </div>
              <div>
                <div className="loginpage__right">
                  <img className="loginpage__logo" src={inst_logo} />
                  <div className="loginpage__login">
                    <input
                      className="loginpage__text"
                      type="text"
                      placeholder="전화번호, 사용자 이름 또는 이메일"
                    />
                    <input
                      className="loginpage__text"
                      type="password"
                      placeholder="비밀번호"
                    />
                    <button className="login_button">로그인</button>

                    <div className="login_ordiv">
                      <div className="login_div"></div>
                      <div className="login_or">또는</div>
                      <div className="login_div"></div>
                    </div>
                  </div>
                  <div className="login_fb">
                    <img
                      className="img_fb"
                      src={fb_img}
                      width="16px"
                      style={{ marginRight: "8px" }}
                    />
                    Facebook으로 로그인
                  </div>
                  <div className="forget_pw">비밀번호를 잊으셨나요?</div>
                </div>
                <div className="login_signbox">
                  <div className="sign_ask">계정이 없으신가요?</div>
                  <div className="sign_button">가입하기</div>
                </div>

                <div className="download">
                  <div className="download_t">앱을 다운로드하세요.</div>
                  <div className="images">
                    <img
                      src={ios_app}
                      width="136px"
                      style={{ marginRight: "8px" }}
                    />
                    <img src={and_app} width="136px" />
                  </div>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={3}></Grid>
        </Grid>
      </div>
    );
  }
}

export default LoginPage;
