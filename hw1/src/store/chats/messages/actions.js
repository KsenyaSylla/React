import { DELETE_CHAT } from "../chat/actions";

export const ADD_MESSAGE = "ADD_MESSAGE";
export const DELETE_MESSAGE = "DELETE_MESSAGE";

export const addMessage = (message) => ({
    type: ADD_MESSAGE,
    payload: message
});

export const deleteMessage = (messageId) => ({
    type: DELETE_MESSAGE,
    payload: messageId
});