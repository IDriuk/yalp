import React, { Component, Fragment } from 'react';
import './HeroBiz.css';
import Stars from '../../common/Stars/Stars';

import cardAvatar from '../../../images/hovercard_avatar_pizza.jpg';

class HeroBiz extends Component {

  constructor(props) {
    super(props);

    this.state = {
      cardTop: 0,
      cardLeft: 0,
      visibility: false};
  }

  componentDidMount() {
    const linkLeft = this.hoverlink.offsetLeft;
    const linkTop = this.hoverlink.offsetTop;
    const linkRect = this.hoverlink.getBoundingClientRect();
    const cardRect = this.card.getBoundingClientRect();

    const cardLeft = linkLeft + linkRect.width/2 - cardRect.width/2;
    const cardTop = linkTop - cardRect.height;
    this.setState({
      cardTop,
      cardLeft
    })
  }

  render() {
    const { cardTop, cardLeft, is_active } = this.state;

    return (
      <Fragment>

        <div
          ref={node => {this.card = node;}}
          onMouseOver={() => {this.setState({is_active: true})}}
          onMouseOut={() => {this.setState({is_active: false})}}
          className="center-aligned hovercard top-aligned"
          style={{top: cardTop, left: cardLeft, display: "block", visibility: !is_active ? "hidden" : ""}}
        >
          <div className="hovercard-inner clearfix">
            <div className="business-link-hovercard_hovercard u-break-word">
              <div className="media-block media-block--12 biz-listing-medium">
                <div className="media-avatar">
                  <div className="photo-box pb-90s">
                    <a>
                      <img
                        src={cardAvatar}
                        className="photo-box-img"
                        height={90}
                        width={90}
                        alt="pizza"
                      />
                    </a>
                  </div>
                </div>
                <div className="media-story">
                  <div className="clearfix media-title">
                    <a className="biz-name">
                      <span>Tufino Pizzeria Napoletana</span>
                    </a>
                  </div>
                  <div className="biz-rating biz-rating-large clearfix">
                    <Stars rating="4" />
                    <span className="rating-qualifier review-count">281 reviews</span>
                  </div>
                  <div className="price-category">
                    <span className="category-str-list">
                      Pizza, Italian, Breakfast & Brunch
                    </span>
                  </div>
                  <small>
                    <span className="addr-city"></span>
                  </small>
                </div>
              </div>
            </div>
          </div>
          <span className="arrow-icon"></span>
        </div>

        <div className="u-text-centered homepage-hero_biz u-size-full">
          <div
            ref={node => { this.hoverlink = node; }}
            onMouseOver={() => {this.setState({is_active: true})}}
            onMouseOut={() => {this.setState({is_active: false})}}
            className="business-link-hovercard business-link-hovercard--strong business-link-hovercard--inline">
            <span className="business-link-hovercard_business-link">
              <a className="biz-name">
                <span>Tufino Pizzeria Napoletana</span>
              </a>
            </span>
          </div>
        </div>
        <div className="u-text-centered homepage-hero_photo-owner u-size-full">
          <div>
            <p>
              Photo by
              <a className="homepage-hero_photo-owner-link">
                <strong> Bradley H.</strong>
              </a>
            </p>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default HeroBiz;
