import { React } from "react";
import { List, Paper } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import propTypes from "prop-types";
import { Message } from "./message";
import { useSelector } from "react-redux";
import { getMessageList } from "../../store/chats/messages/selector";
import { useParams } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
    list: {
        border: "none",
        marginBottom: theme.spacing(2)
    }
}));

export const MessageList = (props) => {
    const classes = useStyles();
    const messageListFull = useSelector(getMessageList);
    const { chatId } = useParams();
    const messageList = messageListFull[chatId];

    return (
        <List className={classes.list}>
            <Paper>
                {messageList.map((item) => {
                    return (
                        <Message item={item} />
                    );
                })}
            </Paper>
        </List>)
};

MessageList.propTypes = {
    messageList: propTypes.array,
};