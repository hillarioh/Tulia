import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.scss";

function App() {}

function Home() {
  return (
    <div>
      <Nav />
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
