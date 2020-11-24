import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

const Header = () => {

    const [displayMenu, setDisplayMenu] = useState(false);

    const handleNavMenu = () => {
        displayMenu ? setDisplayMenu(false) : setDisplayMenu(true);
    }

    useEffect(() => {
        console.log(displayMenu);
    }, [displayMenu])

    return (
        <header className='header'>

            <div className='container'>

                <div className='header-nav active-nav'>
                    <div className='nav'>
                        <Link to='/games'><div id='games' className='nav-link'>OUR GAMES</div></Link>
                        <Link to='/contact'><div id='contact' className='nav-link'>HOW TO FIND US</div></Link>
                    </div>
                </div>

                <div className='mobile-nav'>
                    {/* <div className='mobile-acces' onClick={handleNavMenu}>
                        <div className='bar' style={{ 'transform': `${displayMenu ? 'rotate(-45deg)' : ''}`}}></div>
                        <div className='bar' style={{ 'visibility': `${displayMenu ? 'hidden' : 'visible'}`}}></div>
                        <div className='bar'></div>
                    </div> */}
                    <div className={`menu-btn ${displayMenu ? 'open' : ''}`} onClick={handleNavMenu}>
                        <div className="menu-btn__burger"></div>
                    </div>
                    {
                        !displayMenu ? null : (
                            <div className='mobile-menu'>
                                <Link to='/games'><div id='games' className='mobile-nav-link' onClick={() => setDisplayMenu(false)}>OUR GAMES</div></Link>
                                <Link to='/contact'><div id='contact' className='mobile-nav-link' onClick={() => setDisplayMenu(false)}>HOW TO FIND US</div></Link>
                            </div>
                        )
                    }
                </div>

            </div>
            
        </header>
    )
};

export default Header;