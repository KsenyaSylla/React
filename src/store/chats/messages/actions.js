export const ADD_MESSAGE = "ADD_MESSAGE";
export const DELETE_MESSAGE = "DELETE_MESSAGE";
export const DELETE_MESSAGES_BY_CHAT_ID = "DELETE_MESSAGES_BY_CHAT_ID";
export const BOT_MESSAGE = "BOT_MESSAGE";

export const addMessage = (message) => ({
    type: ADD_MESSAGE,
    payload: message
});

export const deleteMessageById = (bothId) => ({
    type: DELETE_MESSAGE,
    payload: bothId
});

export const deleteMessagesByChatId = (chatId) => ({
    type: DELETE_MESSAGES_BY_CHAT_ID,
    payload: chatId
});

export const botMessage = (message) => ({
    type: BOT_MESSAGE,
    payload: message
});