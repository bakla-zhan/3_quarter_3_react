import { Component } from 'react';
import { List, ListItem, ListItemText, ListItemIcon } from '@material-ui/core';
import { TextField, IconButton } from '@material-ui/core';
import {Send, Add} from '@material-ui/icons';
import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {addChat} from '../../redux/actions/chatActions';

import './ChatList.css';

class _ChatList extends Component {
    static propTypes = {
        chats: PropTypes.array.isRequired,
        addChat: PropTypes.func.isRequired,
    };
    
    state = {
        chatName: '',
    };

    addChat = () => {
        this.props.addChat(this.state.chatName);
        this.setState({
            chatName: '',
        });
    };
    
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
                        label='New chat'
                        onChange={(event) =>
                            this.setState({
                                chatName: event.target.value,
                            })
                        }
                        onKeyDown={(event) => {
                            if (event.key === 'Enter') {
                                this.addChat();
                            }
                        }}
                    />
                    <IconButton
                        color='primary'
                        variant='contained'
                        onClick={this.addChat}
                    >
                        <Add />
                    </IconButton>
                </div>
            </div>
        );
    }
};

const mapStateToProps = (state) => ({
    chats: state.chat.chats,
});

const ChatList = connect(mapStateToProps, { addChat })(_ChatList);

export { ChatList };
