import React from 'react';
import ReactDOM from 'react-dom';
import Rotd from './Rotd';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Rotd />, div);
})
