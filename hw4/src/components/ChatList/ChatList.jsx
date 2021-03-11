import { List, ListItem, ListItemText, ListItemIcon } from '@material-ui/core';
import Send from '@material-ui/icons/Send';
import { NavLink } from 'react-router-dom';
import './ChatList.css';

const chats = [1, 2, 3];

const ChatList = () => {
    return (
        <div className='chat-list'>
            <List>
                {chats.map((num, index) => (
                    <NavLink
                        key={index}
                        to={`/chat/${num}`}
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
                                <ListItemText primary={'Чат ' + num} />
                            </ListItem>
                    </NavLink>
                ))}
            </List>
        </div>
    );
};

export { ChatList };
