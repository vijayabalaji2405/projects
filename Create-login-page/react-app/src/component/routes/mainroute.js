import React, { useContext } from "react";
import { Login } from "../pages/login";
import { Authenticated } from "../context/Authenticated ";
import { Usercontext } from "../context/Authcontext";
import { Routes, Route } from "react-router";
import NotFound from "../pages/notfound";
import { Loading } from "../pages/loading";
import { Signup } from "../pages/signup";

export const Mainroutes = () => {
  const { values } = useContext(Usercontext);
  const { loading } = useContext(Usercontext);

  return (
    <Routes>
      <Route path="/" element={!loading ? <Login /> : <Loading />} exact />
      <Route
        path="/signup"
        element={!loading ? <Signup /> : <Loading />}
        exact
      />
      <Route path="/dashboard" element={<Authenticated values={values} />} />
      <Route path="/404" element={<NotFound />} />
    </Routes>
  );
};
