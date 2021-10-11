import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

let posts = [
    {id: 1, message: 'Hi a new massage', likesCount: 12},
    {id: 2, message: 'This seconde ange', likesCount: 13},
    {id: 3, message: 'This seconde mess', likesCount: 16},
    {id: 4, message: 'This seconde ', likesCount: 18},
    {id: 5, message: 'This secon', likesCount: 9},
]
let dialogs = [
    {id: 1, name: 'Dimych'},
    {id: 2, name: 'Andrey'},
    {id: 3, name: 'Sveta'},
    {id: 4, name: 'Sasha'},
    {id: 5, name: 'Viktor'},
    {id: 6, name: 'Valera'},
]

let messages =
    [{id: 1, message: 'Hi'},
        {id: 2, message: 'How are you'},
        {id: 3, message: 'yo'},
        {id: 4, message: 'yo'},
        {id: 5, message: 'yo'},
        {id: 6, message: 'yo'},
    ]
ReactDOM.render(<App  posts={posts} dialogs={dialogs} messages={messages}/>,
    document.getElementById("root"));
