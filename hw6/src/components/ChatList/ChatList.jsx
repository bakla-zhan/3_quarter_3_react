import { Component } from 'react';
import { push } from 'connected-react-router';
import { List, ListItem, ListItemText, ListItemIcon } from '@material-ui/core';
import { TextField, IconButton } from '@material-ui/core';
import {Drafts, Mail, AddBox} from '@material-ui/icons';
import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {addChat} from '../../redux/actions/chatActions';

import './ChatList.css';

class _ChatList extends Component {
    static propTypes = {
        currentChat: PropTypes.string, // чтобы узнать ID чата
        chats: PropTypes.array.isRequired, // получаем массив с объектами чатов
        addChat: PropTypes.func.isRequired,
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
        this.props.push(`/chat/${this.props.chats.length + 1}`);
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

    componentDidUpdate() {
        // !this.state.chatName && this.props.push(`/chat/${this.props.chats.length}`);
        this.props.currentChat && (this.props.chats[this.props.currentChat - 1].newMessages = false);
    }
    
    render() {
        return (
            <div className='chat-list'>
                <List>
                    {this.props.chats.map((chat, index) => (
                        <NavLink
                            key={index}
                            to={`/chat/${index + 1}`}
                            style={{
                                textDecoration: 'none',
                                fontSize: '1rem',
                                fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
                                fontWeight: '400',
                                lineHeight: '1.5',
                                letterSpacing: '0.00938em',
                                color: 'rgba(0, 0, 0, 0.87)'
                            }}
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

const ChatList = connect(mapStateToProps, { addChat, push })(_ChatList);

export { ChatList };
