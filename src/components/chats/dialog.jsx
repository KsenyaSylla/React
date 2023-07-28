import { React, useRef, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/styles";
import { Grid, Paper, InputBase, Button } from "@material-ui/core";
import { Send } from "@material-ui/icons";
import { MessageList } from "./messageList";
import { Link, useParams } from "react-router-dom";
import { addMessage } from "../../store/chats/messages/actions";
import { getMessageList } from "../../store/chats/messages/selector";
import { chatCheckedHOC } from "../HOCs/dialigHOC";
import { messageFromBotThunk } from "../../store/middleware/messageFromBotThunk";

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



export const DialogPresent = (chat) => {
    const classes = useStyles();
    const [value, setValue] = useState("");
    const { chatId } = useParams();
    const [key, setKey] = useState('0');
    const dispatch = useDispatch();
    const messageListFull = useSelector(getMessageList);
    const messageList = messageListFull[chatId];
    console.log(messageListFull);

    const inputRef = useRef(null);
    useEffect(() => {
        inputRef.current.focus();
    });

    function getMessageId(key) {
        let id = +key + 1;
        setKey(id);
        return id;
    };

    const sendMessage = (author, text, id, chatId) => {
        const newMessage = {
            "chatId": chatId,
            "id": id,
            "author": author,
            "text": text
        };
        dispatch(addMessage(newMessage));
    };

    const onSubmit = (event) => {
        event.preventDefault();
        sendMessage("Lizard", value, getMessageId(key), chatId);
        setValue("");
    };
    const onChangeMessageInput = (event) => {
        setValue(event.target.value);
    };

    useEffect(() => {
        console.log("THat's useEffect");
        if (messageList.length === 0) {
            return;
        }
        const tail = messageList[messageList.length - 1];
        if (tail.author !== "Lizard") {
            console.log(tail);
            return;
        } else {
            messageFromBotThunk(chat.author, "Hello", getMessageId(key), chatId);
        }
    }, [messageList]);



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

                <MessageList></MessageList>
                {//sending message form
                }
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

export const Dialog = chatCheckedHOC(DialogPresent);