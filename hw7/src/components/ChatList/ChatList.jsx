import { Component } from 'react';
import { push } from 'connected-react-router';
import { List, ListItem, ListItemText, ListItemIcon } from '@material-ui/core';
import { TextField, IconButton } from '@material-ui/core';
import {Drafts, Mail, AddBox} from '@material-ui/icons';
import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {addChat, setChatNewMessagesToFalse} from '../../redux/actions/chatActions';

import './ChatList.css';

const navLinkStyles = {
    textDecoration: 'none',
    fontSize: '1rem',
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontWeight: '400',
    lineHeight: '1.5',
    letterSpacing: '0.00938em',
    color: 'rgba(0, 0, 0, 0.87)'
};

class _ChatList extends Component {
    static propTypes = {
        currentChat: PropTypes.string, // чтобы узнать ID чата
        chats: PropTypes.array.isRequired, // получаем массив с объектами чатов
        addChat: PropTypes.func.isRequired,
        setChatNewMessagesToFalse: PropTypes.func.isRequired,
        push: PropTypes.func.isRequired,
    };
    
    state = {
        chatName: '',
    };

    addChat = () => {
        this.state.chatName && this.props.addChat(this.state.chatName);
        this.setState({
            chatName: '',
        });
    };

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            this.addChat();
        };
        if (event.key === 'Escape') { // очистка поля ввода при нажатии клавиши Escape
            this.setState({ chatName: '' });
        };
    }

    componentDidUpdate(prevProps) {
        if (prevProps.chats.length !== this.props.chats.length) {
            this.props.push(`/chat/${this.props.chats.length}`);
        };

        if (this.props.currentChat && (prevProps.currentChat !== this.props.currentChat)) {
            this.props.setChatNewMessagesToFalse(this.props.currentChat);
        };
    }
    
    render() {
        return (
            <div className='chat-list'>
                <List>
                    {this.props.chats.map((chat, index) => (
                        <NavLink
                            key={index}
                            to={`/chat/${index + 1}`}
                            style={navLinkStyles}
                            activeStyle={{
                                fontWeight: "bold",
                                color: "darkgreen"
                            }}
                        >
                                <ListItem button>
                                    <ListItemIcon>
                                        {chat.newMessages ? <Mail color='secondary' /> : <Drafts />}
                                    </ListItemIcon>
                                    <ListItemText primary={chat.title} />
                                </ListItem>
                        </NavLink>
                    ))}
                </List>
                <div className='new-chat'>
                    <TextField
                        value={this.state.chatName}
                        label='New chat name'
                        name='chatName'
                        onChange={this.handleChange}
                        onKeyDown={this.handleKeyDown}
                    />
                    <IconButton
                        variant='contained'
                        onClick={this.addChat}
                    >
                        <AddBox />
                    </IconButton>
                </div>
            </div>
        );
    }
};

const mapStateToProps = (state) => ({
    chats: state.chat.chats,
});

const ChatList = connect(mapStateToProps, { addChat, setChatNewMessagesToFalse, push })(_ChatList);

export { ChatList };
