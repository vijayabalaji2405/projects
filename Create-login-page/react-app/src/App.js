import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Mainroutes } from "./component/routes/mainroute";
import { Authcontextprovider } from "./component/context/Authcontext";

function App() {
  return (
    <BrowserRouter>
      <Authcontextprovider>
        <Mainroutes />
      </Authcontextprovider>
    </BrowserRouter>
  );
}

export default App;
