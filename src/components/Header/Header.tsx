import React from 'react';
import style from "./Header.module.css"
function Header() {
    return (
        <header className={style.header}>
            <img src="https://static.rfstat.com/logo-presets/2116/thumbnail_dddf4458299b_1x.webp" alt="logo"/>
        </header>
    );
}

export default Header;