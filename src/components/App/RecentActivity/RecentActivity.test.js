import React from 'react';
import ReactDOM from 'react-dom';
import RecentActivity from './RecentActivity';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<RecentActivity />, div);
});
