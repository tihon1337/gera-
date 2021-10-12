import React from "react";
import s from './Navbar.module.css';
import Frends from "../Menu/Frends/Frends"

import {NavLink, Route} from "react-router-dom";


let classesNew = `${s.item} ${s.active}`;

function Navbar(props) {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/profile" activeClassName={s.active}>Profile</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to="/dialogs" activeClassName={s.active}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/news" activeClassName={s.active}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/music" activeClassName={s.active}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/settings" activeClassName={s.active}>Settings</NavLink>
            </div>

            <div className={s.Frends}>
                <div className={s.frendsItem}>
                    <div className={s.Frends}>
                        <NavLink to="/frends" activeClassName={s.active}>Frends</NavLink>
                    </div>
                    <Route path='/frends' render={() => <Frends/>}/>
                    <Route path='/frends' render={() => <Frends/>}/>
                    <Route path='/frends' render={() => <Frends/>}/>
                </div>


            </div>


        </nav>

    );
}

export default Navbar;