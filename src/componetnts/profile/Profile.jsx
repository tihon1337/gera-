import React from "react";
import Mypost from "./Mypost/Mypost";
import s from "./Profile.module.css"
import ProfileleInfo from "./ProfileleInfo/ProfileleInfo";


function Profile(props) {
    return (
        <div>
            <ProfileleInfo/>
            <Mypost posts={props.state.posts}/>
        </div>
    );
}

export default Profile;
