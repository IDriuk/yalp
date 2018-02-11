import React, { Component, Fragment } from 'react';
import './App.css';

import Icon from '../Icon/Icon';

import HeaderNav from '../HeaderNav/HeaderNav';
import Logo from '../Logo/Logo';
import Search from '../Search/Search';
import CategoriesMenu from '../CategoriesMenu/CategoriesMenu';
import CategoriesList from '../CategoriesList/CategoriesList';
import LocationBar from '../LocationBar/LocationBar';
import Hot from '../Hot/Hot';
import Rotd from '../Rotd/Rotd';
import RecentLists from '../RecentLists/RecentLists';
import RecentActivity from '../RecentActivity/RecentActivity';

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
              <CategoriesMenu />

              <div className="u-text-centered homepage-hero_biz u-size-full">
                <div className="business-link-hovercard business-link-hovercard--strong business-link-hovercard--inline">
                  <span className="business-link-hovercard_business-link">
                    <a className="biz-name">
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

            <CategoriesList />

          </div>
        </div>

        {/* hot and new */}
        <div className="y-container">
          <div className="y-container_content">
            <div className="home-container home-container--first-top-short">

              <div className="home-container_section home-container_section--top-long">
                <h2 className="u-text-centered">Yelp San Francisco</h2>

                <LocationBar />

              </div>

              <div className="home-container_section">
                <h3 className="explore-city_title">Hot & New Businesses</h3>

                <Hot />

                <div className="u-space-t2 u-text-centered">
                  <a className="explore-city_see-all">See more hot and new businesses</a>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* review of the day and recent lists */}
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

                      <Rotd />

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

                            <RecentLists />

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

                  <RecentActivity />

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
