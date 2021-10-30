import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const Message = (props) => {
    return (<
        p className={"message"}> {props.message} < /p>
        )
};
        export default  Message;