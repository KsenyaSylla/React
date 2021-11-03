import React from "react";
import { ListItem, ListItemText, Paper, Button } from "@material-ui/core";
import { HighlightOff, Launch } from "@material-ui/icons";
import { makeStyles } from '@material-ui/core/styles';
import propTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(1),
        flexGrow: 1,
        display: "flex",
        alignItems: "center"
    },
    deleteButton: {
        color: "red",

    }
}));

export const Chat = (props) => {
    const classes = useStyles();
    let item = props.item;
    return (
        <ListItem >
            <Paper className={classes.paper}>
                <Button>
                    <HighlightOff className={classes.deleteButton} />
                </Button>
                <ListItemText>{item.author}</ListItemText>
                <Button><Launch /></Button>
            </Paper>
        </ListItem>);
};

Chat.propTypes = {
    item: propTypes.object,
};