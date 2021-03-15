import {createStore, applyMiddleware} from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

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
            1: [{ author: 'robot', text: 'hello from chat 1' }],
            2: [{ author: 'robot', text: 'hello from chat 2' }],
            3: [{ author: 'robot', text: 'hello from chat 3' }],
        },
    },
};

const persistConfig = {
    key: 'root',
    storage,
    stateReconciler: autoMergeLevel2,
    whitelist: ['chat', 'profile'],
};

export const history = createBrowserHistory();
const persistedReducer = persistReducer(persistConfig, reducers(history));

const store = createStore(
    persistedReducer,
    initialState,
    composeWithDevTools(applyMiddleware(routerMiddleware(history), ...middlewares))
);

export const persistor = persistStore(store);

export { store };