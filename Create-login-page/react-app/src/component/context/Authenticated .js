import React from "react";
import { Adminhome } from "../pages/adminhome";
import { Userhome } from "../pages/userhome";
import { Navigate } from "react-router";

export const Authenticated = (props) => {
  if (props.values.data) {
    const role = props.values.data.user.role;
    if (role && role === "user") {
      return <Userhome />;
    } else if (role && role === "admin") {
      return <Adminhome />;
    }
  }
  return <Navigate to="/" />;
};
