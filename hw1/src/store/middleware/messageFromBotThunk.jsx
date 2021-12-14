import { thunk } from "redux-thunk";
import { addMessage } from "../chats/messages/actions";


export const messageFromBotThunk = (author, text, id, chatId) => (dispatch) => {
    if (author !== "Lizard") {
        console.log("thunk's working");
        return;
    } else {
        const newMessage = {
            "chatId": chatId,
            "id": id,
            "author": author,
            "text": text
        };

        const timerId = setTimeout(() => {
            dispatch(addMessage(newMessage));
        },
            1500);
        return () => {
            clearTimeout(timerId);
        };
    }
};