import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    
    const handleClick = () => setClick(!click);
    const closeMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    }

    useEffect(() => {
        showButton()
    }, [])

    window.addEventListener('resize', showButton)

    return (
        <>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo" onClick={closeMenu}>
                    TravelDeck 
                    <i className='fab fa-typo3' />
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? 'fas fa-times':'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active':'nav-menu'}>
                    <li className="nav-item">
                        <Link to="/about" className="nav-links" onClick={closeMenu}>
                            About Us
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/search" className="nav-links" onClick={closeMenu}>
                            Search
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/destinations" className="nav-links" onClick={closeMenu}>
                            Destinations
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/blogs" className="nav-links" onClick={closeMenu}>
                            Blogs
                        </Link>
                    </li>
                </ul>
                {/* {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>} */}
            </div>
        </nav>
        </>
    )
}

export default Navbar
