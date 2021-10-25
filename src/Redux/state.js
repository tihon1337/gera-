import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import dialogsReducer from "./dialogs-reducer";


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
        dialogsPage: {
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
            newMessageBody: ''
        },
        sidebar: {}
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
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubscriber(this._state);
        }

}




export default store;
window.store = store;
