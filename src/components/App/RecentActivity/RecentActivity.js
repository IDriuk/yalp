import React, { Component } from 'react';
import './RecentActivity.css';

import FeedReview from './FeedReview/FeedReview';
import FeedSinglePhoto from './FeedSinglePhoto/FeedSinglePhoto';
import FeedThreePhoto from './FeedThreePhoto/FeedThreePhoto';

import avatar_2 from '../../../images/avatar_2.jpg';
import avatar_3 from '../../../images/avatar_3.jpg';

import feed_photo_big_1 from '../../../images/feed_photo_big_1.jpg';
import feed_photo_big_2 from '../../../images/feed_photo_big_2.jpg';

import feed_photo_1 from '../../../images/feed_photo_1.jpg';
import feed_photo_2 from '../../../images/feed_photo_2.jpg';
import feed_photo_3 from '../../../images/feed_photo_3.jpg';
import feed_photo_4 from '../../../images/feed_photo_4.jpg';

const feed_three_photos = [
  {
    avatar: avatar_2,
    big_photo: feed_photo_big_1,
    photos: [feed_photo_1, feed_photo_2],
    author: "Zak R.",
    photos_count: "Added 5 photos",
    biz_name: "Alexander’s Steakhouse",
    show_all: "Show all 5 photos"
  },{
    avatar: avatar_3,
    big_photo: feed_photo_big_2,
    photos: [feed_photo_3, feed_photo_4],
    author: "Cali G.",
    photos_count: "Added 3 photos",
    biz_name: "Elite Event: Donato & Co"
  }
]

class RecentActivity extends Component {
  render () {
    return (

      <div className="arrange arrange--wrap arrange--3-units arrange--30">

        <div className="arrange_unit">
          <FeedSinglePhoto />
          <FeedThreePhoto {...feed_three_photos[0]} />
          <FeedThreePhoto {...feed_three_photos[1]} />
        </div>

        <div className="arrange_unit">
          <FeedReview />
          <FeedThreePhoto {...feed_three_photos[1]} />
          <FeedReview />
        </div>

        <div className="arrange_unit">
          <FeedThreePhoto {...feed_three_photos[0]} />
          <FeedReview />
          <FeedThreePhoto {...feed_three_photos[0]} />
        </div>

      </div>

    );
  }
}

export default RecentActivity;
