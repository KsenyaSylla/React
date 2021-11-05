import { React } from "react";
import { List, ListItem, Paper } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import propTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
    list: {
        border: "none",
        marginBottom: theme.spacing(2)
    },
    paper: {
        padding: theme.spacing(1)
    }
}));

export const MessageList = (props) => {
    const classes = useStyles();
    return (
        <List className={classes.list}>
            <Paper>
                {props.messageList.map((item) => {
                    return (
                        <ListItem key={item.id}>
                            {item.author}: - <Paper className={classes.paper}>{item.text}</Paper>
                        </ListItem>
                    );
                })}
            </Paper>
        </List>)
};

MessageList.propTypes = {
    messageList: propTypes.array,
};