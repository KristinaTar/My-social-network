import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = ()=>{
    return <nav className={s.nav}>
        <div>
            {/* eslint-disable-next-line react/jsx-no-undef */}
            <NavLink to="/profile" activeClassName={s.active} className={s.navMenu}>Profile</NavLink>
        </div>
        <div>
            <NavLink to="/dialogues" activeClassName={s.active} className={s.navMenu}>Messages</NavLink>
        </div>
        <div>
            <NavLink to="/users" activeClassName={s.active} className={s.navMenu}>Users</NavLink>
        </div>
        <div>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a>News</a>
        </div>
        <div>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a>Music</a>
        </div>
        <div>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a>Settings</a>
        </div>
    </nav>
}
export default Navbar;
