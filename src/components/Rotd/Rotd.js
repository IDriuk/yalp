import React, { Component } from 'react';
import './Rotd.css';

import Photo from '../Photo/Photo';
import Icon from '../Icon/Icon';
import Stars from '../Stars/Stars';

import rotd_badge from '../../images/rotd_badge.png';
import rotd_photo from '../../images/rotd_photo.jpg';

const data = {
  photo: rotd_photo,
  author: "Emily T.",
  friends_count: "410",
  reviews_count: "250",
  is_elite: "Elite ’18",
  biz_name: " Dynamo Donut & Coffee",
  rating: "4.0",
  rating_qualifier: "11/5/2017",
  comment: "Time // Tried to come here on a Saturday around 2pm. Lesson learned: Come early before noon if you want the good donuts! By the time my bf and I arrived, they only had a few donuts of one flavor....the maple bacon apple.  Service // You order first at this small coffee shop looking window, first and then you can go inside and sit down. The front cashier was friendly enough.  Atmosphere // bright interior with small t..."
}

class Rotd extends Component {
  render () {
    return (
      <div className="island island--light rotd">
        <div className="ypassport arrange arrange--12 u-space-b3">
          <div className="arrange_unit">
            <Photo
              type="avatar_60"
              src={data.photo}
              title="Emily T."
            />
          </div>
          <div className="arrange_unit arrange_unit--fill">
            <strong>
              <a className="user-display-name">{data.author}</a>
            </strong>
            <ul className="user-passport-stats user-passport-stats--inline" >
              <li className="friend-count" >
                <Icon
                  name="friends"
                  size={18}
                  count
                />
                <b>{data.friends_count}</b>
              </li>
              <li className="review-count" >
                <Icon
                  name="review"
                  size={18}
                  count
                />
                <b>{data.reviews_count}</b>
              </li>
              <li className="is-elite responsive-small-display-inline-block" >
                <a>{data.is_elite}</a>
              </li>
            </ul>
            <div className="rotd_text" >
              Wrote a review for
              <div className="business-link-hovercard business-link-hovercard--inline business-link-hovercard--strong">
                <span className="business-link-hovercard_business-link">
                  <a className="biz-name">
                    <span>{data.biz_name}</span>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="badge-banner badge-banner--blue">
          Review of the Day
          <img alt="badge" src={rotd_badge} className="badge-banner_img" width="40" />
        </div>
        <div className="u-space-t3 u-space-b3">
          <div className="biz-rating biz-rating-large clearfix">
            <div>
              <Stars rating={data.rating}/>
            </div>
            <span className="rating-qualifier">{data.rating_qualifier}</span>
          </div>
        </div>
        <p className="rotd_comment-text">
          {data.comment}
          <a className="rotd_read-more">
             &nbsp; Continue reading
          </a>
        </p>
      </div>
    );
  }
}

export default Rotd;
