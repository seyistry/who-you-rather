import * as React from "react";
import * as ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.css';
import "./index.css";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducers from "./reducers";
import App from "./components/App";
import middleware from './middleware'

const store = createStore(reducers, middleware)

function ColorfulBorder() {
    return (
        <React.Fragment>
            <ul className="border-container">
                <li
                    className="border-item"
                    style={{ background: "var(--red)" }}
                />
                <li
                    className="border-item"
                    style={{ background: "var(--blue)" }}
                />
                <li
                    className="border-item"
                    style={{ background: "var(--pink)" }}
                />
                <li
                    className="border-item"
                    style={{ background: "var(--yellow)" }}
                />
                <li
                    className="border-item"
                    style={{ background: "var(--aqua)" }}
                />
            </ul>
        </React.Fragment>
    );
}

ReactDOM.render(
    <React.StrictMode>
        <ColorfulBorder />
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);
