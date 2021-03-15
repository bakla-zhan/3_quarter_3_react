import { Component } from 'react';
import { Link } from 'react-router-dom';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import HomeIcon from '@material-ui/icons/Home';
import {connect} from 'react-redux';
import PropTypes from "prop-types";

import './Header.css';

class _Header extends Component {
    static propTypes = {
        currentChat: PropTypes.string, // чтобы узнать ID чата
        userName: PropTypes.string,
        chats: PropTypes.array, // получаем массив с объектами чатов
    };
 
    render() {
        return (
            <header className='header'>
                <Link className='header_links' to='/' >
                    <HomeIcon/>
                </Link>
                <div className='chatname' >{this.props.currentChat ? this.props.chats[this.props.currentChat - 1].title : null}</div>
                <div className='username' >{this.props.userName}</div>
                <Link className='header_links' to='/profile' >
                    <AccountBoxIcon/>
                </Link>
            </header>
        );
    };
};

const mapStateToProps = (state) => ({
    chats: state.chat.chats,
    userName: state.profile.userName,
});

const Header = connect(mapStateToProps)(_Header);

export { Header };
