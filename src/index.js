import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store from './store.js'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

ReactDOM.render(
  <Router>
    <Provider store={store}>
    <Switch>
        <Route exact path='/' component={App} />
        {/* Add More Routes Here */}
      </Switch>
    </Provider>
  </Router>
, document.getElementById('root'));
registerServiceWorker();
