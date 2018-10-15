import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Router from "./Router";
import "react-bootstrap";
import "./slide.css";
import "./App.css";
import Card from "./Card";
import data from "./data/products";

const Navigation = props => (
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
        <NavLink to="/" class="navbar-brand">
          <b>Emobicart</b>
        </NavLink>
      </div>
      <ul class="nav navbar-nav">
        <li class="active">
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/cart" class="nav-link">
            Cart
          </NavLink>
        </li>
        <li>
          <a>Page 2</a>
        </li>
        <li>
          <a>Page 3</a>
        </li>
      </ul>
    </div>
  </nav>
);

const Header = props => (
  <div class="jumbotron text-center">
    <h4 class="card-title h4 pb-2">
      <strong>hello</strong>
    </h4>
  </div>
);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      properties: data.properties,
      property: data.properties[0]
    };
  }

  nextProperty = () => {
    const newIndex = this.state.property.index + 1;
    this.setState({
      property: data.properties[newIndex]
    });
  };

  prevProperty = () => {
    const newIndex = this.state.property.index - 1;
    this.setState({
      property: data.properties[newIndex]
    });
  };

  render() {
    const { properties, property } = this.state;
    return (
      <div className="page-container">
        <Navigation />
        <div className="App">
          <button
            class="btn btn-info"
            onClick={() => this.prevProperty()}
            disabled={property.index === 0}
          >
            Prev
          </button>
          <button
            class="btn btn-info"
            onClick={() => this.nextProperty()}
            disabled={property.index === data.properties.length - 1}
          >
            Next
          </button>
          <div className="page">
            <div className="col">
              <div className={`cards-slider active-slide-${property.index}`}>
                <div
                  className="cards-slider-wrapper"
                  style={{
                    transform: `translateX(-${property.index *
                      (100 / properties.length)}%)`
                  }}
                >
                  {properties.map(property => (
                    <Card key={property._id} property={property} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <Router />
      </div>
    );
  }
}

export default App;
