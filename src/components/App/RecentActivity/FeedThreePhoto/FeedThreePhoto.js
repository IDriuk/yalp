import React, { Component } from 'react';
import './FeedThreePhoto.css';

import Icon from '../../../common/Icon/Icon';
import Photo from '../../../common/Photo/Photo';

class FeedThreePhoto extends Component {
  render () {
    const { avatar, big_photo, photos, author, photos_count, biz_name, show_all } = this.props

    return (
      <div className="activity-feed_item activity-feed_item--biz_photo activity-feed_item--first-load island island--light" >
        <div className="feed-item_header">
          <div className="arrange arrange--12">
            <div className="arrange_unit">
              <Photo
                type="avatar_30"
                src={avatar}
              />
            </div>
            <div className="arrange_unit arrange_unit--fill">
              <a className="feed-item_user-link"><strong>{author}</strong></a><br></br>
              <span className="feed-item_action">{photos_count}</span>
            </div>
          </div>
        </div>
        <div className="feed-item_scrollable-content">
          <div className="feed-item_body">
            <div className="feed-item_title u-space-b2 u-text-truncate">
              <div className="business-link-hovercard business-link-hovercard--strong">
                <span className="business-link-hovercard_business-link">
                  <a className="biz-name">
                    <span>{biz_name}</span>
                  </a>
                </span>
              </div>
            </div>
            <div className="feed-item_photos">
              <div className="arrange arrange--2-units arrange--6 arrange--wrap">
                <div className="arrange_unit u-size-full">
                  <Photo
                    type="feed_big"
                    src={big_photo}
                    title="Filet"
                  />
                  <ul className="feed-item_actions feed-item_actions--contained">
                    <li className="feed-item_action">
                      <a className="feed-item_action-link">
                        <span>
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
                <div className="arrange_unit">
                  <Photo
                    type="feed"
                    src={photos[0]}
                    title="T-bone"
                  />
                  <ul className="feed-item_actions feed-item_actions--contained">
                    <li className="feed-item_action">
                      <a className="feed-item_action-link">
                        <span>
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
                <div className="arrange_unit">
                  <Photo
                    type="feed"
                    src={photos[1]}
                    title="T-bone"
                  />
                  <ul className="feed-item_actions feed-item_actions--contained">
                    <li className="feed-item_action">
                      <a className="feed-item_action-link">
                        <span>
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
            {show_all &&
              <p className="feed-item_more">
                <a className="show-all-photos">{show_all}</a>
              </p>}
          </div>
        </div>
      </div>
    );
  }
}

export default FeedThreePhoto;
