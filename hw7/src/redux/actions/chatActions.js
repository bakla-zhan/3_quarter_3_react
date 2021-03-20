export const ADD_CHAT = '@@chat/ADD_CHAT';
export const SET_CHAT_NEW_MESSAGES_TO_TRUE = '@@chat/SET_CHAT_NEW_MESSAGES_TO_TRUE';
export const SET_CHAT_NEW_MESSAGES_TO_FALSE = '@@chat/SET_CHAT_NEW_MESSAGES_TO_FALSE';

export const addChat = (chatName) => ({
    type: ADD_CHAT,
    payload: {
        chatName,
    },
});

export const setChatNewMessagesToTrue = (chatId) => ({
    type: SET_CHAT_NEW_MESSAGES_TO_TRUE,
    payload: {
        chatId,
    },
});

export const setChatNewMessagesToFalse = (chatId) => ({
    type: SET_CHAT_NEW_MESSAGES_TO_FALSE,
    payload: {
        chatId,
    },
});