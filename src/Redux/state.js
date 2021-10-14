import {renderEntireTree} from "../render";

let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi a new massage', likesCount: 12},
            {id: 2, message: 'This seconde ange', likesCount: 13},
            {id: 3, message: 'This seconde mess', likesCount: 16},
            {id: 4, message: 'This seconde ', likesCount: 18},
            {id: 5, message: 'This secon', likesCount: 9},
        ],
        newPostText: 'it-kamasutra.com',
    },
    messagesPage: {
        dialogs: [
            {id: 1, name: 'Dimych'},
            {id: 2, name: 'Andrey'},
            {id: 3, name: 'Sveta'},
            {id: 4, name: 'Sasha'},
            {id: 5, name: 'Viktor'},
            {id: 6, name: 'Valera'},
        ],
        messages: [{id: 1, message: 'Hi'},
            {id: 2, message: 'How are you'},
            {id: 3, message: 'yo'},
            {id: 4, message: 'yo'},
            {id: 5, message: 'yo'},
            {id: 6, message: 'yo'},
        ],
    },
}
export let addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0,
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText='';
    renderEntireTree(state);
}
export let updateNewPostText = (newText) => {

    state.profilePage.newPostText = newText;
    renderEntireTree(state);
}
export default state;
