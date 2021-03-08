import React from 'react';
import ReactDOM from 'react-dom';
import {Router} from './components/Router';
import { BrowserRouter } from 'react-router-dom';
import './index.css';

ReactDOM.render(<BrowserRouter>
                    <Router />
                </BrowserRouter>,
document.querySelector('#root'));