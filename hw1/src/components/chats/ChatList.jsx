import { React, useState } from "react";
import { List } from "@material-ui/core";
import { Chat } from "./Chat";
import { UserList } from "./userList";

export const ChatList = (props) => {
    const chatList = [...UserList];
    const [userList, setUserList] = useState(chatList);

    return (
        <>
            <List>
                {userList.map((item) => {
                    return (
                        <Chat key={item.id} item={item} />
                    )
                })
                }
            </List >
        </>)
};