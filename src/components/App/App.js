import React, { Component, Fragment } from 'react';
import './App.css';

import movers from '../../images/movers.png';
import hotels from '../../images/hotels.png';
import dryclean from '../../images/dryclean.png';
import massage from '../../images/massage.png';

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
      </Fragment>
    );
  }
}

export default App;
