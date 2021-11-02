import "../index.css";
import { React, useState, useEffect } from "react";
import { Container, List, ListItem, Grid, AppBar, Box } from "@material-ui/core";
import { UserList } from "./UserList";
import { spacing } from '@material-ui/system';



const Message = (props) => {
    const [messageList, setMessageList] = useState([]);
    const [value, setValue] = useState("");
    const [key, setKey] = useState(0);
    const onChangeMessageInput = (event) => {
        setValue(event.target.value);
    };

    function getId(key) {
        let id = key + 1;
        setKey(id);
        return id;
    };

    const sendMessage = (author, text, id) => {
        const newMessageList = [...messageList];
        const newMessage = {
            author,
            text,
            id
        };

        newMessageList.push(newMessage);
        setMessageList(newMessageList);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        sendMessage("user", value, getId(key));
        setValue("");
    };

    useEffect(() => {
        if (messageList.length === 0) {
            return;
        }
        const tail = messageList[messageList.length - 1];
        if (tail.author === "bot") {
            return;
        } else {
            const timerId = setTimeout(() => {
                sendMessage("bot", "Hello, human", getId(key));
            }, 1500);
            return () => {
                clearTimeout(timerId);
            };
        }
    }, [messageList]);

    return (
        <Container >
            <AppBar position={'static'} m={2} p={2} className={"message"}>
                <Box>Hello, React</Box>
            </AppBar>

            <Grid container
                justifyContent="center"
                direction="row"
            >
                <Grid item xs={6}>
                    <UserList></UserList>
                </Grid>

                <Grid item xs={6}>
                    <List className={"list"}>
                        <ul>
                            {messageList.map((item) => {
                                return (
                                    <ListItem key={item.id}>
                                        {item.author}: - {item.text}
                                    </ListItem>
                                );
                            })}
                        </ul>
                    </List>

                    <form className={"sendMessage"} onSubmit={onSubmit}>
                        <input
                            value={value}
                            onChange={onChangeMessageInput}
                            type="text"
                            className={"input"}
                        />
                        <button type="submit" className={"submit"}>
                            Отправить
                        </button>
                    </form>
                </Grid>
            </Grid>
        </Container>
    );
}
export default Message;