import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import { chatReducer } from './chatReducer';
import { profileReducer } from './profileReducer';

export default (history) => combineReducers({
    router: connectRouter(history),
    profile: profileReducer,
    chat: chatReducer,
});
