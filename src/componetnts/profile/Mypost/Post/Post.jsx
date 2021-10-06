import React from "react";
import s from "./Post.module.css";

function Post(props) {
  return (
    <div className={s.item}>
      <img src="https://yt3.ggpht.com/ytc/AAUvwng9fYEjvGGLK3xmj_fS8mGbDT8f0carGYgUVZU5=s900-c-k-c0x00ffffff-no-rj" />
      {props.message}
      <div>
        <span>like</span>
      </div>
    </div>
  );
}

export default Post;
