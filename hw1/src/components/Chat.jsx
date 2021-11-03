import React from "react";
import { ListItem, Paper, Button } from "@material-ui/core";
import { HighlightOff, Launch } from "@material-ui/icons";
import { makeStyles } from '@material-ui/core/styles';
import propTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
    wrapper: {
        display: "flex",
    },
    paper: {
        padding: theme.spacing(1),
        flexGrow: 1,
    },
    deleteButton: {
        color: "red",

    }
}));

export const Chat = (props) => {
    const classes = useStyles();
    let item = props.item;
    return (
        <ListItem className={classes.wrapper}>
            <Paper className={classes.paper}>
                <Button>
                    <HighlightOff className={classes.deleteButton} />
                </Button>
                {item.author}
                <Button><Launch /></Button>
            </Paper>
        </ListItem>);
};

Chat.propTypes = {
    item: propTypes.object,
};