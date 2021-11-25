import { ADD_MESSAGE, DELETE_MESSAGE, DELETE_MESSAGES_BY_CHAT_ID } from "./actions";

const initialState = {
    messageList: {
        1: [{
            "id": 0,
            "author": "Lizard",
            "text": "Hello"
        },
        {
            "id": 1,
            "author": "Ivan Ivanov",
            "text": "Hello, Lizard"
        }],

        2: []
    }
};

export const messageReduser = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            const chatId = action.payload.chatId;
            const { id, author, text } = action.payload;
            const newMessage = {
                "id": id,
                "author": author,
                "text": text
            };
            const messageList = state.messageList;
            messageList[chatId] = [
                ...(messageList[chatId] || []),
                newMessage
            ];
            return ({
                ...state,
                messageList
            });
        case DELETE_MESSAGE:

            return;

        case DELETE_MESSAGES_BY_CHAT_ID:

            return;

        default:
            return state;
    }
};