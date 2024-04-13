import React, { useState } from 'react';
import './Nav.css'
import logo from "../assets/logo..jpg"
import { Link } from 'react-scroll'
import menu from "./menu.png"
const Nav = () => {
    const [showMenu,setShowMenu]=useState(false);
    return (
        <nav className='navbar'>
            <img src={logo} alt='Logo' className='logo' />
            <div className='desktopMenu'>
                <Link activeClass='active' to='intro' spy={true} offset={-100} duration={500} className='desktopMenuListitem'>Home </Link>
                <Link activeClass='active' to='skills' spy={true} offset={-50} duration={500} className='desktopMenuListitem'>About </Link>
                <Link activeClass='active' to='works' spy={true} offset={-50} duration={500} className='desktopMenuListitem'>Portfolio </Link>
                <Link activeClass='active' to='contact' spy={true} offset={-100} duration={500} className='desktopMenuListitem'> Contact </Link>
            </div>
            <img src={menu} alt='Menu' className='Menunav' onClick={()=>setShowMenu(!showMenu)} />
            <div className='navMenu' style={{display: showMenu? 'flex':'none'}}>
                <Link activeClass='active' to='intro' spy={true} offset={-100} duration={500} className='Listitem' onClick={()=>setShowMenu(false)}>Home </Link>
                <Link activeClass='active' to='skills' spy={true} offset={-50} duration={500} className='Listitem'  onClick={()=>setShowMenu(false)}>About </Link>
                <Link activeClass='active' to='works' spy={true} offset={-50} duration={500} className='Listitem'  onClick={()=>setShowMenu(false)}>Portfolio </Link>
                <Link activeClass='active' to='contact' spy={true} offset={-100} duration={500} className='Listitem' onClick={()=>setShowMenu(false)}> Contact </Link>
            </div>
        </nav>
    );
};

export default Nav;