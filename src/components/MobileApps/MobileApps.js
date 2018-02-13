import React, { Component } from 'react';
import './MobileApps.css';

import Icon from '../Icon/Icon';

import ios from '../../images/pitch_ios.png';
import android from '../../images/pitch_android.png';

class MobileApps extends Component {
  render () {

    return (
      <div className="home-container_section home-container_section--top-long">
        <div className="u-text-centered">
          <h2 className="u-space-b4">Yelp Mobile Apps</h2>
          <div className="app-pitch">
            <div className="arrange arrange--equal arrange--30">
              <div className="arrange_unit">
                <a className="island island-light app-pitch_item app-pitch_item--ios">
                  <h4>iPhone, iPad and
                    <Icon
                      name="apple"
                      size={18}
                      black
                    />
                    Watch</h4>
                    <img
                      src={ios}
                      width="264"
                      alt="iPhone"
                    />
                </a>
              </div>
              <div className="arrange_unit">
                <a className="island island-light app-pitch_item app-pitch_item--android">
                  <h4>Android</h4>
                  <img
                    src={android}
                    width="264"
                    alt="Android"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MobileApps;
