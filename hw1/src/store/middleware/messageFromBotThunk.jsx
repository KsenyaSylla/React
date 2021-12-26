<<<<<<< HEAD
import nanoid from "nanoid";
import { addMessage } from "../chats/messages/actions";
=======
import { thunk } from "redux-thunk";
import { addMessage } from "../chats/messages/actions";

>>>>>>> a327926cc4cfb6ef956cfeff5fce4069b7d9ed06

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

<<<<<<< HEAD
export const messageFromBotThunk = (author, chatId) => (dispatch) => {
    const timerId = setTimeout(() => {
        const newMessage = {
            "chatId": chatId,
            "id": nanoid(),
            "author": author,
            "text": "Hello, Lizard"
        };
        dispatch(addMessage(newMessage));

    }, 1500);
    return () => {
        clearTimeout(timerId);
    };
=======
        const timerId = setTimeout(() => {
            dispatch(addMessage(newMessage));
        },
            1500);
        return () => {
            clearTimeout(timerId);
        };
    }
>>>>>>> a327926cc4cfb6ef956cfeff5fce4069b7d9ed06
};