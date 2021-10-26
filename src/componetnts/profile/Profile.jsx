import React from "react";
import ProfileInfo from "./ProfileleInfo/ProfileInfo";
import MyPostContainer from "./Mypost/MyPostContainer";


function Profile(props) {
    return (
        <div>
            <ProfileInfo/>
            <MyPostContainer store={props.store} />
        </div>
    );
}

export default Profile;
