export const ADD_CHAT = '@@chat/ADD_CHAT';

export const addChat = (chatName) => ({
    type: ADD_CHAT,
    payload: {
        chatName,
    },
});