import {
    SEND_MESSAGE,
    UPLOAD_MESSAGES,
    START_MESSAGES_LOADING,
    SUCCESS_MESSAGES_LOADING,
    ERROR_MESSAGES_LOADING,
} from '../actions/messageActions';
import { ADD_CHAT, SET_CHAT_NEW_MESSAGES_TO_TRUE, SET_CHAT_NEW_MESSAGES_TO_FALSE } from '../actions/chatActions';

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
        case SET_CHAT_NEW_MESSAGES_TO_TRUE: {
            const { chatId } = action.payload;
            let chats = state.chats;
            chats[chatId-1].newMessages = true;
            
            return {
                ...state,
                chats: [...chats],
            };
        }
        case SET_CHAT_NEW_MESSAGES_TO_FALSE: {
            const { chatId } = action.payload;
            let chats = state.chats;
            chats[chatId-1].newMessages = false;
            
            return {
                ...state,
                chats: [...chats],
            };
        }
        case UPLOAD_MESSAGES: {
            return {
                ...state,
                messages: action.payload,
            };
        }
        case START_MESSAGES_LOADING: {
            return {
                ...state,
                isLoading: true,
            };
        }
        case SUCCESS_MESSAGES_LOADING: {
            return {
                ...state,
                isLoading: false,
                messages: action.payload,
            };
        }
        case ERROR_MESSAGES_LOADING: {
            return {
                ...state,
                isLoading: false,
            };
        }
        default:
            return state;
    }
};
