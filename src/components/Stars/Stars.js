import React, { Component } from 'react';
import './Stars.css';
import stars_img from '../../images/stars.png';

export default class Stars extends Component {
  render () {
    const { rating } = this.props;
    const stars_modifier = rating === "4.5" ? "i-stars i-stars--regular-4-half" :
                                      "4.0" ? "i-stars--regular-4" : "";
    const stars_styles = `i-stars  ${stars_modifier} rating-large`;
    const alt = `${rating} star rating`;

    return (
      <div className={stars_styles}>
        <img className="offscreen" src={stars_img} alt={alt} height="303" width="84" />
      </div>
    );
  }
}
