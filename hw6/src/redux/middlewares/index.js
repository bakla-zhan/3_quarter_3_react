import logger from 'redux-logger';  

import {messageMiddleware} from './messageMiddleware';

export default [logger, messageMiddleware];