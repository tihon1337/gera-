import React from "react";
import ProfileInfo from "./ProfileleInfo/ProfileInfo";
import MyPostContainer from "./Mypost/MyPostContainer";


function Profile(props) {
    return (
        <div>
            <ProfileInfo/>
            <MyPostContainer />
        </div>
    );
}

export default Profile;
