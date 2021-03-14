export const SEND_MESSAGE = '@@message/SEND_MESSAGE';

export const sendMessage = (text, author, chatId) => ({
    type: SEND_MESSAGE,
    payload: {
        text,
        author,
        chatId,
    },
});
