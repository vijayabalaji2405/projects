import React from "react";
import { Link } from "react-router-dom";

export const Adminhome = () => {
  return (
    <>
      <h1>Admin homepage</h1>
      <Link to="/">
        <h2>GO Home</h2>
      </Link>
    </>
  );
};
