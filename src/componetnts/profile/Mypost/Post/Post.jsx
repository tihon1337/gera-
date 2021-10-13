import React from "react";
import s from "./Post.module.css";

function Post(props) {
  return (
    <div className={s.item}>
      <img src="https://cs4.pikabu.ru/post_img/big/2015/01/06/6/1420535289_1370983918.jpg" />
      {props.message}
      <div>
        <span>like</span>
      </div>
    </div>
  );
}

export default Post;
