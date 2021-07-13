import React, { Component } from "react";
import farmer from "../farmer.png";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark background-color: #8e0000;">
        <a
          className="navbar-brand col-sm-3 col-md-2 mr-0"
          href="https://alphachain.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://quantresurgencemhy2069p5074.s3.eu-west-2.amazonaws.com/QRLogo.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt=""
          />
          &nbsp; QuantResurgence Farm
        </a>

        <ul className="navbar-nav px-3">
          <li className="nav-item text-nowrap d-none d-sm-none d-sm-block">
            <small className="text-secondary">
              <small id="account">{this.props.account}</small>
            </small>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
