import { SEND_MESSAGE } from '../actions/messageActions';
import { ADD_CHAT } from '../actions/chatActions';

const initialState = {};

export const chatReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE: {
            const { text, author, chatId } = action.payload;
            const prevMessages = state.messages[chatId] || [];

            return {
                ...state,
                messages: {
                    ...state.messages,
                    [chatId]: [...prevMessages, { author, text }],
                },
            };
        }
        case ADD_CHAT: {
            const { chatName } = action.payload;
            
            return {
                ...state,
                chats: [...state.chats, {title: chatName, newMessages: false}],
                messages: {
                    ...state.messages,
                    [state.chats.length + 1]: [
                        {
                            author: 'robot',
                            text: `hello from ${chatName}`,
                        },
                    ],
                },
            };
        }
        default:
            return state;
    }
};
