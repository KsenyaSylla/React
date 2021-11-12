import { createStore } from "redux";
import { profileReducer } from "../components/profile/reducer";

export const profileStore = createStore(
    profileReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);