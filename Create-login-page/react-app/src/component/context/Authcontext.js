import React, { useState } from "react";
import { useNavigate } from "react-router";
import { loginAPI } from "./apicalls";
import { signupAPI } from "./apicalls";

export const Usercontext = React.createContext({
  values: [],
  login: () => {},
  signup: () => {},
  loading: undefined,
  error: undefined,
});

export const Authcontextprovider = (props) => {
  const [data, setdata] = useState();
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState();
  const navigate = useNavigate();

  const loginDetials = async (email, password) => {
    setloading(true);
    const data = await loginAPI(email, password);
    console.log(data);
    data.code ? seterror(data.status) : setdata(data);
    data.code ? navigate("/404") : navigate("/dashboard");
    setloading(false);
  };

  const signupDetials = async (name, email, password, passwordConfirm) => {
    setloading(true);
    const data = await signupAPI(name, email, password, passwordConfirm);
    data.code ? seterror(data.status) : setdata(data);
    data.code ? navigate("/404") : navigate("/dashboard");
    setloading(false);
  };

  return (
    <Usercontext.Provider
      value={{
        values: data,
        login: loginDetials,
        signup: signupDetials,
        loading: loading,
        error: error,
      }}
    >
      {props.children}
    </Usercontext.Provider>
  );
};
