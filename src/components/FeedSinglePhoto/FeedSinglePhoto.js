import React, { Component } from 'react';
import './FeedSinglePhoto.css';

import Icon from '../common/Icon/Icon';
import Photo from '../common/Photo/Photo';

import avatar_1 from '../../images/avatar_1.jpg';
import feed_photo_single from '../../images/feed_photo_single.jpg';

class FeedSinglePhoto extends Component {
  render () {
    return (
      <div className="activity-feed_item activity-feed_item--biz_photo activity-feed_item--first-load island island--light" >
        <div className="feed-item_header">
          <div className="arrange arrange--12">
            <div className="arrange_unit">
              <Photo
                type="avatar_30"
                src={avatar_1}
              />
            </div>
            <div className="arrange_unit arrange_unit--fill">
              <a className="feed-item_user-link"><strong>S N.</strong></a><br></br>
              <span className="feed-item_action">Added 1 photo</span>
            </div>
          </div>
        </div>
        <div className="feed-item_scrollable-content">
          <div className="feed-item_body">
            <div className="feed-item_title u-space-b2 u-text-truncate">
              <div className="business-link-hovercard business-link-hovercard--strong">
                <span className="business-link-hovercard_business-link">
                  <a className="biz-name">
                    <span>Sur La Table Cooking Class</span>
                  </a>
                </span>
              </div>
            </div>
            <div className="feed-item_photos feed-item_photos--single">
              <Photo
                type="feed_single"
                src={feed_photo_single}
                title="New item! Greenpan diamond Evershine!! Quality!"
              />
              <ul className="feed-item_actions feed-item_actions--contained-borderless">
                <li className="feed-item_action">
                  <a className="feed-item_action-link">
                    <span className="show-tooltip">
                      <span>
                        <Icon
                          name="like-outline"
                          size={24}
                          currentColor
                          half
                          linked
                        />
                        <span>Like</span>
                      </span>
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FeedSinglePhoto;
