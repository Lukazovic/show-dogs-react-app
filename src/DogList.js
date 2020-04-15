import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./DogList.css";

export default class DogList extends Component {
  render() {
    return (
      <div className="DogList">
        <h1 className="display-3 text-center mt-3 mb-5">Dog List!</h1>
        <div className="row">
          {this.props.dogs.map(dog => (
            <div className="Dog col-lg-4 text-center">
              <h3 className="mt-3">
                <Link to={`/dogs/${dog.name}`}>
                  <img src={dog.src} alt={dog.name} />
                  <h1 className="underline">{dog.name}</h1>
                </Link>
              </h3>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
