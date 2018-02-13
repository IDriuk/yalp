import React from 'react';
import ReactDOM from 'react-dom';
import CategoriesList from './CategoriesList';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CategoriesList />, div);
})
