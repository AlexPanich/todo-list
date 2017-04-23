import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import configureStore from './store';

import TodoApp from './components/TodoApp';

import 'normalize.css';
import './assets/main.css';

const store = configureStore({}, browserHistory);
const history = syncHistoryWithStore(browserHistory, store);

render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={TodoApp} />
        </Router>
    </Provider>,
    document.getElementById('root')
);
