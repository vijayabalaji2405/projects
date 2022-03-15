import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./../../css/error.css";
import { Usercontext } from "../context/Authcontext";
import { Navigate } from "react-router";

export const NotFound = () => {
  const { error } = useContext(Usercontext);
  return (
    <div className="error">
      <h1>{error ? error : <Navigate to="/" />} </h1>
      <Link to="/">Go Home</Link>
    </div>
  );
};
export default NotFound;
