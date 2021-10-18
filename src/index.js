import React from "react";
import ReactDOM from "react-dom";
import store from './Redux/state';
import App from "./App";
//import * as serviceWorker from './serviceWorker'
import {BrowserRouter} from "react-router-dom";


let renderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={store.addPost.bind(store)}
                 updateNewPostText={store.updateNewPostText.bind(store)}/>
        </BrowserRouter>, document.getElementById("root"));
}

renderEntireTree(store.getState());
store.subscribe(renderEntireTree);
//serviceWorker.unregister();