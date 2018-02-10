import React from 'react';
import ReactDOM from 'react-dom';
import LocationBar from './LocationBar';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LocationBar />, div);
})
