import React, { Component } from 'react';
import './RecentActivity.css';

import Icon from '../Icon/Icon';
import Photo from '../Photo/Photo';

import FeedReview from '../FeedReview/FeedReview';
import FeedSinglePhoto from '../FeedSinglePhoto/FeedSinglePhoto';

import avatar_2 from '../../images/avatar_2.jpg';
import avatar_3 from '../../images/avatar_3.jpg';

import feed_photo_big_1 from '../../images/feed_photo_big_1.jpg';
import feed_photo_big_2 from '../../images/feed_photo_big_2.jpg';

import feed_photo_1 from '../../images/feed_photo_1.jpg';
import feed_photo_2 from '../../images/feed_photo_2.jpg';
import feed_photo_3 from '../../images/feed_photo_3.jpg';
import feed_photo_4 from '../../images/feed_photo_4.jpg';

class RecentActivity extends Component {
  render () {
    return (

      <div className="arrange arrange--wrap arrange--3-units arrange--30">

        <div className="arrange_unit">

          <FeedSinglePhoto />

          <div className="activity-feed_item activity-feed_item--biz_photo activity-feed_item--first-load island island--light" >
            <div className="feed-item_header">
              <div className="arrange arrange--12">
                <div className="arrange_unit">
                  <Photo
                    type="avatar_30"
                    src={avatar_2}
                  />
                </div>
                <div className="arrange_unit arrange_unit--fill">
                  <a className="feed-item_user-link"><strong>Zak R.</strong></a><br></br>
                  <span className="feed-item_action">Added 5 photos</span>
                </div>
              </div>
            </div>
            <div className="feed-item_scrollable-content">
              <div className="feed-item_body">
                <div className="feed-item_title u-space-b2 u-text-truncate">
                  <div className="business-link-hovercard business-link-hovercard--strong">
                    <span className="business-link-hovercard_business-link">
                      <a className="biz-name">
                        <span>Alexander’s Steakhouse</span>
                      </a>
                    </span>
                  </div>
                </div>
                <div className="feed-item_photos">
                  <div className="arrange arrange--2-units arrange--6 arrange--wrap">
                    <div className="arrange_unit u-size-full">
                      <Photo
                        type="feed_big"
                        src={feed_photo_big_1}
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
                        src={feed_photo_1}
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
                        src={feed_photo_2}
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
                <p className="feed-item_more">
                  <a className="show-all-photos">Show all 5 photos</a>
                </p>
              </div>
            </div>
          </div>

          <div className="activity-feed_item activity-feed_item--biz_photo activity-feed_item--first-load island island--light" >
            <div className="feed-item_header">
              <div className="arrange arrange--12">
                <div className="arrange_unit">
                  <Photo
                    type="avatar_30"
                    src={avatar_3}
                  />
                </div>
                <div className="arrange_unit arrange_unit--fill">
                  <a className="feed-item_user-link"><strong>Cali G.</strong></a><br></br>
                  <span className="feed-item_action">Added 3 photos</span>
                </div>
              </div>
            </div>
            <div className="feed-item_scrollable-content">
              <div className="feed-item_body">
                <div className="feed-item_title u-space-b2 u-text-truncate">
                  <div className="business-link-hovercard business-link-hovercard--strong">
                    <span className="business-link-hovercard_business-link">
                      <a className="biz-name">
                        <span>Elite Event: Donato & Co</span>
                      </a>
                    </span>
                  </div>
                </div>
                <div className="feed-item_photos">
                  <div className="arrange arrange--2-units arrange--6 arrange--wrap">
                    <div className="arrange_unit u-size-full">
                      <Photo
                        type="feed_big"
                        src={feed_photo_big_2}
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
                                <span>1 Like</span>
                              </span>
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="arrange_unit">
                      <Photo
                        type="feed"
                        src={feed_photo_3}
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
                                <span>1 Like</span>
                              </span>
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="arrange_unit">
                      <Photo
                        type="feed"
                        src={feed_photo_4}
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
              </div>
            </div>
          </div>

        </div>

        <div className="arrange_unit">

          <FeedReview />

          <div className="activity-feed_item activity-feed_item--biz_photo activity-feed_item--first-load island island--light" >
            <div className="feed-item_header">
              <div className="arrange arrange--12">
                <div className="arrange_unit">
                  <Photo
                    type="avatar_30"
                    src={avatar_3}
                  />
                </div>
                <div className="arrange_unit arrange_unit--fill">
                  <a className="feed-item_user-link"><strong>Cali G.</strong></a><br></br>
                  <span className="feed-item_action">Added 3 photos</span>
                </div>
              </div>
            </div>
            <div className="feed-item_scrollable-content">
              <div className="feed-item_body">
                <div className="feed-item_title u-space-b2 u-text-truncate">
                  <div className="business-link-hovercard business-link-hovercard--strong">
                    <span className="business-link-hovercard_business-link">
                      <a className="biz-name">
                        <span>Elite Event: Donato & Co</span>
                      </a>
                    </span>
                  </div>
                </div>
                <div className="feed-item_photos">
                  <div className="arrange arrange--2-units arrange--6 arrange--wrap">
                    <div className="arrange_unit u-size-full">
                      <Photo
                        type="feed_big"
                        src={feed_photo_big_2}
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
                                <span>1 Like</span>
                              </span>
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="arrange_unit">
                      <Photo
                        type="feed"
                        src={feed_photo_3}
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
                                <span>1 Like</span>
                              </span>
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="arrange_unit">
                      <Photo
                        type="feed"
                        src={feed_photo_4}
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
              </div>
            </div>
          </div>

          <FeedReview />

        </div>

        <div className="arrange_unit">

          <div className="activity-feed_item activity-feed_item--biz_photo activity-feed_item--first-load island island--light" >
            <div className="feed-item_header">
              <div className="arrange arrange--12">
                <div className="arrange_unit">
                  <Photo
                    type="avatar_30"
                    src={avatar_2}
                  />
                </div>
                <div className="arrange_unit arrange_unit--fill">
                  <a className="feed-item_user-link"><strong>Zak R.</strong></a><br></br>
                  <span className="feed-item_action">Added 5 photos</span>
                </div>
              </div>
            </div>
            <div className="feed-item_scrollable-content">
              <div className="feed-item_body">
                <div className="feed-item_title u-space-b2 u-text-truncate">
                  <div className="business-link-hovercard business-link-hovercard--strong">
                    <span className="business-link-hovercard_business-link">
                      <a className="biz-name">
                        <span>Alexander’s Steakhouse</span>
                      </a>
                    </span>
                  </div>
                </div>
                <div className="feed-item_photos">
                  <div className="arrange arrange--2-units arrange--6 arrange--wrap">
                    <div className="arrange_unit u-size-full">
                      <Photo
                        type="feed_big"
                        src={feed_photo_big_1}
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
                        src={feed_photo_1}
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
                        src={feed_photo_2}
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
                <p className="feed-item_more">
                  <a className="show-all-photos">Show all 5 photos</a>
                </p>
              </div>
            </div>
          </div>

          <FeedReview />

          <div className="activity-feed_item activity-feed_item--biz_photo activity-feed_item--first-load island island--light" >
            <div className="feed-item_header">
              <div className="arrange arrange--12">
                <div className="arrange_unit">
                  <Photo
                    type="avatar_30"
                    src={avatar_2}
                  />
                </div>
                <div className="arrange_unit arrange_unit--fill">
                  <a className="feed-item_user-link"><strong>Zak R.</strong></a><br></br>
                  <span className="feed-item_action">Added 5 photos</span>
                </div>
              </div>
            </div>
            <div className="feed-item_scrollable-content">
              <div className="feed-item_body">
                <div className="feed-item_title u-space-b2 u-text-truncate">
                  <div className="business-link-hovercard business-link-hovercard--strong">
                    <span className="business-link-hovercard_business-link">
                      <a className="biz-name">
                        <span>Alexander’s Steakhouse</span>
                      </a>
                    </span>
                  </div>
                </div>
                <div className="feed-item_photos">
                  <div className="arrange arrange--2-units arrange--6 arrange--wrap">
                    <div className="arrange_unit u-size-full">
                      <Photo
                        type="feed_big"
                        src={feed_photo_big_1}
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
                        src={feed_photo_1}
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
                        src={feed_photo_2}
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
                <p className="feed-item_more">
                  <a className="show-all-photos">Show all 5 photos</a>
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>

    );
  }
}

export default RecentActivity;
