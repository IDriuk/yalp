import React, { Component } from 'react';
import './Suggestions.css';
import Icon from '../../../common/Icon/Icon';

class Suggestions extends Component {
  render () {
    const { search, updateSearchInput, locations } = this.props;

    return (
      <div className="main-search_suggestions suggestions-list-container">
        {search &&
        <ul className="suggestions-list">
          <li
            onClick={() => updateSearchInput("Restaurants") }
            className="suggestions-list-item">
            <div className="media-block">
              <div className="media-avatar">
                <Icon name="suggestions_food" size={24} />
              </div>
              <div className="media-story">Restaurants</div>
            </div>
          </li>
          <li
            onClick={() => updateSearchInput("Breakfast & Brunch")}
            className="suggestions-list-item">
            <div className="media-block">
              <div className="media-avatar">
                <Icon name="suggestions_croissant" size={24} />
              </div>
              <div className="media-story">Breakfast & Brunch</div>
            </div>
          </li>
          <li
            onClick={() => updateSearchInput("Coffee & Tea")}
            className="suggestions-list-item">
            <div className="media-block">
              <div className="media-avatar">
                <Icon name="suggestions_coffee" size={24} />
              </div>
              <div className="media-story">Coffee & Tea</div>
            </div>
          </li>
          <li
            onClick={() => updateSearchInput("Delivery")}
            className="suggestions-list-item">
            <div className="media-block">
              <div className="media-avatar">
                <Icon name="suggestions_order" size={24} />
              </div>
              <div className="media-story">Delivery</div>
            </div>
          </li>
          <li
            onClick={() => updateSearchInput("Takeout")}
            className="suggestions-list-item">
            <div className="media-block">
              <div className="media-avatar">
                <Icon name="suggestions_shopping" size={24} />
              </div>
              <div className="media-story">Takeout</div>
            </div>
          </li>
          <li
            onClick={() => updateSearchInput("Reservations")}
            className="suggestions-list-item">
            <div className="media-block">
              <div className="media-avatar">
                <Icon name="suggestions_reservation" size={24} />
              </div>
              <div className="media-story">Reservations</div>
            </div>
          </li>
        </ul>}

        {locations &&
        <ul className="suggestions-list">
          <li
            className="suggestions-list-item suggest-button">
            <div className="media-block">
              <div className="media-avatar">
                <Icon name="suggestions_location" size={24} blue_dark />
              </div>
              <div className="media-story">Current Location</div>
            </div>
          </li>
          <li
            className="suggestions-list-item">
            <div className="media-block">
              <div className="media-story">San Francisco, CA</div>
            </div>
          </li>
        </ul>}

      </div>
    );
  }
}

export default Suggestions;
