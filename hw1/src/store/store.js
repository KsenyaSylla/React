import { createStore, combineReducers } from "redux";
import { profileReducer } from "./profile/reducer.js";
import { chatReducer } from "./chats/chat/reducer";
import { messageReduser } from "./chats/messages/reducer.js";

export const allReducers = combineReducers({
    profile: profileReducer,
    chats: chatReducer,
    messages: messageReduser
}
);

export const Store = createStore(
    allReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);