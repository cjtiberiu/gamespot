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
                        <span className='logo-text'>VGAME DB</span>
                    </div>
                    <div className='nav'>
                        <Link to='/games'><div id='games' className='nav-link'>GAMES</div></Link>
                        <Link to='/contact'><div id='contact' className='nav-link'>CONTACT</div></Link>
                    </div>
                </div>

                <div className='mobile-nav' style={{ backgroundColor: props.location.pathname === '/' ? 'rgba(6, 40, 71, 0)' : 'rgba(6, 40, 71, 0.5)'}}>

                    <div className='logo' onClick={() => props.history.push('/')}>
                        <Controller />
                        {
                            props.location.pathname === '/' ? (<span className='logo-text'>VGAMES DB</span>) : null
                        }
                        
                    </div>
                    
                    <div className={`menu-btn ${displayMenu ? 'open' : ''}`} onClick={handleNavMenu}>
                        <div className="menu-btn__burger"></div>
                    </div>
                    {
                        !displayMenu ? null : (
                            <div className='mobile-menu'>
                                <Link to='/games'><div id='games' className='mobile-nav-link' onClick={() => setDisplayMenu(false)}>GAMES</div></Link>
                                <Link to='/contact'><div id='contact' className='mobile-nav-link' onClick={() => setDisplayMenu(false)}>CONTACT</div></Link>
                            </div>
                        )
                    }
                </div>

            </div>
            
        </header>
    )
};

export default withRouter(Header);