import React from 'react';
import ReactDOM from 'react-dom';
import Hot from './Hot';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Hot />, div);
});
