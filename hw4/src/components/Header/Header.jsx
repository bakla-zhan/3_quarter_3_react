import { Component } from 'react';
import { Link } from 'react-router-dom';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import HomeIcon from '@material-ui/icons/Home';
import PropTypes from "prop-types";
import './Header.css';

class Header extends Component {
    static propTypes = {
        currentChat: PropTypes.string,
    };
 
    render() {
        return (
            <header className='header'>
                <Link className='header_links' to='/' >
                    <HomeIcon/>
                </Link>
                <div className='chatname' >{ this.props.currentChat ? `Чат ${this.props.currentChat}` : ''}</div>
                <Link className='header_links' to='/profile' >
                    <AccountBoxIcon/>
                </Link>
            </header>
        );
    };
};
export { Header };
