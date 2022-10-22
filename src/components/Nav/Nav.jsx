import React from 'react';
import './Nav.css';
import {NavLink} from "react-router-dom";

import navLogo from './../../assets/navLogo.svg'


const Nav = () => {
    return (
        <nav>
            <div className="container">
                <div className="nav__wrap">
                    <div>
                        <NavLink to='/'>
                            <img className='nav__logo' src={navLogo} alt=""/>
                        </NavLink>
                    </div>
                    <div>
                        <NavLink className='nav__link' to='/'>Головна</NavLink>
                        <NavLink className='nav__link' to='/learn'>Навчання</NavLink>
                        <a href="https://t.me/ViktorKyrylovych" className="nav__link nav__link__support">Підтримка</a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Nav