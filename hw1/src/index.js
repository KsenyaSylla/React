import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import App from "./App.js"
import { BrowserRouter } from "react-router-dom";
import { Store } from "./store/store.js";

ReactDOM.render(
    <React.StrictMode>
        <Provider store={Store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
    ,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();