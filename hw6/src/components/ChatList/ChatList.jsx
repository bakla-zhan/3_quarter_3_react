import { Component } from 'react';
// import { push } from 'connected-react-router';
import { List, ListItem, ListItemText, ListItemIcon } from '@material-ui/core';
import { TextField, IconButton } from '@material-ui/core';
import {Send, AddBox} from '@material-ui/icons';
import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {addChat} from '../../redux/actions/chatActions';

import './ChatList.css';

class _ChatList extends Component {
    static propTypes = {
        chats: PropTypes.array.isRequired,
        addChat: PropTypes.func.isRequired,
        // push: PropTypes.func.isRequired,
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

    // componentDidUpdate() {
    //     this.props.push(`/chat/${this.props.chats.length}`);
    // }
    
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
                                        <Send />
                                    </ListItemIcon>
                                    <ListItemText primary={chat} />
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

// сюда как-то нужно добавить push с помощью compose, но у меня не получается. что-то с синтаксисом не так
const ChatList = connect(mapStateToProps, { addChat })(_ChatList);

export { ChatList };
