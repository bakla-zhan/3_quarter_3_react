import { SEND_MESSAGE, sendMessage } from '../actions/messageActions';
import { setChatNewMessagesToTrue } from '../actions/chatActions';

export const messageMiddleware = (store) => (next) => (action) => {
    switch (action.type) {
        case SEND_MESSAGE: {
            const { author, chatId } = action.payload;
            if (author === 'me') {
                setTimeout(() => {
                    const robotAnswers = ['fine, tnx...', 'leave me alone! I am just a robot...', 'better than you', 'sorry, I am busy'];
                    const answer = robotAnswers[parseInt((Math.random() * 4))];
                    store.dispatch(
                        sendMessage(
                            answer,
                            'robot',
                            chatId
                        )
                    );
                }, 3000);
            }
            if (chatId !== store.getState().router.location.pathname[6]) {
                store.dispatch(setChatNewMessagesToTrue(chatId));
            };
        }
    }

    return next(action);
};