import { React } from "react";
import { List, Button } from "@material-ui/core";
import { Chat } from "./Chat";
import AddIcon from '@material-ui/icons/Add';
import { useDispatch, useSelector } from "react-redux";
import { addChat, deleteChat } from "../../store/chats/chat/actions.js";
import { nanoid } from "nanoid";


export const ChatList = (props) => {
    const dispatch = useDispatch();
    const userList = useSelector((state) => (state.chats)).chats;

    const addNewChat = () => {
        let id = nanoid();
        let author = prompt("Enter name of user");
        let newChat = {
            "id": id,
            "author": author,
        };
        dispatch(addChat(newChat));
    };

    const updateUserList = (chatId) => {
        dispatch(deleteChat(chatId));
    };

    return (
        <>
            <List>
                <Button onClick={addNewChat}>Add chat<AddIcon /></Button>
                {userList.map((item) => {
                    return (
                        <Chat key={item.id} item={item} updateUserList={updateUserList} />
                    )
                })
                }
            </List >
        </>)
};