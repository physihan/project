import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Page from "./pages/Page";
import { NavBar, LeftMenu } from "./components/Layout";
import QuickStart from "./pages/QuickStart";

function App() {
  return (
    <div className="App">
      <Route path="/home" component={NavBar} />
      <div style={{ display: "flex" }}>
        <Route path="/home" component={LeftMenu} />
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/category" component={Page} />
            <Route path="/home/1" component={Page} />
            <Route exact path="/quickStart" component={QuickStart} />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
