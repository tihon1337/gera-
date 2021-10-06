import React from "react";
import Mypost from "./Mypost/Mypost";
import s from './Profile.module.css'


function Profile() {
  return (
    <div >
      <div>
        <img src="https://i.mycdn.me/i?r=AzEPZsRbOZEKgBhR0XGMT1RkAUnc0tFzFCa74FE2vO423aaKTM5SRkZCeTgDn6uOyic" />
      </div>
      <div>ava + description</div>
      <Mypost/>
    </div>
  );
}

export default Profile;
