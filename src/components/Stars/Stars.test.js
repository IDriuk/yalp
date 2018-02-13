import React from 'react';
import ReactDOM from 'react-dom';
import Stars from './Stars';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Stars />, div);
});
