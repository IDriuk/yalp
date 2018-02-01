import React, { Component, Fragment } from 'react';
import './App.css';

import movers from '../../images/movers.png';
import hotels from '../../images/hotels.png';
import dryclean from '../../images/dryclean.png';
import massage from '../../images/massage.png';

import bluestonelane from '../../images/bluestonelane.jpg';
import kaya from '../../images/kaya.jpg';
import pastapopup from '../../images/pastapopup.jpg';
import stars from '../../images/stars.png';
import rotd from '../../images/rotd.png';

import photo_ESeXb2NVPZzYonGbOJzoEw_60s from '../../images/photo_ESeXb2NVPZzYonGbOJzoEw_60s.jpg';
import HzFeDvDkWKsugW8ztN4lWg_90s from '../../images/HzFeDvDkWKsugW8ztN4lWg_90s.jpg';
import BR0mnDHZy3j3RI_hRAMBmg from '../../images/BR0mnDHZy3j3RI_hRAMBmg.jpg';
import yB8_l5v2e4Rs7rjgkm1WQ from '../../images/8yB8_l5v2e4Rs7rjgkm1WQ.jpg';

class App extends Component {
  render() {
    return (
      <Fragment>

        {/* homepage hero */}
        <div className="y-container homepage-hero">
          <div className="y-container_content">

            <div className="hero-header">
              <div className="arrange arrange--18">
                <div className="arrange_unit arrange_unit--fill">
                  <div className="hero-header_nav hero-header_nav--main nowrap">
                    <ul className="header-nav">
                      <li className="header-nav_item">
                        <a className="header-nav_link">Write a Review</a>
                      </li>
                      <li className="header-nav_item">
                        <a className="header-nav_link">Events</a>
                      </li>
                      <li className="header-nav_item">
                        <a className="header-nav_link">Talk</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="arrange_unit nowrap">
                  <ul className="header-nav hero-header_nav main-header_account">
                    <li className="header-nav_item u-space-r2">
                      <a className="header-nav_link header-nav_link--log-in">Log In</a>
                    </li>
                    <li className="header-nav_item u-space-r0">
                      <a className="ybtn ybtn--primary header-nav_button nowrap">Sign Up</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="homepage-hero_inner">
              <div className="u-text-centered">
                <h1 className="homepage-hero_logo">
                  <a href="/">Yalp</a>
                </h1>
              </div>

              <form className="business-search-form main-search yform u-space-b0">
                <div className="arrange arrange--equal arrange--stack-small">
                  <div className="arrange_unit">
                    <div className="main-search_suggestions-field search-field-container find-decorator">
                      <label className="pseudo-input business-search-form_input business-search-form_input--find">
                        <div className="pseudo-input_wrapper">
                          <span className="pseudo-input_text business-search-form_input-text">Find</span>
                          <span className="pseudo-input_field-holder">
                            <input
                              className="pseudo-input_field business-search-form_input-field"
                              placeholder="burgers, barbers, spas, handymen…"
                              style={{
                                display: 'inline-block',
                                background: 'transparent none repeat scroll 0% 0%',
                                position: 'relative',
                                width: '100%',
                                boxSizing: 'border-box'
                              }}
                            />
                          </span>
                        </div>
                      </label>
                    </div>
                  </div>

                  <div className="arrange_unit">
                    <div className="arrange">
                      <div className="arrange_unit arrange_unit--fill">
                        <div className="main-search_suggestions-field search-field-container near-decorator">
                          <label className="pseudo-input business-search-form_input business-search-form_input--near" >
                            <div className="pseudo-input_wrapper">
                              <span className="pseudo-input_text business-search-form_input-text">Near</span>
                              <span className="pseudo-input_field-holder">
                                <input
                                  className="pseudo-input_field business-search-form_input-field"
                                  placeholder="address, neighborhood, city, state or zip"
                                />
                              </span>
                            </div>
                          </label>
                        </div>
                      </div>

                      <div className="arrange_unit">
                        <button className="ybtn ybtn--primary ybtn--small business-search-form_button">
                          <span className="main-search_action-icon-wrap">
                            <span className="icon icon--24-search icon--size-24 icon--currentColor"
                              style={{
                                width: '24px',
                                height: '24px'
                              }}
                              >
                                <svg id="24x24_search" height="100%" viewBox="0 0 24 24" width="100%">
                                  <path d="M20.753 19.34l-4.295-4.297A7.46 7.46 0 0 0 18 10.5a7.5 7.5 0 1 0-7.5 7.5 7.46 7.46 0 0 0 4.543-1.542l4.296 4.295a1 1 0 1 0 1.412-1.414zM10.5 16A5.506 5.506 0 0 1 5 10.5C5 7.467 7.467 5 10.5 5S16 7.467 16 10.5 13.533 16 10.5 16z">
                                  </path>
                                </svg>
                            </span>
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>

              <ul className="homepage-hero_categories text-centered">
                <li className="homepage-hero_category">
                  <div>
                    <span
                      className="icon icon--18-food icon--size-18 icon--inverse icon--fallback-inverted"
                      style={{
                        width: '18px',
                        height: '18px'
                      }}
                      >
                      <svg id="18x18_food" height="100%" viewBox="0 0 18 18" width="100%">
                        <path d="M13.61 17h-.007a1.39 1.39 0 0 1-1.376-1.587L13 10l-2-1c0-5.373 1.375-8 3.25-8 .497 0 .75.336.75.75v13.86A1.39 1.39 0 0 1 13.61 17zM6.557 9.912l.35 5.59a1.41 1.41 0 1 1-2.813 0l.35-5.59A1.994 1.994 0 0 1 3 8V1.5a.5.5 0 0 1 1 0v5a.5.5 0 0 0 1 0v-5a.5.5 0 0 1 1 0v5a.5.5 0 0 0 1 0v-5a.5.5 0 0 1 1 0V8c0 .91-.61 1.67-1.443 1.912z">
                        </path>
                      </svg>
                    </span>
                    <a className="homepage-hero_link">Restaurants</a>
                  </div>
                </li>
                <li className="homepage-hero_category">
                  <div>
                    <span
                      className="icon icon--18-nightlife icon--size-18 icon--inverse icon--fallback-inverted"
                      style={{
                        width: '18px',
                        height: '18px'
                      }}
                      >
                      <svg id="18x18_nightlife" height="100%" viewBox="0 0 18 18" width="100%">
                        <path d="M15.55 3.66c.565-.648.105-1.66-.754-1.66H3.204a1 1 0 0 0-.753 1.66L8 9v5H6a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2h-2V9l5.55-5.34zM11 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2z">
                        </path>
                      </svg>
                    </span>
                    <a className="homepage-hero_link">Nightlife</a>
                  </div>
                </li>
                <li className="homepage-hero_category">
                  <div>
                    <span
                      className="icon icon--18-tools icon--size-18 icon--inverse icon--fallback-inverted"
                      style={{
                        width: '18px',
                        height: '18px'
                      }}
                      >
                      <svg id="18x18_tools" height="100%" viewBox="0 0 18 18" width="100%">
                        <path d="M12.772 8.594c-.337 0-.656-.067-.962-.164l-6.99 7.116a1.472 1.472 0 0 1-2.11 0 1.538 1.538 0 0 1 0-2.15L9.697 6.28a3.34 3.34 0 0 1-.16-.98c0-1.82 1.447-3.294 3.234-3.294.338 0 .657.068.963.165L11.93 4.01l2.11 2.15 1.806-1.837c.095.312.162.637.162.98 0 1.82-1.45 3.294-3.236 3.294zM4.955 6.198L3.54 5.21 1.998 3.64l1.565-1.59 1.54 1.57.905 1.508L7.71 6.86 6.658 7.932 4.955 6.198zm10.006 7.198a1.54 1.54 0 0 1 0 2.15 1.475 1.475 0 0 1-2.11 0l-3.314-3.374 2.11-2.15 3.316 3.374z"></path>
                      </svg>
                    </span>
                    <a className="homepage-hero_link">Home Services</a>
                  </div>
                </li>
                <li className="homepage-hero_category">
                  <div>
                    <span
                      className="icon icon--18-order icon--size-18 icon--inverse icon--fallback-inverted"
                      style={{
                        width: '18px',
                        height: '18px'
                      }}
                      >
                      <svg
                        className="icon_svg"
                        id="18x18_order" height="100%" viewBox="0 0 18 18" width="100%">
                        <g>
                          <path d="M4 4V3h3v1H4m4-2H3v2H2a1 1 0 0 0-1 1v7h9V5a1 1 0 0 0-1-1H8V2" opacity=".502"></path>
                          <path d="M17 10.93L15 9.5V4h-5v8H7.49a2.49 2.49 0 0 0-1.99-1 2.49 2.49 0 0 0-1.99 1H1v2h2.05a2.502 2.502 0 0 0 4.9 0h3.1a2.5 2.5 0 0 0 4.9 0H17v-3.07zM5.5 14.75a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zM12 6h1v3h-1V6zm1.5 8.75a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5z"></path>
                        </g>
                      </svg>
                    </span>
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
                      <a className="browse-businesses_category island island-light browse-businesses_category--full-width-island">
                        <img
                          className="browse-businesses_category-img"
                          src={movers}
                          alt="Movers"
                        />
                        <h3 className="browse-businesses_category-title u-text-truncate h4">Movers</h3>
                      </a>
                    </div>
                    <div className="arrange_unit">
                      <a className="browse-businesses_category island island-light browse-businesses_category--full-width-island">
                        <img
                          className="browse-businesses_category-img"
                          src={hotels}
                          alt="Hotels"
                        />
                        <h3 className="browse-businesses_category-title u-text-truncate h4">Hotels</h3>
                      </a>
                    </div>
                    <div className="arrange_unit">
                      <a className="browse-businesses_category island island-light browse-businesses_category--full-width-island">
                        <img
                          className="browse-businesses_category-img"
                          src={dryclean}
                          alt="Dry Cleaning"
                        />
                        <h3 className="browse-businesses_category-title u-text-truncate h4">Dry Cleaning</h3>
                      </a>
                    </div>
                    <div className="arrange_unit">
                      <a className="browse-businesses_category island island-light browse-businesses_category--full-width-island">
                        <img
                          className="browse-businesses_category-img"
                          src={massage}
                          alt="Massage"
                        />
                        <h3 className="browse-businesses_category-title u-text-truncate h4">Massage</h3>
                      </a>
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
                          <span
                            className="icon icon--18-search-small icon--currentColor icon--size-18 tab-link_icon tab-link_icon-wrap"
                            style={{width: 18, height: 18}}
                          >
                            <svg className="icon_svg" id="18x18_search_small" height="100%" viewBox="0 0 18 18" width="100%">
                              <path d="M15.913 14.224a1.324 1.324 0 0 0-.3-.466h.01l-3.378-3.376a5.49 5.49 0 0 0 .802-2.857 5.523 5.523 0 1 0-5.522 5.52 5.49 5.49 0 0 0 2.856-.8l3.37 3.368.006.003a1.364 1.364 0 0 0 .93.384C15.41 16 16 15.41 16 14.684c0-.163-.032-.317-.086-.46zM7.525 10.94a3.422 3.422 0 0 1-3.418-3.416 3.422 3.422 0 0 1 3.418-3.417 3.422 3.422 0 0 1 3.416 3.417 3.42 3.42 0 0 1-3.413 3.416z"></path>
                            </svg>
                          </span>
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
                      <div className="card_photo">
                        <div
                          className="photo-box photo-box--interactive photo-box--background"
                          style={{backgroundImage: `url(${bluestonelane})`}}
                        >
                          <a className="photo-box_link">
                            <img
                              className="photo-box-img"
                              alt="Bluestone Lane"
                              height="400"
                              width="600"
                              src={bluestonelane}
                            />
                          </a>
                        </div>
                      </div>
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
                            <div className="i-stars i-stars--regular-4-half rating-large">
                              <img className="offscreen" height="303" src={stars} width="84" alt="4.5 star rating" />
                            </div>
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
                            <span
                              className="icon icon--18-flame icon--size-18 icon--currentColor"
                              style={{
                                width: 18,
                                height: 18
                              }}
                            >
                              <svg className="icon_svg" id="18x18_flame" height="100%" viewBox="0 0 18 18" width="100%">
                                <path d="M11.508 3.743c1.173 2.43-.465 2.27-.696 3.88C10.082 2.758 5.947 1.5 5.947 1.5c2.045 2.697-1.9 4.784-3.63 8.33-1.47 3.016 2.533 5.44 4.67 6.67-2.15-2.993-.563-5.02 1.612-6.793-.81 2.448.5 2.934 1.043 3.944.71-.31 1.028-1.3 1.1-1.79.954 1.31 1.465 2.97-.248 4.64 8.302-3.77 5.977-9.743 1.007-12.752z"></path>
                              </svg>
                            </span>
                            Opened 7 weeks ago
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="arrange_unit">
                    <div className="card business-passport-card">
                      <div className="card_photo">
                        <div className="photo-box photo-box--interactive photo-box--background" style={{backgroundImage: `url(${kaya})`}} >
                          <a className="photo-box_link">
                            <img
                              className="photo-box-img"
                              alt="Kaya"
                              height="400"
                              width="600"
                              src={kaya}
                            />
                          </a>
                        </div>
                      </div>
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
                            <div className="i-stars i-stars--regular-4-half rating-large">
                              <img className="offscreen" height="303" src={stars} width="84" alt="4.5 star rating" />
                            </div>
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
                            <span
                              className="icon icon--18-flame icon--size-18 icon--currentColor"
                              style={{
                                width: 18,
                                height: 18
                              }}
                            >
                              <svg className="icon_svg" id="18x18_flame" height="100%" viewBox="0 0 18 18" width="100%">
                                <path d="M11.508 3.743c1.173 2.43-.465 2.27-.696 3.88C10.082 2.758 5.947 1.5 5.947 1.5c2.045 2.697-1.9 4.784-3.63 8.33-1.47 3.016 2.533 5.44 4.67 6.67-2.15-2.993-.563-5.02 1.612-6.793-.81 2.448.5 2.934 1.043 3.944.71-.31 1.028-1.3 1.1-1.79.954 1.31 1.465 2.97-.248 4.64 8.302-3.77 5.977-9.743 1.007-12.752z"></path>
                              </svg>
                            </span>
                            Opened 2 weeks ago
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="arrange_unit">
                    <div className="card business-passport-card">
                      <div className="card_photo">
                        <div
                          className="photo-box photo-box--interactive photo-box--background"
                          style={{backgroundImage: `url(${pastapopup})`}}
                        >
                          <a className="photo-box_link">
                            <img
                              className="photo-box-img"
                              alt="Pasta Pop-Up"
                              height="400"
                              width="600"
                              src={pastapopup}
                            />
                          </a>
                        </div>
                      </div>
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
                            <div className="i-stars i-stars--regular-4-half rating-large">
                              <img className="offscreen" height="303" src={stars} width="84" alt="4.5 star rating" />
                            </div>
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
                            <span
                              className="icon icon--18-flame icon--size-18 icon--currentColor"
                              style={{
                                width: 18,
                                height: 18
                              }}
                            >
                              <svg className="icon_svg" id="18x18_flame" height="100%" viewBox="0 0 18 18" width="100%">
                                <path d="M11.508 3.743c1.173 2.43-.465 2.27-.696 3.88C10.082 2.758 5.947 1.5 5.947 1.5c2.045 2.697-1.9 4.784-3.63 8.33-1.47 3.016 2.533 5.44 4.67 6.67-2.15-2.993-.563-5.02 1.612-6.793-.81 2.448.5 2.934 1.043 3.944.71-.31 1.028-1.3 1.1-1.79.954 1.31 1.465 2.97-.248 4.64 8.302-3.77 5.977-9.743 1.007-12.752z"></path>
                              </svg>
                            </span>
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
                            <div className="photo-box pb-60s">
                              <a>
                                <img alt="Emily T." className="photo-box-img" height="60" width="60" src={photo_ESeXb2NVPZzYonGbOJzoEw_60s} />
                              </a>
                            </div>
                          </div>
                          <div className="arrange_unit arrange_unit--fill">
                            <strong>
                              <a className="user-display-name js-analytics-click">Emily T.</a>
                            </strong>
                            <ul className="user-passport-stats user-passport-stats--inline" >
                              <li className="friend-count" >
                                <span
                                  style={{fill: '#f15c00', width: 18, height: 18}}
                                  className="icon icon--18-friends icon--size-18">
                                    <svg className="icon_svg" id="18x18_friends" height="100%" viewBox="0 0 18 18" width="100%">
                                      <g>
                                        <path d="M7.904 9.43l-2.098 4.697a.9.9 0 0 1-1.612 0L2.096 9.43a.902.902 0 0 1 .806-1.305h4.196c.67 0 1.105.705.806 1.305zM5 7.375a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"></path>
                                        <path d="M15.904 9.43l-2.098 4.697a.89.89 0 0 1-.806.498.89.89 0 0 1-.806-.498L10.096 9.43a.902.902 0 0 1 .806-1.305h4.195c.67 0 1.106.705.807 1.305zM13 7.375a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" opacity=".502"></path>
                                      </g>
                                    </svg>
                                  </span>
                                <b>410</b>
                              </li>
                              <li className="review-count" >
                                <span
                                  className="icon icon--18-review icon--size-18"
                                  style={{fill: '#f15c00', width: 18, height: 18}} >
                                    <svg className="icon_svg" id="18x18_review" height="100%" viewBox="0 0 18 18" width="100%">
                                      <path d="M13 3H5c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1.505 9.643l-2.526-1.55L6.526 12.7 7 9.934 5 7.977l2.766-.404L8.97 4.7l1.264 2.873L13 7.977l-2 1.957.495 2.71z"></path>
                                    </svg>
                                  </span>
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
                          <img
                            alt="badge"
                            src={rotd}
                            className="badge-banner_img"
                            width="40"
                          />
                        </div>
                        <div className="u-space-t3 u-space-b3">
                          <div className="biz-rating biz-rating-large clearfix">
                            <div>
                              <div className="i-stars i-stars--regular-4 rating-large">
                                <img className="offscreen" height="303" width="84" alt="4.0 star rating" src={stars} />
                              </div>
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
                                  <div className="media-avatar">
                                    <div className="list-island_item-avatar">
                                      <div style={{backgroundImage: `url(${HzFeDvDkWKsugW8ztN4lWg_90s})`}} className="photo-box photo-box--interactive photo-box--background">
                                        <a className="photo-box_link">
                                          <img
                                            alt="img"
                                            className="photo-box-img"
                                            height="90"
                                            width="90"
                                            src={HzFeDvDkWKsugW8ztN4lWg_90s}
                                          />
                                        </a>
                                      </div>
                                    </div>
                                  </div>
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
                                  <div className="media-avatar">
                                    <div className="list-island_item-avatar">
                                      <div style={{backgroundImage: `url(${BR0mnDHZy3j3RI_hRAMBmg})`}} className="photo-box photo-box--interactive photo-box--background">
                                        <a className="photo-box_link">
                                          <img
                                            alt="img"
                                            className="photo-box-img"
                                            height="90"
                                            width="90"
                                            src={BR0mnDHZy3j3RI_hRAMBmg}
                                          />
                                        </a>
                                      </div>
                                    </div>
                                  </div>
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
                                  <div className="media-avatar">
                                    <div className="list-island_item-avatar">
                                      <div style={{backgroundImage: `url(${yB8_l5v2e4Rs7rjgkm1WQ})`}} className="photo-box photo-box--interactive photo-box--background">
                                        <a className="photo-box_link">
                                          <img
                                            alt="img"
                                            className="photo-box-img"
                                            height="90"
                                            width="90"
                                            src={yB8_l5v2e4Rs7rjgkm1WQ}
                                          />
                                        </a>
                                      </div>
                                    </div>
                                  </div>
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
                              <div className="photo-box pb-30s">
                                <a>
                                  <img
                                    alt="alt"
                                    className="photo-box-img"
                                    height="30"
                                    width="30"
                                    src="https://s3-media1.fl.yelpcdn.com/photo/0os9VoR2evxRmqt2_Yx8Iw/30s.jpg"
                                  />
                                </a>
                              </div>
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
                              <div style={{backgrounImage: "url(https://s3-media4.fl.yelpcdn.com/bphoto/EiZICTpAxWEmpvhDnduYdw/300s.jpg)"}} className="feed-item_photo feed-item_photo--with-actions">
                                <a className="feed-item_link ">
                                  <img
                                    alt="New item! Greenpan diamond Evershine!! Quality!"
                                    src="https://s3-media4.fl.yelpcdn.com/bphoto/EiZICTpAxWEmpvhDnduYdw/300s.jpg"
                                    width="300"
                                    height="300"
                                  />
                                </a>
                              </div>
                              <ul className="feed-item_actions feed-item_actions--contained-borderless">
                                <li className="feed-item_action">
                                  <a className="feed-item_action-link">
                                    <span className="show-tooltip">
                                      <span>
                                        <span className="icon icon--24-like-outline icon--size-24 icon--currentColor icon--hover-linked u-space-r-half">
                                          <svg className="icon_svg" id="24x24_like_outline" height="100%" viewBox="0 0 24 24" width="100%">
                                            <path d="M21.164 12.236c.05.164.086.334.086.514 0 .66-.37 1.23-.91 1.527.1.22.16.464.16.723 0 .66-.37 1.23-.91 1.527.1.22.16.464.16.723A1.75 1.75 0 0 1 18 19H7v-9h1c.37 0 1.257-2.37 2.104-3.345.89-1.017 1.234-1.782 1.457-2.513C11.785 3.412 12 2 12 2s2.388.11 2.388 2.9c0 1.39-.758 3.1-.388 4.1h6.25c.966 0 1.75.784 1.75 1.75 0 .63-.336 1.178-.836 1.486zM20.25 10h-6.946l-.242-.653c-.316-.855-.11-1.862.09-2.835.117-.56.236-1.14.236-1.61 0-.844-.283-1.314-.608-1.577-.076.387-.168.797-.262 1.107-.228.748-.604 1.673-1.66 2.88-.336.386-.744 1.166-1.072 1.794C9.146 10.326 8.796 11 8 11v7h10a.75.75 0 0 0 .75-.75.75.75 0 0 0-.07-.308l-.385-.843.812-.45A.74.74 0 0 0 19.5 15a.75.75 0 0 0-.07-.308l-.385-.843.812-.45a.74.74 0 0 0 .393-.65.793.793 0 0 0-.04-.22l-.23-.74.66-.406A.746.746 0 0 0 20.25 10zM2 10h4v10H2V10z"></path>
                                          </svg>
                                        </span>
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
                              <div className="photo-box pb-30s">
                                <a>
                                  <img
                                    alt="alt"
                                    className="photo-box-img"
                                    height="30"
                                    width="30"
                                    src="https://s3-media1.fl.yelpcdn.com/photo/XJLvFmxlX5jdMfEyC4dG1g/30s.jpg"
                                  />
                                </a>
                              </div>
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
                                  <div style={{backgrounImage: "url(https://s3-media2.fl.yelpcdn.com/bphoto/tSaWNHKlJc4iOuGjvCRMmQ/300s.jpg)"}} className="feed-item_photo feed-item_photo--big feed-item_photo--with-actions">
                                    <a className="feed-item_link">
                                      <img
                                        alt="Filet"
                                        src="https://s3-media2.fl.yelpcdn.com/bphoto/tSaWNHKlJc4iOuGjvCRMmQ/300s.jpg"
                                        width="300"
                                        height="300"
                                      />
                                    </a>
                                  </div>
                                  <ul className="feed-item_actions feed-item_actions--contained">
                                    <li className="feed-item_action">
                                      <a className="feed-item_action-link">
                                        <span>
                                          <span>
                                            <span style={{width: "24", height: "24"}} className="icon icon--24-like-outline icon--size-24 icon--currentColor icon--hover-linked u-space-r-half">
                                              <svg className="icon_svg" id="24x24_like_outline" height="100%" viewBox="0 0 24 24" width="100%">
                                                <path d="M21.164 12.236c.05.164.086.334.086.514 0 .66-.37 1.23-.91 1.527.1.22.16.464.16.723 0 .66-.37 1.23-.91 1.527.1.22.16.464.16.723A1.75 1.75 0 0 1 18 19H7v-9h1c.37 0 1.257-2.37 2.104-3.345.89-1.017 1.234-1.782 1.457-2.513C11.785 3.412 12 2 12 2s2.388.11 2.388 2.9c0 1.39-.758 3.1-.388 4.1h6.25c.966 0 1.75.784 1.75 1.75 0 .63-.336 1.178-.836 1.486zM20.25 10h-6.946l-.242-.653c-.316-.855-.11-1.862.09-2.835.117-.56.236-1.14.236-1.61 0-.844-.283-1.314-.608-1.577-.076.387-.168.797-.262 1.107-.228.748-.604 1.673-1.66 2.88-.336.386-.744 1.166-1.072 1.794C9.146 10.326 8.796 11 8 11v7h10a.75.75 0 0 0 .75-.75.75.75 0 0 0-.07-.308l-.385-.843.812-.45A.74.74 0 0 0 19.5 15a.75.75 0 0 0-.07-.308l-.385-.843.812-.45a.74.74 0 0 0 .393-.65.793.793 0 0 0-.04-.22l-.23-.74.66-.406A.746.746 0 0 0 20.25 10zM2 10h4v10H2V10z"></path>
                                              </svg>
                                            </span>
                                            <span>Like</span>
                                          </span>
                                        </span>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="arrange_unit">
                                  <div className="feed-item_photo feed-item_photo--with-actions" style={{backgroundImage: "url(https://s3-media2.fl.yelpcdn.com/bphoto/KVUGoFs40Jt3OdI7vmF-og/168s.jpg)"}}>
                                    <a className="feed-item_link">
                                      <image
                                        alt="T-bone"
                                        src="https://s3-media2.fl.yelpcdn.com/bphoto/KVUGoFs40Jt3OdI7vmF-og/168s.jpg"
                                        height="168"
                                        width="168"
                                      />
                                    </a>
                                  </div>
                                  <ul className="feed-item_actions feed-item_actions--contained">
                                    <li className="feed-item_action">
                                      <a className="feed-item_action-link">
                                        <span>
                                          <span>
                                            <span style={{width: "24", height: "24"}} className="icon icon--24-like-outline icon--size-24 icon--currentColor icon--hover-linked u-space-r-half">
                                              <svg className="icon_svg" id="24x24_like_outline" height="100%" viewBox="0 0 24 24" width="100%">
                                                <path d="M21.164 12.236c.05.164.086.334.086.514 0 .66-.37 1.23-.91 1.527.1.22.16.464.16.723 0 .66-.37 1.23-.91 1.527.1.22.16.464.16.723A1.75 1.75 0 0 1 18 19H7v-9h1c.37 0 1.257-2.37 2.104-3.345.89-1.017 1.234-1.782 1.457-2.513C11.785 3.412 12 2 12 2s2.388.11 2.388 2.9c0 1.39-.758 3.1-.388 4.1h6.25c.966 0 1.75.784 1.75 1.75 0 .63-.336 1.178-.836 1.486zM20.25 10h-6.946l-.242-.653c-.316-.855-.11-1.862.09-2.835.117-.56.236-1.14.236-1.61 0-.844-.283-1.314-.608-1.577-.076.387-.168.797-.262 1.107-.228.748-.604 1.673-1.66 2.88-.336.386-.744 1.166-1.072 1.794C9.146 10.326 8.796 11 8 11v7h10a.75.75 0 0 0 .75-.75.75.75 0 0 0-.07-.308l-.385-.843.812-.45A.74.74 0 0 0 19.5 15a.75.75 0 0 0-.07-.308l-.385-.843.812-.45a.74.74 0 0 0 .393-.65.793.793 0 0 0-.04-.22l-.23-.74.66-.406A.746.746 0 0 0 20.25 10zM2 10h4v10H2V10z"></path>
                                              </svg>
                                            </span>
                                            <span>Like</span>
                                          </span>
                                        </span>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="arrange_unit">
                                  <div className="feed-item_photo feed-item_photo--with-actions" style={{backgroundImage: "url(https://s3-media3.fl.yelpcdn.com/bphoto/yj7A_xSnsbbOsxwYzCDGvw/168s.jpg)"}}>
                                    <a className="feed-item_link">
                                      <image
                                        alt="T-bone"
                                        src="https://s3-media3.fl.yelpcdn.com/bphoto/yj7A_xSnsbbOsxwYzCDGvw/168s.jpg"
                                        height="168"
                                        width="168"
                                      />
                                    </a>
                                  </div>
                                  <ul className="feed-item_actions feed-item_actions--contained">
                                    <li className="feed-item_action">
                                      <a className="feed-item_action-link">
                                        <span>
                                          <span>
                                            <span style={{width: "24", height: "24"}} className="icon icon--24-like-outline icon--size-24 icon--currentColor icon--hover-linked u-space-r-half">
                                              <svg className="icon_svg" id="24x24_like_outline" height="100%" viewBox="0 0 24 24" width="100%">
                                                <path d="M21.164 12.236c.05.164.086.334.086.514 0 .66-.37 1.23-.91 1.527.1.22.16.464.16.723 0 .66-.37 1.23-.91 1.527.1.22.16.464.16.723A1.75 1.75 0 0 1 18 19H7v-9h1c.37 0 1.257-2.37 2.104-3.345.89-1.017 1.234-1.782 1.457-2.513C11.785 3.412 12 2 12 2s2.388.11 2.388 2.9c0 1.39-.758 3.1-.388 4.1h6.25c.966 0 1.75.784 1.75 1.75 0 .63-.336 1.178-.836 1.486zM20.25 10h-6.946l-.242-.653c-.316-.855-.11-1.862.09-2.835.117-.56.236-1.14.236-1.61 0-.844-.283-1.314-.608-1.577-.076.387-.168.797-.262 1.107-.228.748-.604 1.673-1.66 2.88-.336.386-.744 1.166-1.072 1.794C9.146 10.326 8.796 11 8 11v7h10a.75.75 0 0 0 .75-.75.75.75 0 0 0-.07-.308l-.385-.843.812-.45A.74.74 0 0 0 19.5 15a.75.75 0 0 0-.07-.308l-.385-.843.812-.45a.74.74 0 0 0 .393-.65.793.793 0 0 0-.04-.22l-.23-.74.66-.406A.746.746 0 0 0 20.25 10zM2 10h4v10H2V10z"></path>
                                              </svg>
                                            </span>
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
                              <div className="photo-box pb-30s">
                                <a>
                                  <img
                                    alt="alt"
                                    className="photo-box-img"
                                    height="30"
                                    width="30"
                                    src="https://s3-media1.fl.yelpcdn.com/photo/UDkFIThfOLMNO8iCnF0t8A/30s.jpg"
                                  />
                                </a>
                              </div>
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
                                  <div style={{backgrounImage: "url(https://s3-media2.fl.yelpcdn.com/bphoto/dLinn6rjkWYrtnMDTvDisQ/300s.jpg)"}} className="feed-item_photo feed-item_photo--big feed-item_photo--with-actions">
                                    <a className="feed-item_link">
                                      <img
                                        alt="Filet"
                                        src="https://s3-media2.fl.yelpcdn.com/bphoto/dLinn6rjkWYrtnMDTvDisQ/300s.jpg"
                                        width="300"
                                        height="300"
                                      />
                                    </a>
                                  </div>
                                  <ul className="feed-item_actions feed-item_actions--contained">
                                    <li className="feed-item_action">
                                      <a className="feed-item_action-link">
                                        <span>
                                          <span>
                                            <span style={{width: "24", height: "24"}} className="icon icon--24-like-outline icon--size-24 icon--currentColor icon--hover-linked u-space-r-half">
                                              <svg className="icon_svg" id="24x24_like_outline" height="100%" viewBox="0 0 24 24" width="100%">
                                                <path d="M21.164 12.236c.05.164.086.334.086.514 0 .66-.37 1.23-.91 1.527.1.22.16.464.16.723 0 .66-.37 1.23-.91 1.527.1.22.16.464.16.723A1.75 1.75 0 0 1 18 19H7v-9h1c.37 0 1.257-2.37 2.104-3.345.89-1.017 1.234-1.782 1.457-2.513C11.785 3.412 12 2 12 2s2.388.11 2.388 2.9c0 1.39-.758 3.1-.388 4.1h6.25c.966 0 1.75.784 1.75 1.75 0 .63-.336 1.178-.836 1.486zM20.25 10h-6.946l-.242-.653c-.316-.855-.11-1.862.09-2.835.117-.56.236-1.14.236-1.61 0-.844-.283-1.314-.608-1.577-.076.387-.168.797-.262 1.107-.228.748-.604 1.673-1.66 2.88-.336.386-.744 1.166-1.072 1.794C9.146 10.326 8.796 11 8 11v7h10a.75.75 0 0 0 .75-.75.75.75 0 0 0-.07-.308l-.385-.843.812-.45A.74.74 0 0 0 19.5 15a.75.75 0 0 0-.07-.308l-.385-.843.812-.45a.74.74 0 0 0 .393-.65.793.793 0 0 0-.04-.22l-.23-.74.66-.406A.746.746 0 0 0 20.25 10zM2 10h4v10H2V10z"></path>
                                              </svg>
                                            </span>
                                            <span>1 Like</span>
                                          </span>
                                        </span>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="arrange_unit">
                                  <div className="feed-item_photo feed-item_photo--with-actions" style={{backgroundImage: "url(https://s3-media1.fl.yelpcdn.com/bphoto/C921ZGj4qJc_TDk92CM5FA/168s.jpg)"}}>
                                    <a className="feed-item_link">
                                      <image
                                        alt="T-bone"
                                        src="https://s3-media1.fl.yelpcdn.com/bphoto/C921ZGj4qJc_TDk92CM5FA/168s.jpg"
                                        height="168"
                                        width="168"
                                      />
                                    </a>
                                  </div>
                                  <ul className="feed-item_actions feed-item_actions--contained">
                                    <li className="feed-item_action">
                                      <a className="feed-item_action-link">
                                        <span>
                                          <span>
                                            <span style={{width: "24", height: "24"}} className="icon icon--24-like-outline icon--size-24 icon--currentColor icon--hover-linked u-space-r-half">
                                              <svg className="icon_svg" id="24x24_like_outline" height="100%" viewBox="0 0 24 24" width="100%">
                                                <path d="M21.164 12.236c.05.164.086.334.086.514 0 .66-.37 1.23-.91 1.527.1.22.16.464.16.723 0 .66-.37 1.23-.91 1.527.1.22.16.464.16.723A1.75 1.75 0 0 1 18 19H7v-9h1c.37 0 1.257-2.37 2.104-3.345.89-1.017 1.234-1.782 1.457-2.513C11.785 3.412 12 2 12 2s2.388.11 2.388 2.9c0 1.39-.758 3.1-.388 4.1h6.25c.966 0 1.75.784 1.75 1.75 0 .63-.336 1.178-.836 1.486zM20.25 10h-6.946l-.242-.653c-.316-.855-.11-1.862.09-2.835.117-.56.236-1.14.236-1.61 0-.844-.283-1.314-.608-1.577-.076.387-.168.797-.262 1.107-.228.748-.604 1.673-1.66 2.88-.336.386-.744 1.166-1.072 1.794C9.146 10.326 8.796 11 8 11v7h10a.75.75 0 0 0 .75-.75.75.75 0 0 0-.07-.308l-.385-.843.812-.45A.74.74 0 0 0 19.5 15a.75.75 0 0 0-.07-.308l-.385-.843.812-.45a.74.74 0 0 0 .393-.65.793.793 0 0 0-.04-.22l-.23-.74.66-.406A.746.746 0 0 0 20.25 10zM2 10h4v10H2V10z"></path>
                                              </svg>
                                            </span>
                                            <span>1 Like</span>
                                          </span>
                                        </span>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="arrange_unit">
                                  <div className="feed-item_photo feed-item_photo--with-actions" style={{backgroundImage: "url(https://s3-media4.fl.yelpcdn.com/bphoto/ZB-7LV2NNGBzYm166mc8VQ/168s.jpg)"}}>
                                    <a className="feed-item_link">
                                      <image
                                        alt="T-bone"
                                        src="https://s3-media4.fl.yelpcdn.com/bphoto/ZB-7LV2NNGBzYm166mc8VQ/168s.jpg"
                                        height="168"
                                        width="168"
                                      />
                                    </a>
                                  </div>
                                  <ul className="feed-item_actions feed-item_actions--contained">
                                    <li className="feed-item_action">
                                      <a className="feed-item_action-link">
                                        <span>
                                          <span>
                                            <span style={{width: "24", height: "24"}} className="icon icon--24-like-outline icon--size-24 icon--currentColor icon--hover-linked u-space-r-half">
                                              <svg className="icon_svg" id="24x24_like_outline" height="100%" viewBox="0 0 24 24" width="100%">
                                                <path d="M21.164 12.236c.05.164.086.334.086.514 0 .66-.37 1.23-.91 1.527.1.22.16.464.16.723 0 .66-.37 1.23-.91 1.527.1.22.16.464.16.723A1.75 1.75 0 0 1 18 19H7v-9h1c.37 0 1.257-2.37 2.104-3.345.89-1.017 1.234-1.782 1.457-2.513C11.785 3.412 12 2 12 2s2.388.11 2.388 2.9c0 1.39-.758 3.1-.388 4.1h6.25c.966 0 1.75.784 1.75 1.75 0 .63-.336 1.178-.836 1.486zM20.25 10h-6.946l-.242-.653c-.316-.855-.11-1.862.09-2.835.117-.56.236-1.14.236-1.61 0-.844-.283-1.314-.608-1.577-.076.387-.168.797-.262 1.107-.228.748-.604 1.673-1.66 2.88-.336.386-.744 1.166-1.072 1.794C9.146 10.326 8.796 11 8 11v7h10a.75.75 0 0 0 .75-.75.75.75 0 0 0-.07-.308l-.385-.843.812-.45A.74.74 0 0 0 19.5 15a.75.75 0 0 0-.07-.308l-.385-.843.812-.45a.74.74 0 0 0 .393-.65.793.793 0 0 0-.04-.22l-.23-.74.66-.406A.746.746 0 0 0 20.25 10zM2 10h4v10H2V10z"></path>
                                              </svg>
                                            </span>
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
                      <div className="activity-feed_item activity-feed_item--biz_photo activity-feed_item--first-load island island--light" ></div>
                      <div className="activity-feed_item activity-feed_item--first-load activity-feed_item--review island island--light" ></div>
                      <div className="activity-feed_item activity-feed_item--biz_photo activity-feed_item--first-load island island--light" ></div>
                      <div className="activity-feed_item activity-feed_item--first-load activity-feed_item--review island island--light" ></div>
                      <div className="activity-feed_item activity-feed_item--first-load activity-feed_item--review island island--light" ></div>
                    </div>

                    <div className="arrange_unit">
                      <div className="activity-feed_item activity-feed_item--first-load activity-feed_item--review island island--light" ></div>
                      <div className="activity-feed_item activity-feed_item--biz_photo activity-feed_item--first-load island island--light" ></div>
                      <div className="activity-feed_item activity-feed_item--first-load activity-feed_item--review island island--light" ></div>
                      <div className="activity-feed_item activity-feed_item--biz_photo activity-feed_item--first-load island island--light" ></div>
                    </div>
                  </div>
                  <p className="activity-feed_load-more">
                    <a>
                      <span style={{width: "24px", height: "24px"}} className="icon icon--24-chevron-down icon--size-24 icon--currentColor u-space-r-half" >
                        <svg className="icon_svg" id="24x24_chevron_down" height="100%" viewBox="0 0 24 24" width="100%">
                          <path d="M18.364 9.525L16.95 8.11 12 13.06 7.05 8.11 5.636 9.526 12 15.89l6.364-6.365z"></path>
                        </svg>
                      </span>
                      <span>Show more activity in San Francisco</span>
                    </a>
                  </p>
                </div>
              </div>
              <div className="home-container_section home-container_section--top-long"></div>
            </div>
          </div>
        </div>

      </Fragment>
    );
  }
}

export default App;
