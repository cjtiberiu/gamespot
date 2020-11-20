import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

const Header = () => {

    return (
        <header className='header'>

            <div className='container'>

                <div className='header-nav active-nav'>
                    <div className='nav'>
                        <div id='about' className='nav-link'>ABOUT</div>
                        <Link to='/games'><div id='games' className='nav-link'>GAMES</div></Link>
                        <Link to='/contact'><div id='contact' className='nav-link'>CONTACT</div></Link>
                    </div>
                </div>

            </div>
            
        </header>
    )
};

export default Header;