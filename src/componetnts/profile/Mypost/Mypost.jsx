import React from "react";
import s from "./Mypost.module.css";
import Post from "./Post/Post";

function Mypost() {
  return (
    <div>
      my post
      <div>
        <textarea> </textarea>
        <button>Add post</button>
      </div>
      <div className={s.post}>
        <Post message='Hi a new massage'/>
        <Post message='This seconde messange'/>
        
      </div>
    </div>
  );
}

export default Mypost;
