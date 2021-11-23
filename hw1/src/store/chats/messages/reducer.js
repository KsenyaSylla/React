import { ADD_MESSAGE, DELETE_MESSAGE } from "./actions";
import { getMessageList } from "./selector";

const initialState = {
    messageList: {
        1: {
            "author": "Ivan Ivanov",
            "messageId": 1,
            "messagetext": "Hello"
        },

        2: {
            "author": "Petr Petrov",
            "messageId": 1,
            "messagetext": "Hello"
        },
    }
};

export const messageReduser = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            const messageList = getMessageList(state);
            return ({
                ...state,
                messageList: [...messageList,
                action.payload
                ]
            });
        case DELETE_MESSAGE:

            return;

        default:
            return state;
    }
};