import React from "react";
import s from "./Mypost.module.css";
import Post from "./Post/Post";

function Mypost() {

    let posts = [
        {id: 1, message: 'Hi a new massage', likesCount: 12},
        {id: 2, message: 'This seconde messange', likesCount: 11},


    ]
    let postsElements =
        posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);
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
                {postsElements}

            </div>
        </div>
    );
}

export default Mypost;
