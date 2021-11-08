import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Nav.scss';

const Nav = () => {

    return (
        <nav className='nav-container'>
            <ul className='list'>
                <Link to='/'>
                    <li>Home</li>
                </Link>
                <Link to='/about'>
                    <li>About</li>
                </Link>
                <Link to='/blog'>
                    <li>Blog</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Nav;