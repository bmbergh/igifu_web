import React from 'react';
import { ReactDOM, render } from 'react-dom';
import configureStore from './store/index';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory } from 'react-router';

const store = configureStore();
console.log('react file loaded');

render(
  <Provider store={store}>
    <Router history={ hashHistory }>
      // <Route path="/" component={Feed}>
      //   <Router path = "/feed" component={Feed} />
      </Route>
    </Router>
  </Provider>,
document.getElementById('app')
);
