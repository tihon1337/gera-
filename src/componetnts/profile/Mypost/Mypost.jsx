import React from "react";
import s from "./Mypost.module.css";
import Post from "./Post/Post";

function Mypost() {
    return (
        <div className={s.postaBlock}>
           <h3> My post</h3>
            <div>
                <div>
                    <textarea> </textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                <Post message='Hi a new massage' likesCount="0"/>
                <Post message='This seconde messange' likesCount="23"/>

            </div>
        </div>
    );
}

export default Mypost;
