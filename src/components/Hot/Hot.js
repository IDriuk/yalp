import React, { Component } from 'react';
import './Hot.css'

import Stars from '../common/Stars/Stars';
import Icon from '../common/Icon/Icon';
import Photo from '../common/Photo/Photo';

import bluestonelane from '../../images/bluestonelane.jpg';
import kaya from '../../images/kaya.jpg';
import pastapopup from '../../images/pastapopup.jpg';

const defaultData = [
  {
    src: bluestonelane,
    biz_name: "Bluestone Lane",
    rating: "4.5",
    reviews: "15 reviews",
    price: "$$",
    category: "Coffee & Tea",
    neighborhood: "Financial District, SoMa",
    opened: "Opened 7 weeks ago"
  },
  {
    src: kaya,
    biz_name: "Kaya",
    rating: "4.5",
    reviews: "11 reviews",
    price: "$$",
    category: "Caribbean",
    neighborhood: "Civic Center",
    opened: "Opened 2 weeks ago"
  },
  {
    src: pastapopup,
    biz_name: "Pasta Pop-Up",
    rating: "4.5",
    reviews: "32 reviews",
    price: "$$",
    category: "Italian, Pop-Up Restaurants",
    neighborhood: "North Beach/Telegraph Hill",
    opened: "Opened 6 weeks ago"
  }
];

class Hot extends Component {
  render () {
    return (
      <div className="arrange arrange--3-units arrange--30 arrange--wrap">

        {
          defaultData.map(data =>
            <div key={data.src} className="arrange_unit">
              <div className="card business-passport-card">
                <Photo
                  type="card_photo"
                  src={data.src}
                />
                <div className="card_body">
                  <div className="card_content">
                    <h3 className="card_content-title--linked u-text-truncate">
                      <div className="business-link-hovercard">
                        <span className="business-link-hovercard_business-link">
                          <a className="biz-name">
                            <span>{data.biz_name}</span>
                          </a>
                        </span>
                      </div>
                    </h3>
                    <div className="biz-rating biz-rating-large clearfix">
                      <Stars rating={data.rating}/>
                      <span className="review-count rating-qualifier">{data.reviews}</span>
                    </div>
                    <div className="price-category">
                      <span className="bullet-after">
                        <span className="business-attribute price-range">{data.price}</span>
                      </span>
                      <span className="category-str-list">{data.category}</span>
                    </div>
                    <div className="neighborhood u-text-truncate u-space-t1 u-space-b1">
                      <span className="neighborhood-str-list">{data.neighborhood}</span>
                    </div>
                    <p className="business-passport-card_date-opened">
                      <Icon
                        name="flame"
                        size={18}
                        currentColor
                      />
                      {data.opened}
                    </p>
                  </div>
                </div>
              </div>
            </div>)
        }
      </div>
    );
  }
}

export default Hot;
