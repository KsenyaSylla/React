import { React, useState, useRef } from "react";
import { AppBar, Box, Button, Popper, Grow, Paper, ClickAwayListener, MenuList, MenuItem } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    header: {
        marginBottom: theme.spacing(2),
        padding: theme.spacing(3),
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    paper: {
        marginRight: theme.spacing(2),
    },
}));

export const Header = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const anchorRef = useRef(null);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    };
    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        }
    }
    return (
        <AppBar position={'static'} className={classes.header}>
            <Box><Link to="/"><HomeIcon style={{ color: 'white' }} /></Link></Box>
            <Box >
                <Button
                    ref={anchorRef}
                    aria-controls={open ? 'menu-list-grow' : undefined}
                    aria-haspopup="true"
                    onClick={handleToggle}
                >
                    <MenuIcon style={{ color: 'white' }} fontSize="large" />
                </Button>
                <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                    {({ TransitionProps, placement }) => (
                        <Grow
                            {...TransitionProps}
                            style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                        >
                            <Paper>
                                <ClickAwayListener onClickAway={handleClose}>
                                    <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                                        <MenuItem onClick={handleClose}><Link to="/profile">Profile</Link></MenuItem>
                                        <MenuItem onClick={handleClose}><Link to="/chats">Chats</Link></MenuItem>
                                    </MenuList>
                                </ClickAwayListener>
                            </Paper>
                        </Grow>
                    )}
                </Popper>
            </Box>
        </AppBar>
    );
};