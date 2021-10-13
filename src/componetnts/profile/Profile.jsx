import React from "react";
import Mypost from "./Mypost/Mypost";
import s from "./Profile.module.css"
import ProfileleInfo from "./ProfileleInfo/ProfileleInfo";
import {addPost} from "../../Redux/state";


function Profile(props) {
    return (
        <div>
            <ProfileleInfo/>
            <Mypost posts={props.state.posts} addPost={props.addPost}/>
        </div>
    );
}

export default Profile;
