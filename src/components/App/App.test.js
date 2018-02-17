import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import App from './App';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
import reducers from '../../reducers';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Provider store={createStoreWithMiddleware(reducers)}><App /></Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});
