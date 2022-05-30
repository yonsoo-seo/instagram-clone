import React, { Component } from "react";
import "./SignUp";
import { storage, auth } from "../firebase";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailId: null,
      name: null,
      userName: null,
      password: null,
    };
  }

  newSignUp = () => {
    auth
      .createUserWithEmailAndPassword(this.state.emailId, this.state.password)
      .then((userCredential) => {
        var user = userCredential.user;

        let payload = {
          userId: user.uid,
          userName: this.state.userName,
          name: this.state.name,
          profileImage: "",
        };

        const requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        };

        fetch("http://localhost:8080/users", requestOptions)
          .then((response) => response.json())
          .then((data) => {
            localStorage.setItem("users", JSON.stringify(user));
            window.location.reload();
          })
          .catch((error) => {});
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
      });
  };

  state = {};
  render() {
    return (
      <div>
        <input
          className="loginpage__text"
          onChange={(event) => {
            this.state.emailId = event.currentTarget.value;
          }}
          type="text"
          placeholder="휴대폰 번호 또는 이메일 주소"
        />
        <input
          className="loginpage__text"
          onChange={(event) => {
            this.state.name = event.currentTarget.value;
          }}
          type="text"
          placeholder="성명"
        />
        <input
          className="loginpage__text"
          onChange={(event) => {
            this.state.userName = event.currentTarget.value;
          }}
          type="text"
          placeholder="사용자 이름"
        />
        <input
          className="loginpage__text"
          onChange={(event) => {
            this.state.password = event.currentTarget.value;
          }}
          type="password"
          placeholder="비밀번호"
        />
        <button className="login_button" onClick={this.newSignUp}>
          가입
        </button>
      </div>
    );
  }
}

export default SignUp;
