import { React, useState } from "react";
import { List, Button } from "@material-ui/core";
import { Chat } from "./Chat";
import { UserList } from "./userList";
import AddIcon from '@material-ui/icons/Add';

const chatList = [...UserList];

export const ChatList = (props) => {
    const [userList, setUserList] = useState(chatList);

    const addChat = () => {
        let newChatList = [...userList];
        let id = userList.length + 1;
        let author = prompt("Enter name of user");
        let newChat = {
            "id": id,
            "author": author,
            "text": `Hello, ${author}`
        };
        newChatList.push(newChat);
        console.log(newChatList);
        setUserList(newChatList);
    };

    const updateUserList = (chatId) => {
        let newChatList = [...userList];
        const find = newChatList.findIndex((item) => item.id == chatId);
        newChatList.splice(find, 1);
        setUserList(newChatList);
    };

    return (
        <>
            <List>
                <Button onClick={addChat}>Add chat<AddIcon /></Button>
                {userList.map((item) => {
                    return (
                        <Chat key={item.id} item={item} updateUserList={updateUserList} />
                    )
                })
                }
            </List >
        </>)
};