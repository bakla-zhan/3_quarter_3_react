import {Component} from 'react';
import { Messages } from '../Messages';

class App extends Component {
    render() {
        return (
            <div id='test-id'>
                <h2>welcome to our chat</h2>
                <Messages/>
            </div>
        );
    }
}

export { App };