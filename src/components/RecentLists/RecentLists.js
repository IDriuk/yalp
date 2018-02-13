import React, { Component } from 'react';
import './RecentLists.css';

import Photo from '../common/Photo/Photo';

import rlists_photo_1 from '../../images/rlists_photo_1.jpg';
import rlists_photo_2 from '../../images/rlists_photo_2.jpg';
import rlists_photo_3 from '../../images/rlists_photo_3.jpg';

const data = [
  {
    photo: rlists_photo_1,
    title: "Not-Good-For-Retirement Stars",
    description: "Michelin restaurants In the order that I experienced them =)",
    author: "Annie Z."
  },
  {
    photo: rlists_photo_2,
    title: "2018 AudVentures",
    description: "Finally settling down and still ready to explore!  For all places visited in 2018",
    author: "Audrey H."
  },
  {
    photo: rlists_photo_3,
    title: "My reviews for 2014",
    description: "Thanks to my fellow yelper, Andrew I, who is totally cool, he has inspired me to do a list of reviews for 2014.  It's the new year and a new start.",
    author: "Carol C."
  }
]

class RecentLists extends Component {
  render () {
    return (
      <ul className="list-island_set">
        {data.map( item =>
          <li key={item.title} className="list-island_item">
            <div className="media-block media-block--12">
              <Photo
                type="avatar_media"
                src={item.photo}
              />
              <div className="media-story">
                <p className="list-island_item-title u-text-truncate media-title">
                  <a>{item.title}</a>
                </p>
                <p className="list-island_item-description">
                  {item.description}
                </p>
                <div className="list-island_item-owner">
                  By
                  <a className="user-display-name"> {item.author}</a>
                </div>
              </div>
            </div>
          </li>)}
      </ul>
    );
  }
}

export default RecentLists;
