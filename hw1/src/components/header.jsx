import { React } from "react";
import { AppBar, Box, Menu } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    header: {
        marginBottom: theme.spacing(2),
        padding: theme.spacing(3),
    }
}));

export const Header = () => {
    const classes = useStyles();
    return (
        <AppBar position={'static'} m={2} p={2} className={classes.header}>
            <Box>Hello, React</Box>
            <Menu></Menu>
        </AppBar>
    )
}