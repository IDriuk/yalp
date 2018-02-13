import React, { Component } from 'react';
import './LocationBar.css'

import Icon from '../Icon/Icon';

class LocationBar extends Component {
  render () {
    return (
      <div className="location-bar">
        <div className="tab-nav-container">
          <ul className="tab-nav tab-nav--center">
            {
              [
                "New York",
                "San Jose",
                "Los Angeles",
                "Chicago",
                "Palo Alto",
                "Oakland",
                "More Cities"
              ]
              .map(item =>
                <li key={item} className="tab-nav_item">
                  <a className="tab-link tab-link--nav">
                    {item === "More Cities" && <Icon name="search-small" size={18} currentColor tab />}
                    <span className="tab-link_label">{item}</span>
                  </a>
                </li>)
            }
          </ul>
        </div>
      </div>
    );
  }
}

export default LocationBar;
