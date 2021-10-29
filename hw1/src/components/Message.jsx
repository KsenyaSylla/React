import '../index.css';
import { React, useState, useEffect } from "react";

const Message = (props) => {

    const [messageList, setMessageList] = useState([]);
    const addToList = () => {
        let input = document.querySelector(".input");
        let text = input.value;
        const newList = [...messageList, {
            text: text,
            author: "user"
        }];
        setMessageList(newList);
    };

    const preventDefault = () => {
        const form = document.querySelector(".sendMessage");
        form.addEventListener("click", (event) => { event.preventDefault() });
    };
    const botAnswer = () => {
        const newList = [...messageList, { text: "Hello, cheloveche", author: "bot" }];
        setMessageList(newList);
    };

    useEffect(() => {
        if (messageList.length === 0) {
            return;
        }
        if (messageList[messageList.length - 1].author === 'bot') {
            return;
        }
        setTimeout(() => {
            botAnswer();
        }, 1500);
    }, [messageList]);

    return (<div>
        <p className={"message"}> {props.message} </p>
        <div className={"list"}>
            <ul>
                {messageList.map((item) => (
                    <li key={messageList.indexOf(item)}>{item.author}: {item.text} </li>
                ))}
            </ul>
        </div>

        <form className={"sendMessage"} onClick={preventDefault}>
            <input type="text" className={"input"} />
            <button type="submit" className={"submit"} onClick={addToList}>Отправить</button>
        </form>

    </div>)
};
export default Message;