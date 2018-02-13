import React, { Component } from 'react';
import './CategoriesMenu.css'
import Icon from '../common/Icon/Icon';

class CategoriesMenu extends Component {
  render () {
    return (
      <ul className="homepage-hero_categories text-centered">
        {
          [
            ["food","Restaurants"],
            ["nightlife", "Nightlife"],
            ["tools", "Home Services"],
            ["order", "Delivery"]
          ]
              .map(category =>
              <li key={category} className="homepage-hero_category">
              <div>
                <Icon
                  name={category[0]}
                  size={18}
                  inverted
                />
                <a className="homepage-hero_link">{category[1]}</a>
              </div>
            </li>)}
      </ul>
    );
  }
}

export default CategoriesMenu;
