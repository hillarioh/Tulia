import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./styles/App.css";

function App() {
  return <Home />;
}

function Home() {
  return (
    <div className="header">
      <Nav />
      <div className="slider">
        <div className="slides">
          <input type="radio" name="radio-btn" id="radio1" />
          <input type="radio" name="radio-btn" id="radio2" />
          <input type="radio" name="radio-btn" id="radio3" />
          <input type="radio" name="radio-btn" id="radio4" />

          <div className="slide first"></div>
          <div className="slide second"></div>
          <div className="slide third"></div>
          <div className="slide fourth"></div>
          <div className="navigation-auto">
            <div className="auto-btn1"></div>
            <div className="auto-btn2"></div>
            <div className="auto-btn3"></div>
            <div className="auto-btn4"></div>
          </div>

          <div id="headline">
            <h1 id="head-title"></h1>
            <p id="head-body"></p>
            <h3 id="head-link"></h3>
          </div>
        </div>

        <div className="navigation-manual">
          <label className="manual-btn"></label>
          <label className="manual-btn"></label>
          <label className="manual-btn"></label>
          <label className="manual-btn"></label>
        </div>
      </div>
    </div>
  );
}

function About() {
  return (
    <div>
      <Nav />
    </div>
  );
}
function Agriculture() {
  return (
    <div>
      <Nav />
    </div>
  );
}
function Contact() {
  return (
    <div>
      <Nav />
    </div>
  );
}
function Covid() {
  return (
    <div>
      <Nav />
    </div>
  );
}
function Donate() {
  return (
    <div>
      <Nav />
    </div>
  );
}
function Education() {
  return (
    <div>
      <Nav />
    </div>
  );
}
function Empower() {
  return (
    <div>
      <Nav />
    </div>
  );
}
function Feeding() {
  return (
    <div>
      <Nav />
    </div>
  );
}
function Gallery() {
  return (
    <div>
      <Nav />
    </div>
  );
}
function Program() {
  return (
    <div>
      <Nav />
    </div>
  );
}
function Nav() {
  return (
    <nav className="nav">
      <div id="logo">
        <a href="../index.html">
          <img src="../assets/images/logo.png" alt="Organisation logo" />
        </a>
      </div>
      <ul>
        <li>
          <a href="about.html">About Us</a>
        </li>
        <li id="nav-program">
          <h3>
            <a href="program.html">program</a>
          </h3>
          <div>
            <span>
              <a href="feeding.html">Feeding program</a>
            </span>
            <span>
              <a href="education.html">Peer counseling</a>
            </span>
            <span>
              <a href="empower.html">Empowerment</a>
            </span>
            <span>
              <a href="agriculture.html">agricultural activities</a>
            </span>
          </div>
        </li>
        <li>
          <a href="gallery.html"> Gallery</a>
        </li>
        <li>
          <a href="covid.html"> COVID-19</a>
        </li>
        <li>
          <a href="contact.html"> Contact Us</a>
        </li>
        <li>
          <a href="donate.html"> Donate</a>
        </li>
      </ul>
    </nav>
  );
}
function Footer() {}

export default App;
