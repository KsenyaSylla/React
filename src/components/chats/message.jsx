import { React } from "react";
import { HighlightOff } from "@material-ui/icons";
import { ListItem, Button, Paper } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from "react-redux";
import { deleteMessageById } from "../../store/chats/messages/actions";
import { useParams } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(1)
    },
    deleteButton: {
        color: "red",
    }
}));


export const Message = (props) => {
    const classes = useStyles();
    const item = props.item;
    const id = item.id;
    const { chatId } = useParams();
    const bothId = {
        "messageId": id,
        "chatId": chatId
    };
    const dispatch = useDispatch();
    const deleteMessage = () => {
        dispatch(deleteMessageById(bothId));
    };
    return (
        <ListItem key={item.id}>
            {item.author}: - <Paper className={classes.paper}>{item.text}</Paper>
            <Button onClick={deleteMessage}>
                <HighlightOff className={classes.deleteButton} />
            </Button>
        </ListItem>
    )

};