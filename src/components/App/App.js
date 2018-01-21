import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="y-container homepage-hero">

        {/* Top menu */}
        <ul className="header-nav">
          <li className="header-nav_item">
            <a className="header-nav_link">Write a Review</a>
          </li>
          <li className="header-nav_item">
            <a className="header-nav_link">Events</a>
          </li>
          <li className="header-nav_item">
            <a className="header-nav_link">Talk</a>
          </li>
        </ul>

        {/* Registration buttons */}
        <ul>
          <li>Log In</li>
          <li>Sign Up</li>
        </ul>

        <h1 className="homepage-hero_logo">
          <a href="/">Yelp</a>
        </h1>

      </div>
    );
  }
}

export default App;
