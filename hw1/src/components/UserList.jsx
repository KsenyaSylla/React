import { React, useState } from "react";
import { List, ListItem, Paper, Button } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { HighlightOff, Launch } from "@material-ui/icons";

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

export const UserList = (props) => {
    const classes = useStyles();
    const [userList, setUserList] = useState([{
        "id": 1,
        "author": "Ivan Ivanov",
        "text": "Hello, Denis"
    },
    {
        "id": 2,
        "author": "Petr Petrov",
        "text": "I'm glad"
    },
    {
        "id": 3,
        "author": "Maria Murina",
        "text": "Nice."
    }]);

    return (
        <>
            <List>
                {userList.map((item) => {
                    return (
                        <ListItem key={item.id} className={classes.wrapper}>
                            <Paper className={classes.paper}>
                                <Button>
                                    <HighlightOff className={classes.deleteButton} />
                                </Button>
                                {item.author}
                                <Button><Launch /></Button>
                            </Paper>
                        </ListItem>
                    )
                })
                }
            </List >
        </>)
};