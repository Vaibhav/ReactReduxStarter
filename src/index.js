import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppContainer from './AppContainer';
import registerServiceWorker from './registerServiceWorker';
import store from './store.js'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

ReactDOM.render(
  <Router>
    <Provider store={store}>
    <Switch>
        <Route exact path='/' component={AppContainer} />
        {/* Add More Routes Here */}
      </Switch>
    </Provider>
  </Router>
, document.getElementById('root'));
registerServiceWorker();
