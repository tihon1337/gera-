import React from "react";
import s from './ProfileleInfo.module.css'
import Preloader from "../../Preloader/Preloader";
import Profile from "../Profile";
import ProfileStatus from "./ProfileStatus"

const ProfileInfo= (props)=> {
   if(!props.profile ) {
         return<Preloader/>
    }
    return (
        <div>
            {/*<div>
                <img src="https://i.mycdn.me/i?r=AzEPZsRbOZEKgBhR0XGMT1RkAUnc0tFzFCa74FE2vO423aaKTM5SRkZCeTgDn6uOyic" />
            </div>*/
                 <div className={s.descriptionBlock}>
                     <img src={props.profile.photos.large}/>
                     <ProfileStatus  />
                 </div>}
             </div>
         );
     }

     export default ProfileInfo;
