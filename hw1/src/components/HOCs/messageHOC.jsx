import { React } from "react";
import { useDispatch } from "react-redux";
import { deleteMessageById } from "../../store/chats/messages/actions";
import { useParams } from "react-router-dom";

export const messageHOC = (Component) => {
    let WrapperContainer = (props) => {
        const item = props.item;
        const id = item.id;
        const { chatId } = useParams();
        const bothId = {
            "messageId": id,
            "chatId": chatId
        };
        const dispatch = useDispatch();
        const deleteMessage = () => {
            dispatch(deleteMessageById(bothId));
        };
        return (
            <Component {...props} chatId={chatId} deleteMessage={deleteMessage} />
        )
    }
    return WrapperContainer;
};