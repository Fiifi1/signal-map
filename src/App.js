import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//components
import Home from "./components/screens/home/Home";
import Contact from "./components/screens/contact/Contact";
import MyMap from "./components/screens/map/MyMap";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import literature from './components/pdf/literature';
import slide from "./components/pdf/slide";
import Excel from "./components/pdf/excel";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/map" component={MyMap} />
          <Route path="/contact" component={Contact} />
          <Route path="/literature" component={literature} />
          <Route path="/slide" component={slide} />
          <Route path="/excel" component={Excel} />
        </Switch>

        <Footer />
      </Router>
    </div>
  );
}
export default App;
