import '../index.css';
import { React, useState, useEffect } from "react";

const Message = (props) => {

    const [messageList, setMessageList] = useState([]);
    const [value, setValue] = useState("");
    const onChangeMessageInput = (event) => {
        setValue(event.target.value);
    };

    const sendMessage = (author, text) => {
        const newMessageList = [...messageList];
        const newMessage = {
            author,
            text
        };
        newMessageList.push(newMessage);
        setMessageList(newMessageList);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        sendMessage("user", value);
        setValue("");
    };

    useEffect(() => {
        if (messageList.length === 0) {
            return;
        }
        const tail = messageList[messageList.length - 1];
        if (tail.author === "bot") {
            return;
        } else {
            const timerId = setTimeout(() => {
                sendMessage("bot", "Hello, human");
            }, 1500);
            return () => {
                clearTimeout(timerId);
            };
        }
    }, [messageList]);

    return (
        <div >
            <h1 className={"message"}>Hello, React</h1>
            <div className={"list"}>
                {messageList.map((item) => {
                    return (
                        <ul>
                            <li>
                                {item.author}: - {item.text}
                            </li>
                        </ul>
                    );
                })}
            </div>

            <form className={"sendMessage"} onSubmit={onSubmit}>
                <input
                    value={value}
                    onChange={onChangeMessageInput}
                    type="text"
                    className={"input"}
                />
                <button type="submit" className={"submit"}>
                    Отправить
                </button>
            </form>
        </div>
    );
}
export default Message;