import {Component} from 'react';
import './Profile.css';

import { Header } from '../Header';

class Profile extends Component {
    render() {
        return (
            <div className='layout'>
                <Header />
                <div className='account' >
                    <h1>Profile</h1>
                    <p>First name: xxx</p>
                    <p>Last name: zzz</p>
                    <p>Age: yyy</p>
                </div>
            </div>
        );
    }
};

export { Profile };