import React from 'react';
import ReactDOM from 'react-dom';
import RecentLists from './RecentLists';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<RecentLists />, div);
})
