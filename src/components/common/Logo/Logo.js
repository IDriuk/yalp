import React, { Component, Fragment } from 'react';
import './Logo.css';

import logo_desktop_xsmall_outline from '../../../images/logo_desktop_xsmall_outline.png';
import burst_desktop_xsmall_outline from '../../../images/burst_desktop_xsmall_outline.png';

class Logo extends Component {
  render () {
    const { type } = this.props;

    return (
      <Fragment>

        {type === "hero" &&
          <div className="u-text-centered">
            <h1 className="homepage-hero_logo">
              <a>Yalp</a>
            </h1>
          </div>}

        {type === "logo" && <img src={logo_desktop_xsmall_outline} alt="Yelp logo" />}
        {type === "burst" && <img src={burst_desktop_xsmall_outline} alt="Yelp burst" />}

      </Fragment>
    );
  }
}

export default Logo;
