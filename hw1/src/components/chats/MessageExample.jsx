import { React, useState, useEffect, useRef } from "react";
import { Grid, Paper, InputBase, Button } from "@material-ui/core";
import { ChatList } from "./ChatList";
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
// вывести в отдельный компонент форму отправки сообщений, связать чат листы по айдишнику чатов

const Message = (props) => {
    const [messageList, setMessageList] = useState([]);
    const [value, setValue] = useState("");
    const [key, setKey] = useState(0);
    const classes = useStyles();
    const inputRef = useRef(null);

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

        const timerId = setTimeout(() => {
            sendMessage(chat.author, "Hello, Lizard", getId(key));
        }, 1500);
        return () => {
            clearTimeout(timerId);
        };
    }, [messageList]);

    return (
        <Grid container
            justifyContent="center"
            direction="row"
        >
            <Grid item xs={6}>
                <ChatList></ChatList>
            </Grid>

            <Grid item xs={6}>
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
}
export default Message;