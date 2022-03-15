import React from "react";
import { Link } from "react-router-dom";

export const Userhome = () => {
  return (
    <>
      <h1>User home page</h1>
      <Link to="/">
        <h2>GO Home</h2>
      </Link>
    </>
  );
};
