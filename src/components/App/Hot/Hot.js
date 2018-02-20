import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Hot.css'

import Stars from '../../common/Stars/Stars';
import Icon from '../../common/Icon/Icon';
import Photo from '../../common/Photo/Photo';

class Hot extends Component {
  render () {
    const  { businesses }  = this.props;

    return (
      <div className="arrange arrange--3-units arrange--30 arrange--wrap">

        {businesses &&
          businesses.map(business =>
            <div key={business.id} className="arrange_unit">
              <div className="card business-passport-card">
                <Photo
                  type="card_photo"
                  src={business.image_url}
                />
                <div className="card_body">
                  <div className="card_content">
                    <h3 className="card_content-title--linked u-text-truncate">
                      <div className="business-link-hovercard">
                        <span className="business-link-hovercard_business-link">
                          <a className="biz-name">
                            <span>{business.name}</span>
                          </a>
                        </span>
                      </div>
                    </h3>
                    <div className="biz-rating biz-rating-large clearfix">
                      <Stars rating={business.rating}/>
                      <span className="review-count rating-qualifier">{`${business.review_count} reviews`}</span>
                    </div>
                    <div className="price-category">
                      <span className="bullet-after">
                        <span className="business-attribute price-range">{business.price}</span>
                      </span>
                      <span className="category-str-list">{business.categories.map(c => c.title).join(', ')}</span>
                    </div>
                    <div className="neighborhood u-text-truncate u-space-t1 u-space-b1">
                      <span className="neighborhood-str-list">{business.location.display_address.join(" ")}</span>
                    </div>
                    <p className="business-passport-card_date-opened">
                      <Icon
                        name="flame"
                        size={18}
                        currentColor
                      />
                      Opened 6 weeks ago
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

Hot.propTypes = {
  businesses: PropTypes.array.isRequired
};

export default Hot;
