import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navigation from "./Components/Navigation/Navigation";
import App from "./css/App";
import Login from "./Components/Login/Login";
import Topnav from "./Components/Navigation/Topnav";

function RouterApp() {
  <Router>
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/topnav" element={<Topnav />}></Route>
    </Routes>
  </Router>;
}
ReactDOM.render(<RouterApp />, document.getElementById("root"));
