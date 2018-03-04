import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './index.css';
import registerServiceWorker from './registerServiceWorker';

import App from './components/App/App';

ReactDOM.render(
  <BrowserRouter>
      <Switch>
        <Route path="/" component={App} />
      </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

registerServiceWorker();
