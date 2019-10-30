import React from 'react';
import style from './Navbar.module.css'; 
import {NavLink} from 'react-router-dom';
 
const Navbar = () => {
    return (
        <nav className={style.nav}>
            <ul className="sidebar-item">
                <li><NavLink className={`${style.item} ${style.active}`} to='/profile'>Profile</NavLink></li>
                <li><NavLink className={style.item} to='/dialogs'>Messages</NavLink></li>
                <li><NavLink className={style.item} to='/news'>News</NavLink></li>
                <li><NavLink className={style.item} to='/music'>Music</NavLink></li>
                <li><NavLink className={style.item} to='/settings'>Settings</NavLink></li>
            </ul>
        </nav>
    )
};

export default Navbar;