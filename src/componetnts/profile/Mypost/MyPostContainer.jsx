import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/profile-reducer";
import MyPost from "./MyPost";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            dispatch(updateNewPostTextActionCreator(text))

        },
        addPost: () => {
            dispatch(addPostActionCreator())
        }
    }
}
    const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost);
    export default MyPostContainer;
