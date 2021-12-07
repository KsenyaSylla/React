import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { profileReducer } from "./profile/reducer.js";
import { chatReducer } from "./chats/chat/reducer";
import { messageReduser } from "./chats/messages/reducer.js";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage';
import thunk from "redux-thunk";

const persistConfig = {
    key: 'root',
    storage,
};

export const allReducers = combineReducers({
    profile: profileReducer,
    chats: chatReducer,
    messages: messageReduser
}
);

const persistedReducer = persistReducer(persistConfig, allReducers);
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


export const Store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(thunk))
);


const persistor = persistStore(Store);