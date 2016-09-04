import React from 'react';
import { ReactDOM, render } from 'react-dom';
import configureStore from './store/index';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory } from 'react-router';
import Form from './containers/FormContainer';
import Main from './containers/MainContainer';

const store = configureStore();
import 'styles/main.scss';


render(
  <Provider store={store}>
    <Router history={ hashHistory }>
      <Route path="/" component={Main}>
        <Router path = "/main" component={Main} />
      </Route>
    </Router>
  </Provider>,
document.getElementById('app')
);
