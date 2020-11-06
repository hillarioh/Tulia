import React from 'react';
import { loadCSS } from "fg-loadcss";
import Icon from "@material-ui/core/Icon";
import TextField from "@material-ui/core/TextField";
import logo from "../assets/images/logo.png";
import {  Link } from "react-router-dom";

function Footer() {
  React.useEffect(() => {
    const node = loadCSS(
      "https://use.fontawesome.com/releases/v5.12.0/css/all.css",
      document.querySelector("#font-awesome-css")
    );

    return () => {
      node.parentNode.removeChild(node);
    };
  }, []);
  return (
    <footer className="footer">
      <div className="ft1">
        <div className="ft-mission">
          <img src={logo} />
          <p>
            <b>Tulia Foundation (Turning Lives Around)</b> is a local program
            that aims at transforming and enlightening youths and women in urban
            slums by giving out opportunities, entrepreneurship skills and
            helping the community at large.
          </p>
        </div>
        <div className="ft-program">
          <h2> What we do</h2>
          <p>
            <Link to="/empower">Empowerment</Link>
          </p>
          <p>
            <Link to="/agriculture">Promote Agriculture</Link>
          </p>
          <p>
            <Link to="/sport">Teach Sports</Link>
          </p>
          <p>
            <Link to="/feeding">Feeding Programme</Link>
          </p>
        </div>
        <div className="ft-contact">
          <h2>Contact Information</h2>
          <p>Tulia Foundation</p>
          <p>Kibera Drive, FPFK Church, Kibera</p>
          <p>
            <a href="mailto:support@tuliafoundation.org">
              support@tuliafoundation.org
            </a>
          </p>
          <p>Tel: +254795484304, +254702338066</p>
          <p>P.O. Box 44965-00100</p>
          <p>Nairobi, Kenya</p>
        </div>
        <div className="ft-form">
          <h2>Email newsletter</h2>
          <TextField
            className="jerry"
            variant="outlined"
            label="Email Address"
            type="email"
            color="primary"
            placeholder="example@example.com"
          />
          <TextField
            className="jerry"
            variant="outlined"
            label="First Name"
            type="text"
            color="primary"
            placeholder="First Name"
          />
          <TextField
            className="jerry"
            variant="outlined"
            label="Last Name"
            type="text"
            color="primary"
            placeholder="Last Name"
          />
          <h4>Subscribe</h4>
        </div>
      </div>
      <div className="ft2">
        <span>© 2020 Tulia Foundation. All Rights Reserved</span>
        <ul className="ft-lk">
          <li>
            <a href="#">
              <Icon className="fab fa-facebook-square ft-icon" />
            </a>
          </li>
          <li>
            <a href="#">
              <Icon className="fab fa-twitter ft-icon" />
            </a>
          </li>
          <li>
            <a href="#">
              <Icon className="fab fa-youtube ft-icon" />
            </a>
          </li>
          <li>
            <a href="#">
              <Icon className="fab fa-instagram ft-icon" />
            </a>
          </li>
          <li>
            <a href="#">
              <Icon className="fab fa-pinterest-p ft-icon" />
            </a>
          </li>
          <li>
            <a href="#">
              <Icon className="fas fa-rss ft-icon" />
            </a>
          </li>
          <li>
            <a href="#">
              <Icon
                style={{ fontSize: 20 }}
                className="fas fa-envelope-square ft-icon"
              />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;