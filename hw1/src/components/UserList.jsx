import { React, useState } from "react";
import { List, ListItem } from "@material-ui/core";

export const UserList = (props) => {
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
                        <ListItem key={item.id}>
                            {item.author}
                        </ListItem>
                    )
                })
                }
            </List >
        </>)
};