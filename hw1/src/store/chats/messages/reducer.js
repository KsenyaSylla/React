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
    const messageList = state.messageList;
    switch (action.type) {
        case ADD_MESSAGE:
            let chatId = action.payload.chatId;
            const { id, author, text } = action.payload;
            const newMessage = {
                "id": id,
                "author": author,
                "text": text
            };
            messageList[chatId] = [
                ...(messageList[chatId] || []),
                newMessage
            ];
            return ({
                ...state,
                messageList
            });
        case DELETE_MESSAGE:
            const chatIdForDeleteMessage = action.payload.chatId;
            const messageId = action.payload.messageId;
            const messageListForDelete = messageList[chatIdForDeleteMessage]; //array
            const messageIndex = messageListForDelete.findIndex((item) => (item.id == messageId));
            messageListForDelete.splice(messageIndex, 1);
            messageList[chatIdForDeleteMessage] = [...messageListForDelete];
            return ({
                ...state,
                messageList
            });

        case DELETE_MESSAGES_BY_CHAT_ID: {
            const chatId = action.payload;
            delete messageList[chatId];
            return ({
                ...state,
                messageList
            });
        }
        default:
            return state;
    }
};