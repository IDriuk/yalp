import React from 'react';
import ReactDOM from 'react-dom';
import MobileApps from './MobileApps';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MobileApps />, div);
})
