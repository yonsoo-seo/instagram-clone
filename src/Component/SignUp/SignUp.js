import React, { Component } from "react";
import "./SignUp";

class SignUp extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <div>
        <input
          className="loginpage__text"
          type="text"
          placeholder="휴대폰 번호 또는 이메일 주소"
        />
        <input className="loginpage__text" type="text" placeholder="성명" />
        <input
          className="loginpage__text"
          type="text"
          placeholder="사용자 이름"
        />
        <input
          className="loginpage__text"
          type="password"
          placeholder="비밀번호"
        />
        <button className="login_button">가입</button>
      </div>
    );
  }
}

export default SignUp;
