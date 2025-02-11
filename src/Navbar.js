/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";

export default class Navbar extends Component {
  render() {
    const dogLinks = this.props.dogs.map(dog => (
      <li className="nav-item" key={dog.name}>
        <NavLink exact to={`/dogs/${dog.name}`} className="nav-link">
          {dog.name}
        </NavLink>
      </li>
    ));
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/dogs">
          Dog App
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item" key="home">
              <NavLink exact to="/dogs" className="nav-link">
                Home
              </NavLink>
            </li>
            {dogLinks}
          </ul>

          <a
            className="GithubLink navbar-brand my-2 my-sm-0"
            href="https://github.com/Lukazovic"
            rel="noopener noreferrer"
            target="_blank"
          >
            Github
          </a>
        </div>
      </nav>
    );
  }
}
