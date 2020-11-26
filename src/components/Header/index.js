import React, { useEffect, useState, useRef } from 'react';
import { Link, withRouter } from 'react-router-dom';

import './styles.css';

const Header = props => {

    const [displayMenu, setDisplayMenu] = useState(false);

    console.log(props);
    

    const handleNavMenu = () => {
        displayMenu ? setDisplayMenu(false) : setDisplayMenu(true);
    }

    useEffect(() => {
        console.log(displayMenu);
    }, [displayMenu])

    return (
        <header className='header'>

            <div className='container'>

                <div className='page-title'>
                    { props.location.pathname === '/games' ? 'Games' : null}
                    { props.location.pathname === '/contact' ? 'Contact' : null}
                </div>

                <div className='header-nav active-nav'>
                    <div className='nav'>
                        <Link to='/games'><div id='games' className='nav-link'>OUR GAMES</div></Link>
                        <Link to='/contact'><div id='contact' className='nav-link'>HOW TO FIND US</div></Link>
                    </div>
                </div>

                <div className='mobile-nav'>
                    
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