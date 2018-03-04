import React , { Component } from 'react';
import './FeedReview.css';

import Stars from '../../../common/Stars/Stars';
import Icon from '../../../common/Icon/Icon';
import Photo from '../../../common/Photo/Photo';

import feed_hero_1 from '../../../../images/feed_hero_1.jpg';
import avatar_4 from '../../../../images/avatar_4.jpg';

class FeedReview extends Component {
  renderTooltip(name) {
    return (
      <span className="tooltip-wrapper">
        <span className="tooltip">
          {name}
        </span>
      </span>
    );
  }
  render () {
    return (
      <div className="activity-feed_item activity-feed_item--first-load activity-feed_item--review island island--light" >
        <div className="feed-item_header">
          <div className="arrange arrange--12">
            <div className="arrange_unit">
              <Photo
                type="avatar_30"
                src={avatar_4}
              />
            </div>
            <div className="arrange_unit arrange_unit--fill">
              <a className="feed-item_user-link">
                <strong>Vivian D.</strong>
              </a><br></br>
              <span className="feed-item_action">Wrote a review</span>
            </div>
          </div>
        </div>
        <div className="feed-item_scrollable-content">
          <Photo
            type="feed_hero"
            src={feed_hero_1}
            title="bar"
          />
          <div className="feed-item_body">
            <div className="feed-item_title u-space-b2 u-text-truncate feed-item_title--bordered">
              <div className="business-link-hovercard business-link-hovercard--strong">
                <span className="business-link-hovercard_business-link">
                  <a className="biz-name">
                    <span>Hinodeya Ramen Bar</span>
                  </a>
                </span>
              </div>
            </div>
            <div className="u-space-b2">
              <Stars rating="4.0"/>
            </div>
            <p className="feed-item_review-content u-break-word">
              <span>
                Been here a few times now and pretty solid. Never have had to wait too long- maybe 15 minutes. Very hip and Japanese atmosphere. Get the house special ramen and its very clean, but still pretty flavor...
                <a className="continue-reading u-nowrap">
                  Continue reading
                </a>
              </span>
              <span className="u-hidden" >
                Been here a few times now and pretty solid. Never have had to wait too long- maybe 15 minutes. Very hip and Japanese atmosphere. Get the house special ramen and its very clean, but still pretty flavorful. No complaints here! Service is good.
              </span>
            </p>
          </div>
        </div>
        <div className="feed-item_footer">
          <div className="arrange arrange--12">
            <div className="arrange_unit arrange_unit--fill">
              <ul className="ufc-actions">
                <li className="ufc-action">
                  <a className="ufc-action_link ufc-action_link--useful">
                    <span className="show-tooltip">
                      <Icon
                        name="useful-outline"
                        size={24}
                        ufc
                      />
                      {this.renderTooltip("Useful")}
                    </span>
                  </a>
                </li>
                <li className="ufc-action">
                  <a className="ufc-action_link ufc-action_link--funny">
                    <span className="show-tooltip">
                      <Icon
                        name="funny-outline"
                        size={24}
                        ufc
                      />
                      {this.renderTooltip("Funny")}
                    </span>
                  </a>
                </li>
                <li className="ufc-action">
                  <a className="ufc-action_link ufc-action_link--cool">
                    <span className="show-tooltip">
                      <Icon
                        name="cool-outline"
                        size={24}
                        ufc
                      />
                      {this.renderTooltip("Cool")}
                    </span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="arrange_unit">
              <div className="arrange">
                <div className="arrange_unit">
                  <a className="compliment-btn compliment-btn--not-sent feed-item_action-link feed-item_action-link--compliment">
                    <span className="show-tooltip">
                      <Icon
                        name="compliment"
                        size={24}
                        currentColor
                      />
                      {this.renderTooltip("Send a Compliment")}
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FeedReview;
