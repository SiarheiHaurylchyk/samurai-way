import React from 'react';
import style from "./Nav.module.css"
import {NavLink} from "react-router-dom";
function Nav() {
    return (
        <nav className={style.nav}>
            <NavLink exact to="/" activeClassName={style.activeLink}>Profile</NavLink>
            <NavLink exact to="/dialogs" activeClassName={style.activeLink}>Message</NavLink>
            <NavLink exact to="/news" activeClassName={style.activeLink}>New</NavLink>
            <NavLink exact to="/music" activeClassName={style.activeLink}>Music</NavLink>
            <NavLink exact to="/settings" activeClassName={style.activeLink}>Settings</NavLink>
        </nav>
    );
}

export default Nav;