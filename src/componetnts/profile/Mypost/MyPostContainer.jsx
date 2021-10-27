import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/profile-reducer";
import MyPost from "./MyPost";
import StoreContext from "../../../StoreContex";


const MyPostContainer = (props) => {
    return (<StoreContext.Consumer>
            {(store) => {
                let state = store.getState();
                let addPost = () => {
                   store.dispatch(addPostActionCreator())
                }
                let onPostChange = (text) => {
                    store.dispatch(updateNewPostTextActionCreator(text));
                }

                return <MyPost updateNewPostText={onPostChange}
                               addPost={addPost}
                               posts={store.getState().profilePage.posts}
                               newPostText={store.getState().profilePage.newPostText}/>
            }
        }
        </StoreContext.Consumer>
    );
}

export default MyPostContainer;
