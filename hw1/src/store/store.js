import { createStore, combineReducers } from "redux";
import { profileReducer } from "./profile/reducer.js";
import { chatReducer } from "./chats/chat/reducer";

export const allReducers = combineReducers({
    profile: profileReducer,
    chats: chatReducer
}
);

export const Store = createStore(
    allReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);