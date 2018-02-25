import React from 'react';
import ReactDOM from 'react-dom';
import HeroBiz from './HeroBiz';

it("renders without crashing", () => {
  const div = document.createElement('div');
  ReactDOM.render(<HeroBiz />, div);
})
