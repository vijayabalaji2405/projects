import React, { useContext, useRef } from "react";
import "./../../css/login.css";
import { Usercontext } from "../context/Authcontext";
import { Link } from "react-router-dom";

export const Login = () => {
  const { login } = useContext(Usercontext);
  const email = useRef();
  const password = useRef();
  const controller = (e) => {
    e.preventDefault();
    login(email.current.value, password.current.value);
  };

  return (
    <div className="form">
      <form className="formcontainer" onSubmit={controller}>
        <div className="input-container">
          <label>Username </label>
          <input
            className="email"
            type="email"
            name="email"
            ref={email}
            required
          />
        </div>
        <div className="input-container">
          <label>Password </label>
          <input
            className="password"
            type="password"
            name="pass"
            ref={password}
            required
          />
        </div>
        <div className="buttons">
          <div className="button-container">
            <button type="submit" className="submit">
              Login
            </button>
          </div>
          <div className="button-container">
            <Link to="/signup">
              <button className="btn submit">Signup</button>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};
