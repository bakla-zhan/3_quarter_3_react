import {createStore} from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers';

const initialState = {
    
    profile: {
        userName: 'User1',
    },
    chat: {
        chats: ['Чат 1', 'Чат 2', 'Чат 3'],
        messages: {
            1: [{ author: 'robot', text: 'hello from chat 1' }],
            2: [],
            3: [{ author: 'robot', text: 'hello from chat 3' }],
        },
    },

};

const store = createStore(
    reducers,
    initialState,
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    composeWithDevTools()
);

export { store };