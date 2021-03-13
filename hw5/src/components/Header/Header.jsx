import { Component } from 'react';
import { Link } from 'react-router-dom';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import HomeIcon from '@material-ui/icons/Home';
import {connect} from 'react-redux';
import PropTypes from "prop-types";

import './Header.css';

class _Header extends Component {
    static propTypes = {
        currentChat: PropTypes.string,
        userName: PropTypes.string,
    };
 
    render() {
        return (
            <header className='header'>
                <Link className='header_links' to='/' >
                    <HomeIcon/>
                </Link>
                <div className='chatname' >{ this.props.currentChat ? `Чат ${this.props.currentChat}` : ''}</div>
                <div className='username' >{this.props.userName}</div>
                <Link className='header_links' to='/profile' >
                    <AccountBoxIcon/>
                </Link>
            </header>
        );
    };
};

const mapStateToProps = (state) => ({
    userName: state.profile.userName,
});

const Header = connect(mapStateToProps)(_Header);

export { Header };
