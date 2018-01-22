import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="y-container homepage-hero">
        <div className="y-container_content">


          <div className="hero-header">
            <div className="arrange arrange--18">
              <div className="arrange_unit arrange_unit--fill">
                <div className="hero-header_nav hero-header_nav--main nowrap">
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
                </div>
              </div>
              <div className="arrange_unit nowrap">
                <ul className="header-nav hero-header_nav main-header_account">
                  <li className="header-nav_item u-space-r2">
                    <a className="header-nav_link header-nav_link--log-in">Log In</a>
                  </li>
                  <li className="header-nav_item u-space-r0">
                    <a className="ybtn ybtn--primary header-nav_button nowrap">Sign Up</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="homepage-hero_inner">
            <div className="u-text-centered">
              <h1 className="homepage-hero_logo">
                <a href="/">Yalp</a>
              </h1>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default App;
