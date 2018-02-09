import React, { Component, Fragment } from 'react';
import './App.css';

import Stars from '../Stars/Stars';
import Icon from '../Icon/Icon';
import Photo from '../Photo/Photo';
import Logo from '../Logo/Logo';

import Search from '../Search/Search';
import HeaderNav from '../HeaderNav/HeaderNav';

import movers from '../../images/movers.png';
import hotels from '../../images/hotels.png';
import dryclean from '../../images/dryclean.png';
import massage from '../../images/massage.png';

import bluestonelane from '../../images/bluestonelane.jpg';
import kaya from '../../images/kaya.jpg';
import pastapopup from '../../images/pastapopup.jpg';
import rotd from '../../images/rotd.png';

import photo_ESeXb2NVPZzYonGbOJzoEw_60s from '../../images/photo_ESeXb2NVPZzYonGbOJzoEw_60s.jpg';
import HzFeDvDkWKsugW8ztN4lWg_90s from '../../images/HzFeDvDkWKsugW8ztN4lWg_90s.jpg';
import BR0mnDHZy3j3RI_hRAMBmg from '../../images/BR0mnDHZy3j3RI_hRAMBmg.jpg';
import yB8_l5v2e4Rs7rjgkm1WQ from '../../images/8yB8_l5v2e4Rs7rjgkm1WQ.jpg';

import photo_0os9VoR2evxRmqt2_Yx8Iw from '../../images/photo_0os9VoR2evxRmqt2_Yx8Iw.jpg';
import photo_EiZICTpAxWEmpvhDnduYdw from '../../images/photo_EiZICTpAxWEmpvhDnduYdw.jpg';
import photo_XJLvFmxlX5jdMfEyC4dG1g from '../../images/photo_XJLvFmxlX5jdMfEyC4dG1g.jpg';
import photo_tSaWNHKlJc4iOuGjvCRMmQ from '../../images/photo_tSaWNHKlJc4iOuGjvCRMmQ.jpg';
import photo_KVUGoFs40Jt3OdI7vmFog from '../../images/photo_KVUGoFs40Jt3OdI7vmF-og.jpg';
import photo_yj7A_xSnsbbOsxwYzCDGvw from '../../images/photo_yj7A_xSnsbbOsxwYzCDGvw.jpg';
import photo_UDkFIThfOLMNO8iCnF0t8A from '../../images/photo_UDkFIThfOLMNO8iCnF0t8A.jpg';
import photo_dLinn6rjkWYrtnMDTvDisQ from '../../images/photo_dLinn6rjkWYrtnMDTvDisQ.jpg';
import C921ZGj4qJc_TDk92CM5FA from '../../images/C921ZGj4qJc_TDk92CM5FA.jpg';
import LV2NNGBzYm166mc8VQ from '../../images/7LV2NNGBzYm166mc8VQ.jpg';
import Q1kaby1yAQEUWlsCP1c3Ow from '../../images/Q1kaby1yAQEUWlsCP1c3Ow.jpg';
import jsDmbW9Eaqgyc0Kbw4TUvg from '../../images/jsDmbW9Eaqgyc0Kbw4TUvg.jpg';

import ios from '../../images/pitch_ios.png';
import android from '../../images/pitch_android.png';

