import { Container } from "@material-ui/core";
import { Header } from "./components/header.jsx";
import { Main } from "./components/main.jsx";
import { Profile } from "./components/profile/profile.jsx";
import { Routes, Route } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import { ChatFull } from "./components/chats/chatFull.jsx";
import { ChatList } from "./components/chats/ChatList.jsx";

const useStyles = makeStyles(() => ({
    center: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    }
}));


function App() {
    const classes = useStyles();
    return (
        <>
            <Header />
            <Container className={classes.center}>
                <Routes>
                    <Route path="/profile" element={<Profile />} />
                    <Route exact path="/chats/:chatId" element={<ChatFull />} />
                    <Route exact path="/chats" element={<ChatList />} />
                    <Route path="/" element={<Main />} />
                </Routes>
            </Container>
        </>
    );
};
export default App;