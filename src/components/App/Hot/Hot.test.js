import React from 'react';
import ReactDOM from 'react-dom';
import Hot from './Hot';
import defaultBusinesses from './TestBusinesses';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Hot businesses={defaultBusinesses}/>, div);
});
