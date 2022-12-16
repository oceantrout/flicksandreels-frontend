import "./App.css";
import Home from "./components/Home";
import Display from "./components/Display";
import "bootstrap/dist/css/bootstrap.min.css";
import Register from "./components/Register";
import Login from "./components/Login";
import Popular from "./components/Popular";
//import Review from "./components/Review";
import React from "react";
import ReactDOM from "react-dom";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <div className="App">
          <ul>
            <li>F</li>
            <li>L</li>
            <li>I</li>
            <li>C</li>
            <li>K</li>
            <li>S</li>
            <li>&</li>
            <li>R</li>
            <li>E</li>
            <li>E</li>
            <li>L</li>
            <li>S</li>
          </ul>
          <h4 class="font-effect-shadow-multiple">
            a site for movie connoisseur
          </h4>

          <Home />
        </div>
      </Route>
      <Route path="/Popular">
        <Popular />
      </Route>
      <Route path="/Display">
        <Display />
      </Route>
      <Route path="/Login">
        <Login />
      </Route>
      <Route path="/Register">
        <Register />
      </Route>
      {/* <Route path="/Review">
        <Review />
      </Route> */}
    </Switch>
  );
}

export default App;
