import React from 'react';
import ReactDom from 'react-dom';
import FeedReview from './FeedReview';

it("renders without chrashing", () => {
  const div = document.createElement('div');
  ReactDom.render(<FeedReview /> , div);
})
