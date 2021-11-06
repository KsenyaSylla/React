import { React, useState, useRef, useEffect } from "react";
import { makeStyles } from "@material-ui/styles";
import { Grid, Paper, InputBase, Button } from "@material-ui/core";
import { Send } from "@material-ui/icons";
import { MessageList } from "./messageList";
import { UserList } from "./userList";
import { Link, useParams } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    paper: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        paddingLeft: "8px"
    },
    input: {
        flexGrow: 1,
    },
}));

export const ChatFull = (props) => {
    const [messageList, setMessageList] = useState([]);
    const [value, setValue] = useState("");
    const [key, setKey] = useState(0);
    const classes = useStyles();
    const inputRef = useRef(null);
    const chatList = [...UserList];
    const { chatId } = useParams();
    const chat = chatList.find((item) => item.id == chatId);

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
        sendMessage("Lizard", value, getId(key));
        setValue("");
    };

    useEffect(() => {
        inputRef.current.focus();
    });

    useEffect(() => {
        if (messageList.length === 0) {
            return;
        }
        const tail = messageList[messageList.length - 1];
        if (tail.author === chat.author) {
            return;
        } else {
            const timerId = setTimeout(() => {
                sendMessage(chat.author, "Hello, Lizard", getId(key));
            }, 1500);
            return () => {
                clearTimeout(timerId);
            };
        }
    }, [messageList]);

    if (!chat) {
        return (
            <>
                <Button buttonRef={inputRef}><Link to="/chats">Back to chats</Link></Button>
                <img src="https://previews.123rf.com/images/kaymosk/kaymosk1804/kaymosk180400006/100130939-error-404-page-not-found-error-with-glitch-effect-on-screen-vector-illustration-for-your-design-.jpg" alt="Page not found" />
            </>
        )
    }

    return (
        <Grid container
            justifyContent="center"
            direction="row"
        >
            <Grid item sx={6}>
                <Button ><Link to="/chats">Back to chats</Link></Button>
            </Grid>
            <Grid item sx={6}>
                <Paper>{chat.author}</Paper>
                <MessageList messageList={messageList}></MessageList>

                <Paper className={classes.paper} component="form" onSubmit={onSubmit}>
                    <InputBase
                        inputRef={inputRef}
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
    );
};