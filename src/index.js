import React from "react";
import ReactDOM from "react-dom";
import store from './Redux/origenal-redux/redux-store';
import App from "./App";
//import * as serviceWorker from './serviceWorker'
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";


let renderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>, document.getElementById("root"));
}

renderEntireTree(store.getState());
store.subscribe(() => {
    let state = store.getState();
    renderEntireTree(state);
});
//serviceWorker.unregister();