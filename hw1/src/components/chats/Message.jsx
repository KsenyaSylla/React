import { React, useState, useEffect, useRef } from "react";
import { Grid, Paper, InputBase, Button } from "@material-ui/core";
import { ChatList } from "./ChatList";
import { MessageList } from "./messageList"
import { makeStyles } from '@material-ui/core/styles';
import { Send } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { addMessage, deleteMessage } from "../../store/chats/messages/actions";
import { getMessageList } from "../../store/chats/messages/selector"


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
    //const [messageList, setMessageList] = useState([]);
    const messageListFull = useSelector(getMessageList);
    const messageList = messageListFull.filter((item) => (item.chatId = chatId));
    const [value, setValue] = useState("");
    const [key, setKey] = useState('0');
    const classes = useStyles();
    const inputRef = useRef(null);
    const dispatch = useDispatch();

    const onChangeMessageInput = (event) => {
        setValue(event.target.value);
    };

    function getMessageId(key) {
        let id = key + 1;
        setKey(id);
        return id;
    };

    const sendMessage = (author, text, id, chatId) => {
        const newMessage = {
            "chatId": chatId,
            "author": author,
            "messageId": id,
            "messageText": text
        };
        dispatch(addMessage(newMessage));
    };

    const onSubmit = (event) => {
        event.preventDefault();
        sendMessage("user", value, getMessageId(key), chatId);
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
        if (tail.author === "bot") {
            return;
        } else {
            const timerId = setTimeout(() => {
                sendMessage("bot", "Hello, human", getMessageId(key));
            }, 1500);
            return () => {
                clearTimeout(timerId);
            };
        }
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