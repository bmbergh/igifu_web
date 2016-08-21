import React from 'react';
import { ReactDOM, render } from 'react-dom';
import configureStore from './store/index';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory } from 'react-router';
import Form from './containers/FormContainer';

const store = configureStore();

render(
  <Provider store={store}>
    <Router history={ hashHistory }>
      <Route path="/" component={Form}>
        <Router path = "/form" component={Form} />
      </Route>
    </Router>
  </Provider>,
document.getElementById('app')
);
