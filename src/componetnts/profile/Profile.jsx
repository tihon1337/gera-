import React from "react";
import Mypost from "./Mypost/Mypost";
import ProfileleInfo from "./ProfileleInfo/ProfileleInfo";


function Profile(props) {
    return (
        <div>
            <ProfileleInfo/>
            <Mypost posts={props.profilePage.posts}
                    newPostText={props.profilePage.newPostText}
                    dispatch={props.dispatch}/>
        </div>
    );
}

export default Profile;
