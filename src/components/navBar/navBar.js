import React from 'react';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from './NavbarElements';

const Navbar = () => {
    return (
        <>
        <Nav>
            <Bars />
            <NavMenu>
                <NavLink to='/' activeStyle>
                    Home
                </NavLink>
                <NavLink to='/about' activeStyle>
                    About
                </NavLink>
                <NavLink to='/projects' activeStyle>
                    Projects
                </NavLink>
            </NavMenu>
        </Nav>
        </>
    );
}

export default Navbar;