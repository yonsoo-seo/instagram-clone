import React, { Component } from "react";
import "../LoginPage/LoginPage.css";
class SignIn extends Component {
  render() {
    return (
      <div>
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
      </div>
    );
  }
}

export default SignIn;
