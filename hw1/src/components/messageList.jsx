import { React } from "react";
import { List, ListItem } from "@material-ui/core";

export const MessageList = (props) => {
    return (
        <List className={"list"}>
            <ul>
                {props.messageList.map((item) => {
                    return (
                        <ListItem key={item.id}>
                            {item.author}: - {item.text}
                        </ListItem>
                    );
                })}
            </ul>
        </List>)
};