class App extends Component {
  render() {
    return (
      <Fragment>
        {/* homepage hero */}
        <div className="y-container homepage-hero">
          <div className="y-container_content">
            <HeaderNav />

            <div className="homepage-hero_inner">
              <Logo type="hero" />
              <Search />

              <ul className="homepage-hero_categories text-centered">
                <li className="homepage-hero_category">
                  <div>
                    <Icon
                      name="food"
                      size={18}
                      inverted
                    />
                    <a className="homepage-hero_link">Restaurants</a>
                  </div>
                </li>
                <li className="homepage-hero_category">
                  <div>
                    <Icon
                      name="nightlife"
                      size={18}
                      inverted
                    />
                    <a className="homepage-hero_link">Nightlife</a>
                  </div>
                </li>
                <li className="homepage-hero_category">
                  <div>
                    <Icon
                      name="tools"
                      size={18}
                      inverted
                    />
                    <a className="homepage-hero_link">Home Services</a>
                  </div>
                </li>
                <li className="homepage-hero_category">
                  <div>
                    <Icon
                      name="order"
                      size={18}
                      inverted
                    />
                    <a className="homepage-hero_link">Delivery</a>
                  </div>
                </li>
              </ul>

              <div className="u-text-centered homepage-hero_biz u-size-full">
                <div className="business-link-hovercard js-business-link-hovercard business-link-hovercard--strong business-link-hovercard--inline">
                  <span className="business-link-hovercard_business-link js-business-link">
                    <a className="biz-name js-analytics-click">
                      <span>Amaranth Bakery & Cafe</span>
                    </a>
                  </span>
                </div>
              </div>

              <div className="u-text-centered homepage-hero_photo-owner u-size-full">
                <div>
                  <p>
                    Photo by
                    <a className="homepage-hero_photo-owner-link">
                      <strong> Jen K.</strong>
                    </a>
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* first businesses */}
        <div className="y-container u-bg-color-alt">
          <div className="y-container_content">
            <div className="home-container home-container--first-top-short">
              <div className="home-container_section">
                <h2 className="browse-businesses_title u-space-b4 u-text-centered">Find the Best Businesses in Town</h2>
                <div className="browse-businesses_initial-categories">
                  <div className="arrange arrange--30 arrange--equal u-space-b5 u-text-centered">
                    <div className="arrange_unit">
                      <Photo
                        type="businesses_category"
                        src={movers}
                        title="Movers"
                      />
                    </div>
                    <div className="arrange_unit">
                      <Photo
                        type="businesses_category"
                        src={hotels}
                        title="Hotels"
                      />
                    </div>
                    <div className="arrange_unit">
                      <Photo
                        type="businesses_category"
                        src={dryclean}
                        title="Dry Cleaning"
                      />
                    </div>
                    <div className="arrange_unit">
                      <Photo
                        type="businesses_category"
                        src={massage}
                        title="Massage"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* hot and new */}
        <div className="y-container">
          <div className="y-container_content">
            <div className="home-container home-container--first-top-short">

