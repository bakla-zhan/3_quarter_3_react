import {createStore, applyMiddleware} from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';

import reducers from './reducers';
import middlewares from './middlewares';

const initialState = {
    profile: {
        userName: 'User1',
    },
    chat: {
        chats: [
            {title: 'Chat 1', newMessages: false},
            {title: 'Chat 2', newMessages: false},
            {title: 'Chat 3', newMessages: false},
        ],
        messages: {
            // 1: [{ author: 'robot', text: 'hello from chat 1' }],
            // 2: [{ author: 'robot', text: 'hello from chat 2' }],
            // 3: [{ author: 'robot', text: 'hello from chat 3' }],
        },
        isLoading : false,
    },
};

export const history = createBrowserHistory();

const store = createStore(
    reducers(history),
    initialState,
    composeWithDevTools(applyMiddleware(routerMiddleware(history), ...middlewares))
);

export { store };