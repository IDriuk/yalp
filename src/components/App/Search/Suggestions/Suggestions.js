import React, { Component } from 'react';
import './Suggestions.css';

class Suggestions extends Component {
  render () {
    return (
      <div className="main-search_suggestions suggestions-list-container">
        <ul className="suggestions-list">
          <li
            onClick={(e) => { this.props.updateSearchInput("Restaurants") }}
            className="suggestions-list-item">
            <div className="media-block">
              <div className="media-avatar">
                <span className="icon" style={{width: 24, height: 24}}>
                  <svg className="icon_svg" id="24x24_food" height="100%" viewBox="0 0 24 24" width="100%">
                    <path d="M17.22 22a1.78 1.78 0 0 1-1.74-2.167l1.298-4.98L14 13l1.756-9.657A1.635 1.635 0 0 1 19 3.635V20.22A1.78 1.78 0 0 1 17.22 22zm-7.138-9.156l.697 7.168a1.79 1.79 0 1 1-3.56 0l.7-7.178A3.985 3.985 0 0 1 5 9V3a1 1 0 0 1 2 0v5.5c0 .28.22.5.5.5s.5-.22.5-.5V3a1 1 0 0 1 2 0v5.5c0 .28.22.5.5.5s.5-.22.5-.5V3a1 1 0 0 1 2 0v5.83c0 1.85-1.2 3.518-2.918 4.014z"></path>
                  </svg>
                </span>
              </div>
              <div className="media-story">Restaurants</div>
            </div>
          </li>
          <li
            onClick={() => this.props.updateSearchInput("Breakfast & Brunch")}
            className="suggestions-list-item">
            <div className="media-block">
              <div className="media-avatar">
                <span className="icon" style={{width: 24, height: 24}}>
                  <svg className="icon_svg" id="24x24_croissant" height="100%" viewBox="0 0 24 24" width="100%">
                    <path d="M20.634 8.5H19.1c.09-.295.15-.602.15-.926v-2.12c.718.34 1.39.76 2.003 1.253.74.597.332 1.793-.62 1.793zm-4.86 1.055a5.58 5.58 0 0 0-.712-.05L13.748 3.58a10.957 10.957 0 0 1 3.425.138c.477.094.827.5.827 1.324v2.534c0 1.195-1.043 2.15-2.225 1.98zm-2.43 1.81a4.005 4.005 0 0 0-1.98 1.98c-.202.442-.664.702-1.138.597l-6.89-1.528a1.013 1.013 0 0 1-.737-1.3A13.018 13.018 0 0 1 11.112 2.6a1.013 1.013 0 0 1 1.3.735l1.527 6.89c.106.475-.154.937-.597 1.14zM9.506 15.06c.003.242.016.48.05.713C9.722 16.957 8.768 18 7.573 18H4.7c-.485 0-.89-.35-.984-.827a10.957 10.957 0 0 1-.138-3.425l5.928 1.314zM8.5 19.1v1.534c0 .95-1.196 1.36-1.792.62a9.997 9.997 0 0 1-1.253-2.004h2.12c.318 0 .626-.062.925-.15z"></path>
                  </svg>
                </span>
              </div>
              <div className="media-story">Breakfast & Brunch</div>
            </div>
          </li>
          <li
            onClick={() => this.props.updateSearchInput("Coffee & Tea")}
            className="suggestions-list-item">
            <div className="media-block">
              <div className="media-avatar">
                <span className="icon" style={{width: 24, height: 24}}>
                  <svg className="icon_svg" id="24x24_coffee" height="100%" viewBox="0 0 24 24" width="100%">
                    <path d="M19 13h-1a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V5h15a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3zm1-5c0-.55-.45-1-1-1h-1v4h1c.55 0 1-.45 1-1V8zm2 10a1 1 0 0 1-1 1H3a1 1 0 0 1 0-2h18a1 1 0 0 1 1 1z"></path>
                  </svg>
                </span>
              </div>
              <div className="media-story">Coffee & Tea</div>
            </div>
          </li>
          <li
            onClick={() => this.props.updateSearchInput("Delivery")}
            className="suggestions-list-item">
            <div className="media-block">
              <div className="media-avatar">
                <span className="icon" style={{width: 24, height: 24}}>
                  <svg  className="icon_svg" id="24x24_order" height="100%" viewBox="0 0 24 24" width="100%"><g><path d="M19 10V4h-6v10H9.444a3.485 3.485 0 0 0-4.888 0H2v3h1.55A3.49 3.49 0 0 0 7 20a3.49 3.49 0 0 0 3.45-3h3.1c.24 1.69 1.69 3 3.45 3 1.76 0 3.21-1.31 3.45-3H22v-5l-3-2zM7 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm8-12h2v3h-2V6zm2 12c-.83 0-1.5-.67-1.5-1.5S16.17 15 17 15s1.5.67 1.5 1.5S17.83 18 17 18z"></path><path d="M6 7V6c0-.55.45-1 1-1h1c.55 0 1 .45 1 1v1H6m2-4H7a3 3 0 0 0-3 3v1H2v7h11V7h-2V6a3 3 0 0 0-3-3" opacity=".502"></path></g></svg>
                </span>
              </div>
              <div className="media-story">Delivery</div>
            </div>
          </li>
          <li
            onClick={() => this.props.updateSearchInput("Takeout")}
            className="suggestions-list-item">
            <div className="media-block">
              <div className="media-avatar">
                <span className="icon" style={{width: 24, height: 24}}>
                  <svg className="icon_svg" id="24x24_shopping" height="100%" viewBox="0 0 24 24" width="100%"><path d="M16 6V5a3 3 0 0 0-3-3h-2a3 3 0 0 0-3 3v1H5v13a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V6h-3zm-6-1c0-.55.45-1 1-1h2c.55 0 1 .45 1 1v1h-4V5z"></path></svg>
                </span>
              </div>
              <div className="media-story">Takeout</div>
            </div>
          </li>
          <li
            onClick={() => this.props.updateSearchInput("Reservations")}
            className="suggestions-list-item">
            <div className="media-block">
              <div className="media-avatar">
                <span className="icon" style={{width: 24, height: 24}}>
                  <svg className="icon_svg" id="24x24_reservation" height="100%" viewBox="0 0 24 24" width="100%"><path d="M18 21H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3 1 1 0 0 1 2 0h8a1 1 0 0 1 2 0 3 3 0 0 1 3 3v12a3 3 0 0 1-3 3zm1-13H5v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V8zm-6 5h4v4h-4v-4z"></path></svg>
                </span>
              </div>
              <div className="media-story">Reservations</div>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default Suggestions;
