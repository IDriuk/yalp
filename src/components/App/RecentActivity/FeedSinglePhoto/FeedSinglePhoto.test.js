import React from 'react';
import ReactDOM from 'react-dom';
import FeedSinglePhoto from './FeedSinglePhoto';

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<FeedSinglePhoto />, div);
})
