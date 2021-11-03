import { React } from "react";
import { AppBar, Box } from "@material-ui/core";

export const Header = () => {
    return (
        <AppBar position={'static'} m={2} p={2} className={"message"}>
            <Box>Hello, React</Box>
        </AppBar>
    )
}