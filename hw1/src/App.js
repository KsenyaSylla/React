import { Container } from "@material-ui/core";
import { Header } from "./components/header.jsx";
import { Main } from "./components/main.jsx";
import { Info } from "./components/profile/info.jsx";
import { Routes, Route } from "react-router";
import Message from "./components/chats/Message.jsx";
import { makeStyles } from "@material-ui/styles";
import { ChatFull } from "./components/chats/chatFull.jsx";

const useStyles = makeStyles((theme) => ({
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
                    <Route path="/profile" element={<Info />} />
                    <Route exact path="/chats/:chatId" element={<ChatFull />} />
                    <Route exact path="/chats" element={<Message />} />
                    <Route path="/" element={<Main />} />
                </Routes>
            </Container>
        </>
    );
}

export default App;