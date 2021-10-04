import React from "react";
import  s from './Navbar.module.css';

//  let s = {
//    'nav' : 'Navbar_module_nav__3oN34',
//    'item' : 'Navbar_module_item__NB0RX'
//  }
let classesNew =`${s.item} ${s.active}`; 
function Navbar() {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <a>Profile</a>
      </div>
      <div className={`${s.item} ${s.active}`}>
        <a>Messages</a>
      </div>
      <div className={s.item}>
        <a>News</a>
      </div>
      <div className={s.item}>
        <a>Music</a>
      </div>
      <div className={s.item}>
        <a>Settings</a>
      </div>
    </nav>
  );
}

export default Navbar;