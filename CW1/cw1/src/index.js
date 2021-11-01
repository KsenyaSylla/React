import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
const rootElement = document.getElementById("root");

ReactDOM.render( <
    ClassComponent user = {
        {
            name: "Ivan",
            id: 1
        }
    }
    className = "button"
    onClick = {
        () => {
            alert(fn1("Alex"));
        }
    }
    />,
    rootElement
);
reportWebVitals();

class ClassComponent extends React.Component {
    render() {
        return <div >
            <
            div > { this.props.user.name } { this.props.user.id } < /div> <
        button type = { this.props.type }
        className = { this.props.className }
        onClick = { this.props.onClick } > Button < /button> < /
        div >
    }
}