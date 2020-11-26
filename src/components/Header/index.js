import React, { useEffect, useState, useRef } from 'react';
import { Link, withRouter } from 'react-router-dom';

import './styles2.css';

import { ReactComponent as Controller } from '../../assets/svg/controller.svg';

const Header = props => {

    const [displayMenu, setDisplayMenu] = useState(false);

    

    const handleNavMenu = () => {
        displayMenu ? setDisplayMenu(false) : setDisplayMenu(true);
    }


    return (
        <header className='header'>

            <div className='container'>

                <div className='header-nav active-nav'>
                    <div className='logo' onClick={() => props.history.push('/')}>
                        <Controller />
                        <span className='logo-text'>GAMESPOT</span>
                    </div>
                    <div className='nav'>
                        <Link to='/games'><div id='games' className='nav-link'>OUR GAMES</div></Link>
                        <Link to='/contact'><div id='contact' className='nav-link'>HOW TO FIND US</div></Link>
                    </div>
                </div>

                <div className='mobile-nav'>

                    <div className='logo' onClick={() => props.history.push('/')}>
                        <Controller />
                        <span className='logo-text'>GAMESPOT</span>
                    </div>
                    
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

export default withRouter(Header);