import React from "react";
import Navbar from "./Component/Navbar";
import { BrowserRouter } from "react-router-dom";
import { Switch, Route, NavLink } from "react-router-dom";
import Ekseba from "./Component/Ekseba";
import Doptor from "./Component/Doptor";
import Help from "./Component/Help";
import Home from "./Component/Home";
import Jatio from "./Component/Jatio";
import Login from "./Component/Login";
import Mygov from "./Component/Mygov";
import Nibondhon from "./Component/Nibondhon";
import Firsthalf from "./Component/Firsthalf";
import Body from "./Component/Body";
import SemiFotter from "./Component/SemiFotter";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Home} />
          <Route exact path="/ekseba" component={Home} />
          <Route exact path="/doptor" component={Home} />
          <Route exact path="/help" component={Home} />
          <Route exact path="/jatio" component={Home} />
          <Route exact path="/mygov" component={Home} />
          <Route exact path="/nibondhon" component={Home} />
        </Switch>
        <Firsthalf />
        <Body />
        <SemiFotter />
      </BrowserRouter>
    </>
  );
}

export default App;
