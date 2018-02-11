import React, { Component } from 'react';
import './RecentActivity.css';

import Stars from '../Stars/Stars';
import Icon from '../Icon/Icon';
import Photo from '../Photo/Photo';

import avatar_1 from '../../images/avatar_1.jpg';
import avatar_2 from '../../images/avatar_2.jpg';
import avatar_3 from '../../images/avatar_3.jpg';
import avatar_4 from '../../images/avatar_4.jpg';

import feed_hero_1 from '../../images/feed_hero_1.jpg';

import feed_photo_single from '../../images/feed_photo_single.jpg';

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

          {/* rewiew */}
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
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
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

          {/* rewiew */}
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
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

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

          {/* rewiew */}
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
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

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
