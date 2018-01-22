import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
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

          </div>

        </div>
      </div>
    );
  }
}

export default App;
