import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Nav.scss';

const Nav = () => {

    return (
        <nav className='nav-container'>
            <div className='icon-container'>
                <div className='icon' />
            </div>
            <div className='list-container'>
                <ul className='list'>
                    <Link to='/'>
                        <li>Home</li>
                    </Link>
                    <Link to='/about'>
                        <li>About</li>
                    </Link>
                    <Link to='/note'>
                        <li>Create</li>
                    </Link>
                </ul>
            </div>
        </nav>
    )
}

export default Nav;