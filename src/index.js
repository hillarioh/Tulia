import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./styles/App.css";
import { div } from "prelude-ls";

import Nav from './components/nav';
import About from './components/about';
import Contact from './components/contact';
import Covid from './components/covid';
import Education from './components/education';
import Feeding from './components/feeding';
import Gallerys from './components/gallery';
import Program from './components/program';
import Agriculture from './components/agriculture';
import Donate from './components/donate';
import Empower from './components/empower';
import Home from './components/home';

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/about" exact component={About} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/covid" exact component={Covid} />
        <Route path="/education" exact component={Education} />
        <Route path="/feeding" exact component={Feeding} />
        <Route path="/gallerys" exact component={Gallerys} />
        <Route path="/program" exact component={Program} />
        <Route path="/agriculture" exact component={Agriculture} />
        <Route path="/donate" exact component={Donate} />
        <Route path="/empower" exact component={Empower} />
        <Route path="/" exact component={Home} />
      </Switch>
    </Router>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
