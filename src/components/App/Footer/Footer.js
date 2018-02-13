import React, { Component } from 'react';
import './Footer.css'

import Logo from '../../common/Logo/Logo';
import Icon from '../../common/Icon/Icon';

const aboutList = [
  "About Yelp",
  "Careers",
  "Press",
  "Investor Relations",
  "Content Guidelines",
  "Terms of Service",
  "Privacy Policy",
  "Ad Choices"
];
const discoverList = [
  "The Local Yelp",
  "Yelp Blog",
  "Support",
  "Yelp Mobile",
  "Developers",
  "RSS"
];
const forownersList = [
  "Claim your Business Page",
  "Advertise on Yelp",
  "Yelp Reservations",
  "Yelp WiFi",
  "Business Success Stories",
  "Business Support",
  "Yelp Blog for Business Owners"
]

class Footer extends Component {

  renderMenuList (list) {
    return (
      <ul className="footer-menu_list">
        {list.map(item =>
          <li key={item} className="footer-menu_item">
            <a>{item}</a>
          </li>
        )}
      </ul>
    );
  }

  render () {
    return (
      <div className="main-footer webview-hidden">
        <div className="main-footer_section main-footer_menu arrange arrange--equal arrange--30 arrange--stack-small u-sm-space-b0">
          <div className="main-footer_item arrange_unit">
            <div className="footer-menu responsive-hidden-small">
              <h3 className="footer-menu_header">About</h3>
              {this.renderMenuList(aboutList)}
            </div>
          </div>

          <div className="main-footer_item arrange_unit">
            <div className="footer-menu responsive-hidden-small">
              <h3 className="footer-menu_header">Discover</h3>
              {this.renderMenuList(discoverList)}
            </div>
          </div>
          <div className="main-footer_item arrange_unit">
            <div className="footer-menu responsive-hidden-small">
              <h3 className="footer-menu_header">Yelp for Business Owners</h3>
              {this.renderMenuList(forownersList)}
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
    );
  }
}

export default Footer;
