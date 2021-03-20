import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import {Router} from './components/Router';
import './index.css';

import { store, history } from './redux/store';

ReactDOM.render(
    <ReduxProvider store={store}>
        <ConnectedRouter history={history}>
            <Router />
        </ConnectedRouter>
    </ReduxProvider>,
    document.querySelector('#root')
);