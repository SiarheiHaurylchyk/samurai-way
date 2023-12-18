import React from 'react';
import style from "./Nav.module.css"
import {NavLink} from "react-router-dom";
function Nav() {
    return (
        <nav className={style.nav}>
            <NavLink to="main" activeClassName={style.activeLink}>Profile</NavLink>
            <NavLink to="dialogs" activeClassName={style.activeLink}>Message</NavLink>
            <NavLink to="news" activeClassName={style.activeLink}>New</NavLink>
            <NavLink to="music" activeClassName={style.activeLink}>Music</NavLink>
            <NavLink to="settings" activeClassName={style.activeLink}>Settings</NavLink>
        </nav>
    );
}

export default Nav;