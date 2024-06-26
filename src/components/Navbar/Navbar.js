import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import './Navbar.css';
import  Button  from "../Button/Button.js";
function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        }
        else {
            setButton(true);
        }
    };
    useEffect(() => { showButton();
     }, []);
    window.addEventListener('resize', showButton);
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                         Ethio Gift 
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <Link to='/' className="nav-links" onClick={closeMobileMenu}>
                                Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/services' className="nav-links" onClick={closeMobileMenu}>
                                Services</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/products' className="nav-links" onClick={closeMobileMenu}>
                                Products</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/cultures' className="nav-links" onClick={closeMobileMenu}>
                                Cultures</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/man-mades' className="nav-links" onClick={closeMobileMenu}>
                                Man-mades</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/natures' className="nav-links" onClick={closeMobileMenu}>
                                Natures</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/sign-up' className="nav-links-mobile" onClick={closeMobileMenu}>
                                Sign Up</Link>
                        </li>
                        
                    </ul>
                    
                    <div>
                        {button && <Button buttonStyle='btn--outline' Children="SIGN UP"/>}
                    </div>
                  

                </div>
            </nav>
        </>
    )
}
export default Navbar;