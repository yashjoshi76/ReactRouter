import React, { useState, useEffect } from "react";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import { Outlet, Link } from "react-router-dom";

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Snippet for Routing!</h1>
      <div>
        <Link to="/home">Home</Link>
        <br />
        <Link to="/about">About</Link>
        <br />
        <Link to="/contact">Contact</Link>
      </div>
      <Outlet />
    </div>
  );
}
