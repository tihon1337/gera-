import React from "react";
import s from "./Frends.module.css"
import {NavLink} from "react-router-dom";



const Frends =(props) =>{
return(
    <div className={s.Frends}>
        <div className={s.frendsItem}>
            <NavLink to="/frends" activeClassName={s.active}><p>hello world</p></NavLink>
        </div>
    </div>

)
}
export default Frends;