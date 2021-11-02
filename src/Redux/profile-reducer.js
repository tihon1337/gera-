const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
let initialState = {
    posts: [
        {id: 1, message: 'Hi a new massage', likesCount: 12},
        {id: 2, message: 'This seconde ange', likesCount: 13},
        {id: 3, message: 'This seconde mess', likesCount: 16},
        {id: 4, message: 'This seconde ', likesCount: 18},
        {id: 5, message: 'This secon', likesCount: 9},
    ],
    newPostText: 'it-kamasutra.com',
};

const profileReducer = (state =initialState,action)=> {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0,
            };
            let stateCopy = {...state};
            stateCopy.posts = [...state.posts];
            stateCopy.posts.push(newPost);
            stateCopy.newPostText = '';
            return stateCopy;
        }
        case UPDATE_NEW_POST_TEXT: {
            let stateCopy = { ...state}
            stateCopy.newPostText = action.newText;
            return stateCopy;
        }
        default:
            return state;

    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT, newText: text});
export default profileReducer;