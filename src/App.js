import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//components
import Home from "./components/screens/home/Home";
import Contact from "./components/screens/contact/Contact";
import Map from "./components/screens/map/Map";
import Navigation from "./components/NavBar/NavBar";
import NavBar from "./components/NavBar/NavBar";

export default function App() {
  return (
    <div className="App">
      <NavBar />
    </div>
  );
}
