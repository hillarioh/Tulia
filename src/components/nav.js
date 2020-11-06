import React from 'react';
import logo from "../assets/images/logo.png";
import {  Link } from "react-router-dom";

class Nav extends React.Component {
  constructor(props) {
    super(props);

    this.updateStuff = this.updateStuff.bind(this);
  }

  updateStuff() {
    let x = document.getElementById("res-nav");

    if (window.outerWidth < 992) {
      if (x.style.display === "flex") {
        x.style.display = "none";
      } else {
        x.style.display = "flex";
      }
    }
  }

  render() {
    return (
      <nav className="nav">
        <div id="logo">
          <Link to="/">
            <img src={logo} alt="Organisation logo" />
          </Link>
          <div className="ham" onClick={this.updateStuff}>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>

        <ul id="res-nav">
          <li>
            <Link onClick={this.updateStuff} className="nav-link" to="/about">
              About Us
            </Link>
          </li>
          <li id="nav-program" onClick={this.updateStuff} className="nav-link">
            <h3>Programs</h3>
            <div>
              <span>
                <Link onClick={this.updateStuff} to="/feeding">
                  Feeding program
                </Link>
              </span>
              <span>
                <Link onClick={this.updateStuff} to="/education">
                  Peer Counselling
                </Link>
              </span>
              <span>
                <Link onClick={this.updateStuff} to="/empower">
                  Empowerment
                </Link>
              </span>
              <span>
                <Link onClick={this.updateStuff} to="/agriculture">
                  Agricultural Activities
                </Link>
              </span>
            </div>
          </li>
          <li>
            <Link
              onClick={this.updateStuff}
              className="nav-link"
              to="/gallerys"
            >
              Gallery
            </Link>
          </li>
          <li>
            <Link onClick={this.updateStuff} className="nav-link" to="/covid">
              COVID-19
            </Link>
          </li>
          <li>
            <Link onClick={this.updateStuff} className="nav-link" to="/contact">
              Contact Us
            </Link>
          </li>
          <li>
            <Link onClick={this.updateStuff} className="nav-link" to="/donate">
              Donate
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;