              <div className="home-container_section home-container_section--top-long">
                <h2 className="u-text-centered">Yelp San Francisco</h2>
                <div className="location-bar">
                  <div className="tab-nav-container">
                    <ul className="tab-nav tab-nav--center">
                      <li className="tab-nav_item">
                        <a className="tab-link tab-link--nav">
                          <span className="tab-link_label">New York</span>
                        </a>
                      </li>
                      <li className="tab-nav_item">
                        <a className="tab-link tab-link--nav">
                          <span className="tab-link_label">San Jose</span>
                        </a>
                      </li>
                      <li className="tab-nav_item">
                        <a className="tab-link tab-link--nav">
                          <span className="tab-link_label">Los Angeles</span>
                        </a>
                      </li>
                      <li className="tab-nav_item">
                        <a className="tab-link tab-link--nav">
                          <span className="tab-link_label">Chicago</span>
                        </a>
                      </li>
                      <li className="tab-nav_item">
                        <a className="tab-link tab-link--nav">
                          <span className="tab-link_label">Palo Alto</span>
                        </a>
                      </li>
                      <li className="tab-nav_item">
                        <a className="tab-link tab-link--nav">
                          <span className="tab-link_label">Oakland</span>
                        </a>
                      </li>
                      <li className="tab-nav_item">
                        <a className="tab-link tab-link--nav">
                          <Icon
                            name="search-small"
                            size={18}
                            currentColor
                            tab
                          />
                          <span className="tab-link_label">More Cities</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="home-container_section">
                <h3 className="explore-city_title">Hot & New Businesses</h3>
                <div className="arrange arrange--3-units arrange--30 arrange--wrap">
                  <div className="arrange_unit">
                    <div className="card business-passport-card">
                      <Photo
                        type="card_photo"
                        src={bluestonelane}
                      />
                      <div className="card_body">
                        <div className="card_content">
                          <h3 className="card_content-title--linked u-text-truncate">
                            <div className="business-link-hovercard">
                              <span className="business-link-hovercard_business-link">
                                <a className="biz-name">
                                  <span>Bluestone Lane</span>
                                </a>
                              </span>
                            </div>
                          </h3>
                          <div className="biz-rating biz-rating-large clearfix">
                            <Stars rating="4.5"/>
                            <span className="review-count rating-qualifier">15 reviews</span>
                          </div>
                          <div className="price-category">
                            <span className="bullet-after">
                              <span className="business-attribute price-range">$$</span>
                            </span>
                            <span className="category-str-list">Coffee & Tea</span>
                          </div>
                          <div className="neighborhood u-text-truncate u-space-t1 u-space-b1">
                            <span className="neighborhood-str-list">Financial District, SoMa</span>
                          </div>
                          <p className="business-passport-card_date-opened">
                            <Icon
                              name="flame"
                              size={18}
                              currentColor
                            />
                            Opened 7 weeks ago
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="arrange_unit">
                    <div className="card business-passport-card">
                      <Photo
                        type="card_photo"
                        src={kaya}
                      />
                      <div className="card_body">
                        <div className="card_content">
                          <h3 className="card_content-title--linked u-text-truncate">
                            <div className="business-link-hovercard">
                              <span className="business-link-hovercard_business-link">
                                <a className="biz-name">
                                  <span>Kaya</span>
                                </a>
                              </span>
                            </div>
                          </h3>
                          <div className="biz-rating biz-rating-large clearfix">
                            <Stars rating="4.5"/>
                            <span className="review-count rating-qualifier">11 reviews</span>
                          </div>
                          <div className="price-category">
                            <span className="bullet-after">
                              <span className="business-attribute price-range">$$</span>
                            </span>
                            <span className="category-str-list">Caribbean</span>
                          </div>
                          <div className="neighborhood u-text-truncate u-space-t1 u-space-b1">
                            <span className="neighborhood-str-list">Civic Center</span>
                          </div>
                          <p className="business-passport-card_date-opened">
                            <Icon
                              name="flame"
                              size={18}
                              currentColor
                            />
                            Opened 2 weeks ago
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="arrange_unit">
                    <div className="card business-passport-card">
                      <Photo
                        type="card_photo"
                        src={pastapopup}
                      />
                      <div className="card_body">
                        <div className="card_content">
                          <h3 className="card_content-title--linked u-text-truncate">
                            <div className="business-link-hovercard">
                              <span className="business-link-hovercard_business-link">
                                <a className="biz-name">
                                  <span>Pasta Pop-Up</span>
                                </a>
                              </span>
                            </div>
                          </h3>
                          <div className="biz-rating biz-rating-large clearfix">
                            <Stars rating="4.5"/>
                            <span className="review-count rating-qualifier">32 reviews</span>
                          </div>
                          <div className="price-category">
                            <span className="bullet-after">
                              <span className="business-attribute price-range">$$</span>
                            </span>
                            <span className="category-str-list">Italian, Pop-Up Restaurants</span>
                          </div>
                          <div className="neighborhood u-text-truncate u-space-t1 u-space-b1">
                            <span className="neighborhood-str-list">North Beach/Telegraph Hill</span>
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
                  </div>
                </div>
                <div className="u-space-t2 u-text-centered">
                  <a className="explore-city_see-all">See more hot and new businesses</a>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* alpha and beta */}
        <div className="y-container">
          <div className="y-container_content">
            <div className="home-container">
              <div className="home-container_section">
                <div className="clearfix layout-block layout-a">
                  <div className="column column-alpha">
                    <div>
                      <h3 className="boy_title">
                        Review of the Day
                      </h3>
                      <div className="island island--light rotd">
                        <div className="ypassport arrange arrange--12 u-space-b3">
                          <div className="arrange_unit">
                            <Photo
                              type="avatar_60"
                              src={photo_ESeXb2NVPZzYonGbOJzoEw_60s}
                              title="Emily T."
                            />
                          </div>
                          <div className="arrange_unit arrange_unit--fill">
                            <strong>
                              <a className="user-display-name js-analytics-click">Emily T.</a>
                            </strong>
                            <ul className="user-passport-stats user-passport-stats--inline" >
                              <li className="friend-count" >
                                <Icon
                                  name="friends"
                                  size={18}
                                  count
                                />
                                <b>410</b>
                              </li>
                              <li className="review-count" >
                                <Icon
                                  name="review"
                                  size={18}
                                  count
                                />
                                <b>250</b>
                              </li>
                              <li className="is-elite responsive-small-display-inline-block" >
                                <a>Elite ’18</a>
                              </li>
                            </ul>
                            <div className="rotd_text" >
                              Wrote a review for
                              <div className="business-link-hovercard business-link-hovercard--inline business-link-hovercard--strong">
                                <span className="business-link-hovercard_business-link">
                                  <a className="biz-name">
                                    <span> Dynamo Donut & Coffee</span>
                                  </a>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="badge-banner badge-banner--blue">
                          Review of the Day
                          <img alt="badge" src={rotd} className="badge-banner_img" width="40" />
                        </div>
                        <div className="u-space-t3 u-space-b3">
                          <div className="biz-rating biz-rating-large clearfix">
                            <div>
                              <Stars rating="4.0"/>
                            </div>
                            <span className="rating-qualifier">11/5/2017</span>
                          </div>
                        </div>
                        <p className="rotd_comment-text">
                          Time // Tried to come here on a Saturday around 2pm. Lesson learned: Come early before noon if you want the good donuts! By the time my bf and I arrived, they only had a few donuts of one flavor....the maple bacon apple.  Service // You order first at this small coffee shop looking window, first and then you can go inside and sit down. The front cashier was friendly enough.  Atmosphere // bright interior with small t...
                          <a className="rotd_read-more">
                             &nbsp; Continue reading
                          </a>
                        </p>
                      </div>
                      <p className="u-text-centered">
                        <a className="boy_more-link">Read previous reviews</a>
                      </p>
                    </div>
                  </div>
                  <div className="column column-beta">
                    <div>
                      <h3 className="boy_title">Recent Lists</h3>
                      <div className="island fresh-list island--light list-island">
                        <div className="arrange arrange--30 arrange--equal">
                          <div className="arrange_unit">
                            <ul className="list-island_set">
                              <li className="list-island_item">
                                <div className="media-block media-block--12">
                                  <Photo
                                    type="avatar_media"
                                    src={HzFeDvDkWKsugW8ztN4lWg_90s}
                                  />
                                  <div className="media-story">
                                    <p className="list-island_item-title u-text-truncate media-title">
                                      <a>Not-Good-For-Retirement Stars</a>
                                    </p>
                                    <p className="list-island_item-description">
                                      Michelin restaurants In the order that I experienced them =)
                                    </p>
                                    <div className="list-island_item-owner">
                                      By
                                      <a className="user-display-name"> Annie Z.</a>
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li className="list-island_item">
                                <div className="media-block media-block--12">
                                  <Photo
                                    type="avatar_media"
                                    src={BR0mnDHZy3j3RI_hRAMBmg}
                                  />
                                  <div className="media-story">
                                    <p className="list-island_item-title u-text-truncate media-title">
                                      <a>2018 AudVentures</a>
                                    </p>
                                    <p className="list-island_item-description">
                                      Finally settling down and still ready to explore!  For all places visited in 2018
                                    </p>
                                    <div className="list-island_item-owner">
                                      By
                                      <a className="user-display-name"> Audrey H.</a>
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li className="list-island_item">
                                <div className="media-block media-block--12">
                                  <Photo
                                    type="avatar_media"
                                    src={yB8_l5v2e4Rs7rjgkm1WQ}
                                  />
                                  <div className="media-story">
                                    <p className="list-island_item-title u-text-truncate media-title">
                                      <a>My reviews for 2014</a>
                                    </p>
                                    <p className="list-island_item-description">
                                      Thanks to my fellow yelper, Andrew I, who is totally cool, he has inspired me to do a list of reviews for 2014.  It's the new year and a new start.
                                    </p>
                                    <div className="list-island_item-owner">
                                      By
                                      <a className="user-display-name"> Carol C.</a>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <p className="u-text-centered">
                        <a className="boy_more-link">Browse more lists</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* recent activity */}
              <div className="home-container_section home-container_section--top-long">
                <h2 className="activity-feed_title u-text-centered">Recent Activity</h2>
                <div className="u-space-t4">
                  <div className="arrange arrange--wrap arrange--3-units arrange--30">

                    {/* column a */}
                    <div className="arrange_unit">

                      <div className="activity-feed_item activity-feed_item--biz_photo activity-feed_item--first-load island island--light" >
                        <div className="feed-item_header">
                          <div className="arrange arrange--12">
                            <div className="arrange_unit">
                              <Photo
                                type="avatar_30"
                                src={photo_0os9VoR2evxRmqt2_Yx8Iw}
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
                                src={photo_EiZICTpAxWEmpvhDnduYdw}
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
                                src={photo_XJLvFmxlX5jdMfEyC4dG1g}
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
                                    src={photo_tSaWNHKlJc4iOuGjvCRMmQ}
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
                                    src={photo_KVUGoFs40Jt3OdI7vmFog}
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
                                    src={photo_yj7A_xSnsbbOsxwYzCDGvw}
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
                                src={photo_UDkFIThfOLMNO8iCnF0t8A}
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
                                    src={photo_dLinn6rjkWYrtnMDTvDisQ}
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
                                    src={C921ZGj4qJc_TDk92CM5FA}
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
                                    src={LV2NNGBzYm166mc8VQ}
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
                                src={Q1kaby1yAQEUWlsCP1c3Ow}
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
                            src={jsDmbW9Eaqgyc0Kbw4TUvg}
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
                                src={photo_UDkFIThfOLMNO8iCnF0t8A}
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
                                    src={photo_dLinn6rjkWYrtnMDTvDisQ}
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
                                    src={C921ZGj4qJc_TDk92CM5FA}
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
                                    src={LV2NNGBzYm166mc8VQ}
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
                                src={Q1kaby1yAQEUWlsCP1c3Ow}
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
                            src={jsDmbW9Eaqgyc0Kbw4TUvg}
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
                                src={photo_XJLvFmxlX5jdMfEyC4dG1g}
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
                                    src={photo_tSaWNHKlJc4iOuGjvCRMmQ}
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
                                    src={photo_KVUGoFs40Jt3OdI7vmFog}
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
                                    src={photo_yj7A_xSnsbbOsxwYzCDGvw}
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
                                src={Q1kaby1yAQEUWlsCP1c3Ow}
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
                            src={jsDmbW9Eaqgyc0Kbw4TUvg}
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
                                src={photo_XJLvFmxlX5jdMfEyC4dG1g}
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
                                    src={photo_tSaWNHKlJc4iOuGjvCRMmQ}
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
                                    src={photo_KVUGoFs40Jt3OdI7vmFog}
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
                                    src={photo_yj7A_xSnsbbOsxwYzCDGvw}
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
                  <p className="activity-feed_load-more">
                    <a>
                      <Icon
                        name="chevron-down"
                        size={24}
                        currentColor
                        half
                      />
                      <span>Show more activity in San Francisco</span>
                    </a>
                  </p>
                </div>
              </div>
              {/* mobile apps */}
              <div className="home-container_section home-container_section--top-long">
                <div className="u-text-centered">
                  <h2 className="u-space-b4">Yelp Mobile Apps</h2>
                  <div className="app-pitch">
                    <div className="arrange arrange--equal arrange--30">
                      <div className="arrange_unit">
                        <a className="island island-light app-pitch_item app-pitch_item--ios">
                          <h4>iPhone, iPad and
                            <Icon
                              name="apple"
                              size={18}
                              black
                            />
                            Watch</h4>
                            <img
                              src={ios}
                              width="264"
                              alt="iPhone"
                            />
                        </a>
                      </div>
                      <div className="arrange_unit">
                        <a className="island island-light app-pitch_item app-pitch_item--android">
                          <h4>Android</h4>
                          <img
                            src={android}
                            width="264"
                            alt="Android"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* footer */}
        <div className="main-content-wrap main-content-wrap--separated u-bg-color-alt">
          <div className="content-container">
            <div className="main-footer webview-hidden">
              <div className="main-footer_section main-footer_menu arrange arrange--equal arrange--30 arrange--stack-small u-sm-space-b0">
                <div className="main-footer_item arrange_unit">
                  <div className="footer-menu responsive-hidden-small">
                    <h3 className="footer-menu_header">About</h3>
                    <ul className="footer-menu_list">
                      <li className="footer-menu_item">
                        <a>About Yelp</a>
                      </li>
                      <li className="footer-menu_item">
                        <a>Careers</a>
                      </li>
                      <li className="footer-menu_item">
                        <a>Press</a>
                      </li>
                      <li className="footer-menu_item">
                        <a>Investor Relations</a>
                      </li>
                      <li className="footer-menu_item">
                        <a>Content Guidelines</a>
                      </li>
                      <li className="footer-menu_item">
                        <a>Terms of Service</a>
                      </li>
                      <li className="footer-menu_item">
                        <a>Privacy Policy</a>
                      </li>
                      <li className="footer-menu_item">
                        <a>Ad Choices</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="main-footer_item arrange_unit">
                  <div className="footer-menu responsive-hidden-small">
                    <h3 className="footer-menu_header">Discover</h3>
                    <ul className="footer-menu_list">
                      <li className="footer-menu_item">
                        <a>The Local Yelp</a>
                      </li>
                      <li className="footer-menu_item">
                        <a>Yelp Blog</a>
                      </li>
                      <li className="footer-menu_item">
                        <a>Support</a>
                      </li>
                      <li className="footer-menu_item">
                        <a>Yelp Mobile</a>
                      </li>
                      <li className="footer-menu_item">
                        <a>Developers</a>
                      </li>
                      <li className="footer-menu_item">
                        <a>RSS</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="main-footer_item arrange_unit">
                  <div className="footer-menu responsive-hidden-small">
                    <h3 className="footer-menu_header">Yelp for Business Owners</h3>
                    <ul className="footer-menu_list">
                      <li className="footer-menu_item">
                        <a>Claim your Business Page</a>
                      </li>
                      <li className="footer-menu_item">
                        <a>Advertise on Yelp</a>
                      </li>
                      <li className="footer-menu_item">
                        <a>Yelp Reservations</a>
                      </li>
                      <li className="footer-menu_item">
                        <a>Yelp WiFi</a>
                      </li>
                      <li className="footer-menu_item">
                        <a>Business Success Stories</a>
                      </li>
                      <li className="footer-menu_item">
                        <a>Business Support</a>
                      </li>
                      <li className="footer-menu_item">
                        <a>Yelp Blog for Business Owners</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="main-footer_item arrange_unit ">
                  <div className="footer-menu languages-menu">
                    <div className="footer-menu_section footer-language">
                      <h3 className="footer-menu_header responsive-hidden-small">Languages</h3>
                      <div>
                        <div className="dropdown dropdown--boxed-on-mobile dropdown--hover dropdown--restricted dropdown--separate-groups">
                          <div>
                            <a>
                              <span>English</span>
                              <Icon
                                name="triangle-down"
                                size={14}
                                currentColor
                                dropdown
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="footer-menu_section footer-country">
                      <h3 className="footer-menu_header responsive-hidden-small">Countries</h3>
                      <div>
                        <div className="dropdown js-dropdown dropdown--hover dropdown--boxed-on-mobile dropdown--restricted">
                          <div>
                            <a>
                              <span>United States</span>
                              <Icon
                                name="triangle-down"
                                size={14}
                                currentColor
                                dropdown
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="main-footer_city-landscape-img"></div>
              <small className="main-footer_copyright">
                Copyright © 2004–2018 Yelp Inc. Yelp,
                <Logo type="logo" />,&nbsp;
                <Logo type="burst" />&nbsp;
                and related marks are registered trademarks of Yelp.
              </small>
            </div>
          </div>
        </div>

      </Fragment>
    );
  }
}

export default App;
