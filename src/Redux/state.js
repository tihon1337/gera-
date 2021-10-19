let store = {
    _state: {
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
    },
    _callSubscriber() {
        console.log('State changed');
    },
    getState() {
        return this._state
    },

    subscribe(observe) {
        this._callSubscriber = observe;

    },
    _addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0,
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    _updateNewPostText(newText) {

        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },

    dispatch(action) { // {type: 'ADD-POST'}
        if(action.type === 'ADD-POST'){
            this._addPost()
        }
        else if (action.type === 'UPDATE-NEW-POST-TEXT'){
            this._updateNewPostText(action.newText)
        }
    }






}
export default store;
window.store = store;
