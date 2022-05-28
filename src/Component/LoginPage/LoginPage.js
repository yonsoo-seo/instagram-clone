/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import "./LoginPage.css";
import Grid from "@material-ui/core/Grid";
import inst_image from "../../images/9364675fb26a.svg";
import inst_logo from "../../images/logoinsta.png";
import fb_img from "../../images/fb.png";
import ios_app from "../../images/app.png";
import and_app from "../../images/play.png";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: true,
    };
  }

  changeLogin = () => {
    if (this.state.isLogin) this.setState({ isLogin: false });
    else this.setState({ isLogin: true });
  };

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
                    {this.state.isLogin ? <Login /> : <SignUp />}
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
                  {this.state.isLogin ? (
                    <div className="box">
                      <div className="sign_ask">계정이 없으신가요?</div>
                      <span className="sign_button" onClick={this.changeLogin}>
                        가입하기
                      </span>
                    </div>
                  ) : (
                    <div className="box">
                      <div className="login_ask">계정이 있으신가요?</div>
                      <span
                        className="sign_login_btn"
                        onClick={this.changeLogin}
                      >
                        로그인
                      </span>
                    </div>
                  )}
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
