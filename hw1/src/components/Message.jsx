import { React, useState, useEffect } from "react";
import { Container, Grid, AppBar, Box, Paper, InputBase, Button } from "@material-ui/core";
import { UserList } from "./UserList";
import { Header } from "./header";
import { MessageList } from "./messageList"
import { makeStyles } from '@material-ui/core/styles';
import { Send } from "@material-ui/icons";


const useStyles = makeStyles((theme) => ({
    paper: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        paddingLeft: theme.spacing(1),
    },
    input: {
        flexGrow: 1,
    }
}));

const Message = (props) => {
    const [messageList, setMessageList] = useState([]);
    const [value, setValue] = useState("");
    const [key, setKey] = useState(0);
    const classes = useStyles();
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
            <Header />

            <Grid container
                justifyContent="center"
                direction="row"
            >
                <Grid item xs={6}>
                    <UserList></UserList>
                </Grid>

                <Grid item xs={6}>
                    <MessageList messageList={messageList}></MessageList>

                    <Paper className={classes.paper} component="form" onSubmit={onSubmit}>
                        <InputBase
                            value={value}
                            onChange={onChangeMessageInput}
                            type="text"
                            className={classes.input}
                        />
                        <Button type="submit" className={"submit"}>
                            <Send />
                        </Button>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
}
export default Message;