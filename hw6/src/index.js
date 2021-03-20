import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { PersistGate } from 'redux-persist/integration/react';
import {Router} from './components/Router';
import './index.css';

import { store, history, persistor } from './redux/store';

ReactDOM.render(
    <ReduxProvider store={store}>
        <ConnectedRouter history={history}>
            <PersistGate persistor={persistor} loading={null}>
                <Router />
            </PersistGate>
        </ConnectedRouter>
    </ReduxProvider>,
    document.querySelector('#root')
);