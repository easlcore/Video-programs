import createBrowserHistory from 'history/createBrowserHistory';
import * as moment from 'moment';
import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter, routerMiddleware, connectRouter } from 'connected-react-router';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';

import { App } from './components/app/App';
import { productsReducer, orderReducer } from './reducers';

import { loadState, saveState } from './utils/localStorage';

require('moment/locale/ru');
require('antd/dist/antd.css');

moment.locale('ru');

const persistedState = loadState();

const history = createBrowserHistory();

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    connectRouter(history)(
        combineReducers({
            products: productsReducer,
            order: orderReducer
        })
    ),
    persistedState || window.__INITIAL_STATE__,
    composeEnhancers(
        applyMiddleware(
            routerMiddleware(history)
        )
    )
);

store.subscribe(() => {
    saveState(store.getState());
})

render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </Provider>,
    document.getElementById('app')
);
