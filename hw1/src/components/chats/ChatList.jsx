import { React, useState } from "react";
import { List } from "@material-ui/core";
import { Chat } from "./Chat";

export const ChatList = (props) => {

    const [userList, setUserList] = useState([{
        "id": 1,
        "author": "Ivan Ivanov",
        "text": "Hello, Denis"
    },
    {
        "id": 2,
        "author": "Petr Petrov",
        "text": "I'm glad"
    },
    {
        "id": 3,
        "author": "Maria Murina",
        "text": "Nice."
    }]);

    return (
        <>
            <List>
                {userList.map((item) => {
                    return (
                        <Chat key={item.id} item={item}></Chat>
                    )
                })
                }
            </List >
        </>)
};