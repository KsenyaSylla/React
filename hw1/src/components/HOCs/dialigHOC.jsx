import { React } from "react";
import { useSelector } from "react-redux";
import { getChatList } from "../../store/chats/chat/selectors";
import { Link, useParams } from "react-router-dom";
import { Button } from "@material-ui/core";
import { getMessageList } from "../../store/chats/messages/selector";



export const chatCheckedHOC = (Component) => {
    let WrapperContainer = (props) => {
        const { chatId } = useParams();
        const chatList = useSelector(getChatList);
        const chat = chatList.find((item) => item.id == chatId);

        if (!chat) {
            return (
                <>
                    <Button ><Link to="/chats">Back to chats</Link></Button>
                    <img src="https://previews.123rf.com/images/kaymosk/kaymosk1804/kaymosk180400006/100130939-error-404-page-not-found-error-with-glitch-effect-on-screen-vector-illustration-for-your-design-.jpg" alt="Page not found" />
                </>
            )
        }
        return <Component {...props} chat={chat} />
    }
    return WrapperContainer;
};