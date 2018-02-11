import React, { Component, Fragment } from 'react';
import './App.css';

import Icon from '../Icon/Icon';
import Logo from '../Logo/Logo';

import HeaderNav from '../HeaderNav/HeaderNav';
import Search from '../Search/Search';
import CategoriesMenu from '../CategoriesMenu/CategoriesMenu';
import CategoriesList from '../CategoriesList/CategoriesList';
import LocationBar from '../LocationBar/LocationBar';
import Hot from '../Hot/Hot';
import Rotd from '../Rotd/Rotd';
import RecentLists from '../RecentLists/RecentLists';
import RecentActivity from '../RecentActivity/RecentActivity';
import MobileApps from '../MobileApps/MobileApps';
import Footer from '../Footer/Footer';

class App extends Component {
  render() {
    return (
      <Fragment>

        {/* hero */}
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


        <div className="y-container">
          <div className="y-container_content">
            <div className="home-container">

              {/* review of the day and recent lists */}
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
              <MobileApps />
            </div>
          </div>
        </div>

        {/* footer */}
        <div className="main-content-wrap main-content-wrap--separated u-bg-color-alt">
          <div className="content-container">
            <Footer />
          </div>
        </div>

      </Fragment>
    );
  }
}

export default App;
