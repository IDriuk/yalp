import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './index.css';
import registerServiceWorker from './registerServiceWorker';

import App from './components/App/App';

import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
        <Switch>
          <Route path="/" component={App} />
        </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
