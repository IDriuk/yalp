import React, { Component } from 'react';
import './HeaderNav.css'

class HeaderNav extends Component {
  render () {
    return (
      <div className="hero-header">
        <div className="arrange arrange--18">
          <div className="arrange_unit arrange_unit--fill">
            <div className="hero-header_nav hero-header_nav--main nowrap">
              <ul className="header-nav">
                {['Write a Review', 'Events', 'Talk'].map((item) =>
                  <li key={item} className="header-nav_item">
                    <a className="header-nav_link">{item}</a>
                  </li>)}
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
    );
  }
}

export default HeaderNav;
