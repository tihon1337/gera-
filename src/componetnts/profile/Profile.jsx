import React from "react";
import Mypost from "./Mypost/Mypost";
import s from "./Profile.module.css"
import ProfileleInfo from "./ProfileleInfo/ProfileleInfo";


function Profile() {
    return (
        <div>
            <ProfileleInfo/>
            <Mypost/>
        </div>
    );
}

export default Profile;
