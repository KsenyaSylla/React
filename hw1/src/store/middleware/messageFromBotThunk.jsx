import { Thunk } from "redux-thunk";

export const messageFromBotThunk = () => {


    const timerId = setTimeout(() => {
        sendMessage(chat.author, "Hello, Lizard", getMessageId(key), chatId);
    }, 1500);
    return () => {
        clearTimeout(timerId);
    };
};