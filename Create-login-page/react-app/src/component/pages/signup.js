import React, { useRef, useContext } from "react";
import "./../../css/signup.css";
import { Usercontext } from "../context/Authcontext";

export const Signup = () => {
  const { signup } = useContext(Usercontext);
  const name = useRef();
  const email = useRef();
  const passsword = useRef();
  const passwordConfirm = useRef();

  const signuphandler = (e) => {
    e.preventDefault();
    signup(
      name.current.value,
      email.current.value,
      passsword.current.value,
      passwordConfirm.current.value
    );
  };
  return (
    <form onSubmit={signuphandler}>
      <div className="container">
        <h1>Sign Up</h1>
        <p>Please fill in this form to create an account.</p>
        <hr />

        <label htmlFor="name">
          <b>Name</b>
        </label>
        <input
          className="text"
          type="text"
          ref={name}
          placeholder="Enter Text"
          name="name"
          required
        />

        <label htmlFor="email">
          <b>Email</b>
        </label>
        <input
          className="text"
          type="text"
          ref={email}
          placeholder="Enter Email"
          name="email"
          required
        />

        <label htmlFor="psw">
          <b>Password</b>
        </label>
        <input
          className="text"
          ref={passsword}
          type="password"
          placeholder="Enter Password"
          name="psw"
          required
        />

        <label htmlFor="psw-repeat">
          <b>Confirm password</b>
        </label>
        <input
          className="text"
          ref={passwordConfirm}
          type="password"
          placeholder="Repeat Password"
          name="psw-repeat"
          required
        />
        <div className="clearfix">
          <button type="submit" className="signupbtn">
            Sign Up
          </button>
        </div>
      </div>
    </form>
  );
};
