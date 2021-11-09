import React from "react";
import styles from "./styles.module.css"
import * as axios from "axios";
import userPhoto from '../../assets/94-943097_stockvader-predicted-adig-user-profile-image-png.png'

let Users = (props) => {
    if (props.users.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response =>{
            props.setUsers(response.data.items)
        });

       /* props.setUsers([
                {id: 1, photoUrl: 'https://avatars.mds.yandex.net/get-zen_doc/3491078/pub_5ed3717ae1c2261710b4e3c8_5ed3914b932a8736ef34a981/scale_1200', followed: false, fullName: 'Dimitry', status: 'I am a boss', location: {city: ' Moscow', country: 'Russia'}},
                {id: 2, photoUrl: 'https://avatars.mds.yandex.net/get-zen_doc/3491078/pub_5ed3717ae1c2261710b4e3c8_5ed3914b932a8736ef34a981/scale_1200', followed: true, fullName: 'Boyan', status: 'I am from Serbia', location: {city: ' Belgrade', country: 'Serbia'}},
                {id: 3, photoUrl: 'https://avatars.mds.yandex.net/get-zen_doc/3491078/pub_5ed3717ae1c2261710b4e3c8_5ed3914b932a8736ef34a981/scale_1200', followed: false, fullName: 'Tihon', status: 'hero', location: {city: ' Donetsk', country: 'DPR'}},
            ]*/

    }

    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto  } className={styles.userPhoto}/>
                    </div>
                <div>

                    {u.followed

                        ? <button onClick={() => {
                            props.unfollow(u.id)
                        }}>Unfollow</button>
                        : <button onClick={() => {
                            props.follow(u.id)
                        }}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                <span>
                    <div>{"u.location.country"}</div>
                    <div>{"u.location.city"}</div>
                </span>
                </span>

            </div>)
        }
    </div>
}

export default Users;