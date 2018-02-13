import React, { Component } from 'react';
import './CategoriesList.css'

import Photo from '../../common/Photo/Photo';

import movers from '../../../images/movers.png';
import hotels from '../../../images/hotels.png';
import dryclean from '../../../images/dryclean.png';
import massage from '../../../images/massage.png';

class CategoriesList extends Component {
  render () {
    return (
      <div className="home-container home-container--first-top-short">
        <div className="home-container_section">
          <h2 className="browse-businesses_title u-space-b4 u-text-centered">Find the Best Businesses in Town</h2>
          <div className="browse-businesses_initial-categories">
            <div className="arrange arrange--30 arrange--equal u-space-b5 u-text-centered">
              {
                [
                  [movers, "Movers"],
                  [hotels,"Hotels"],
                  [dryclean,"Dry Cleaning"],
                  [massage, "Massage"]
                ]
                .map(category =>
                  <div key={category} className="arrange_unit">
                    <Photo
                      type="businesses_category"
                      src={category[0]}
                      title={category[1]}
                    />
                  </div>)
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CategoriesList;
