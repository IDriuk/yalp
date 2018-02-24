import React, { Component } from 'react';
import './CategoriesMenu.css'
import Icon from '../../common/Icon/Icon';

const categories = [
  ["food","Restaurants"],
  ["nightlife", "Nightlife"],
  ["tools", "Home Services"],
  ["order", "Delivery"]
];

const dropdown_items= [
  "Air Conditioning & Heating",
  "Contractors",
  "Electricians",
  "Home Cleaners",
  "Landscapers",
  "Locksmiths",
  "Movers",
  "Painters",
  "Plumbers"
]

class CategoriesMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      is_active: false,
      hovered: false
    }
  }

  renderDropdown(category) {
    const { is_active, hovered } = this.state;

    return(
      <li key={category}
        className={`homepage-hero_category dropdown dropdown--arrow dropdown--fade ${is_active ? "is-active" : ""}`}
        onMouseOver={() => {this.setState({is_active: true, hovered: true})}}
        onMouseOut={() => {this.setState({is_active: false})}}
      >
        <div className={`dropdown_toggle ${is_active ? "is-active hover" : ""}`}>
          <Icon
            name={category[0]}
            size={18}
            inverted
          />&nbsp;
          <a className="homepage-hero_link">{category[1]}</a>
          <span
            style={{width: 14, height: 14}}
            className="dropdown_arrow icon icon--inverse">
            <svg className="icon_svg" id="14x14_triangle_down" height="100%" viewBox="0 0 14 14" width="100%"><path d="M7 9L3.5 5h7L7 9z"></path></svg>
          </span>
        </div>
        <div className="dropdown_menu-container">
          {hovered &&
          <div className={`dropdown_menu ${is_active ? "is-visible" : "" }`} >
            <div className="dropdown_menu-inner">
              <ul className="dropdown_menu-group">
                {dropdown_items.map(item =>
                <li key={item} className="dropdown_item">
                  <a className="dropdown_link">
                    <span className="dropdown_label">{item}</span>
                  </a>
                </li>)}
              </ul>
            </div>
          </div>}
        </div>
      </li>
    );
  }

  render () {
    return (
      <ul className="homepage-hero_categories text-centered">
        { categories.map(category => category[0] !== "tools" ?
          <li key={category} className="homepage-hero_category">
            <div>
              <Icon
                name={category[0]}
                size={18}
                inverted
              />&nbsp;
              <a className="homepage-hero_link">{category[1]}</a>
            </div>
          </li>
          : this.renderDropdown(category))}
      </ul>
    );
  }
}

export default CategoriesMenu;
