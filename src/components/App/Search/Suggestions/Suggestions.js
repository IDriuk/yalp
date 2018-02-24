import React, { Component } from 'react';
import './Suggestions.css';
import Icon from '../../../common/Icon/Icon';

const searchSuggestions = [
  {icon_name: "food", story: "Restaurants"},
  {icon_name: "croissant", story: "Breakfast & Brunch"},
  {icon_name: "coffee", story: "Coffee & Tea"},
  {icon_name: "order", story: "Delivery"},
  {icon_name: "shopping", story: "Takeout"},
  {icon_name: "reservation", story: "Reservations"},
]

class Suggestions extends Component {
  render () {
    const { search, updateSearchInput, locations } = this.props;

    return (
      <div className="main-search_suggestions suggestions-list-container">
        {search &&
        <ul className="suggestions-list">
          {searchSuggestions.map(suggestion =>
          <li
            key={suggestion.story}
            onClick={() => updateSearchInput(suggestion.story) }
            className="suggestions-list-item">
            <div className="media-block">
              <div className="media-avatar">
                <Icon name={`suggestions_${suggestion.icon_name}`} size={24} />
              </div>
              <div className="media-story">{suggestion.story}</div>
            </div>
          </li>)}
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
