import React from "react";
import Mypost from "./Mypost/Mypost";
import ProfileleInfo from "./ProfileleInfo/ProfileleInfo";


function Profile(props) {
    return (
        <div>
            <ProfileleInfo/>
            <Mypost posts={props.profilePage.posts}
                    newPostText={props.profilePage.newPostText}
                    updateNewPostText={props.updateNewPostText}
                    addPost={props.addPost}/>
        </div>
    );
}

export default Profile;
