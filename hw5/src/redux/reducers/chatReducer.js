import { SEND_MESSAGE } from '../actions/messageActions';
import { ADD_CHAT } from '../actions/chatActions';

const initialState = {
    // messages: {
    //     1: [{ author: 'robot', text: 'hello from chat 1' }],
    //     2: [],
    //     3: [{ author: 'robot', text: 'hello from chat 3' }],
    // },
};

export const chatReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE: {
            const prevMessages = state.messages[action.payload.chatId] || [];

            return {
                ...state,
                messages: {
                    ...state.messages,
                    [action.payload.chatId]: [
                        ...prevMessages,
                        {
                            author: action.payload.author,
                            text: action.payload.text,
                        },
                    ],
                },
            };
        }
        case ADD_CHAT: {
            return {
                ...state,
                chats: [...state.chats, action.payload.chatName],
                messages: {
                    ...state.messages,
                    [state.chats.length + 1]: [
                        {
                            author: 'robot',
                            text: `hello from chat ${state.chats.length + 1}`,
                        },
                    ],
                },
            };
        }
        default:
            return state;
    }
};
