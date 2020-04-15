import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./DogList.css";

export default class DogList extends Component {
  render() {
    return (
      <div className="DogList">
        <h1 className="display-3 text-center">Dog List!</h1>
        <div className="row">
          {this.props.dogs.map(dog => (
            <div className="Dog col-lg-4 text-center">
              <img src={dog.src} alt={dog.name} />
              <h3>
                {" "}
                <Link to={`/dogs/${dog.name}`}>{dog.name}</Link>
              </h3>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
