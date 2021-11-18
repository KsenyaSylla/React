import { ADD_CHAT, DELETE_CHAT } from "./actions";
import { getChatList } from "./selectors";

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
            const chatList = getChatList(state);
            return ({
                ...state,
                chats: [...chatList,
                action.payload]
            })
                ;
        case DELETE_CHAT: {
            const chatList = getChatList(state);
            console.log(chatList);
            console.log(action.payload);
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