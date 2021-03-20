import logger from 'redux-logger';  
import { apiMiddleware } from 'redux-api-middleware';
import {messageMiddleware} from './messageMiddleware';

export default [logger, apiMiddleware, messageMiddleware];