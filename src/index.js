import React from "react";
import ReactDOM from "react-dom";
import store from './Redux/origenal-redux/redux-store';
import App from "./App";
//import * as serviceWorker from './serviceWorker'
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>, document.getElementById("root"));


//serviceWorker.unregister();