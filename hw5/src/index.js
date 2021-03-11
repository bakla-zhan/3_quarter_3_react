import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import {Router} from './components/Router';
import './index.css';

import { store } from './redux/store';

ReactDOM.render(
    <ReduxProvider store={store}>
        <BrowserRouter>
            <Router />
        </BrowserRouter>
    </ReduxProvider>,
    document.querySelector('#root')
);