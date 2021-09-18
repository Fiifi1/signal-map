import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//components
import Home from "./components/screens/home/Home";
import Contact from "./components/screens/contact/Contact";
import MyMap from "./components/screens/map/MyMap";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/map" component={MyMap} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Router>
    </div>
  );
}
export default App;
