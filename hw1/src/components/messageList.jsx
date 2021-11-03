import { React } from "react";
import { List, ListItem, Paper } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    list: {
        border: "none",
        marginBottom: theme.spacing(2)

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
                            {item.author}: - {item.text}
                        </ListItem>
                    );
                })}
            </Paper>
        </List>)
};