import React from "react";
import s from './ProfileleInfo.module.css'

function ProfileleInfo() {
    return (
        <div >

            <div>
                <img src="https://i.mycdn.me/i?r=AzEPZsRbOZEKgBhR0XGMT1RkAUnc0tFzFCa74FE2vO423aaKTM5SRkZCeTgDn6uOyic" />
            </div>
            <div className={s.descriptionBlock}>
                ava + description</div>

        </div>
    );
}

export default ProfileleInfo;
