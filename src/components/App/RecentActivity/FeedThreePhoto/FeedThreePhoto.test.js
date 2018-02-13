import React from 'react';
import ReactDOM from 'react-dom';
import FeedThreePhoto from './FeedThreePhoto';

const data = {
  avatar: "avatar_2",
  big_photo: "feed_photo_big_1",
  photos: ["feed_photo_1", "feed_photo_2"],
  author: "Zak R.",
  photos_count: "Added 5 photos",
  biz_name: "Alexander’s Steakhouse",
  show_all: "Show all 5 photos"
}

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<FeedThreePhoto {...data} />, div);
})
