import { ADD_CHAT, DELETE_CHAT } from "./actions";
import { getChatListRoot } from "./selectors";

const initialState = {
    chats: [{
        "id": 1,
        "author": "Ivan Ivanov"
    },
    {
        "id": 2,
        "author": "Petr Petrov"
    },
    {
        "id": 3,
        "author": "Maria Murina",
    }]
};

export const chatReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CHAT:
            const chatList = getChatListRoot(state);
            return ({
                ...state,
                chats: [...chatList,
                action.payload]
            })
                ;
        case DELETE_CHAT: {
            const chatList = getChatListRoot(state);
            const newChatList = chatList.filter((chat) => chat.id !== action.payload);
            return {
                ...state,
                chats: [...newChatList]
            };
        }
        default:
            return state;
    }
};