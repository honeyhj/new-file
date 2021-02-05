import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../logo-2.png'
const NavBar = () => {
    function open() {
    document.getElementById('mobile').style.display = "block";
};
function close() {
    document.getElementById('mobile').style.display = "none";
};
    return (
        <nav id="navbar">
            <div className="tie">
                <div className="navbar-wrapper">
                    <div className="logo">
                        <div className="img">
                            <img src={logo} alt="logo" className="resize"/>
                        </div>
                    </div>
                    <div className="menus">
                        <ul>
                            <li><Link><span>home</span></Link></li>
                            <li><Link><span>about us</span></Link></li>
                            <li><Link><span>our services</span></Link></li>
                            <li><Link><span>our history</span></Link></li>
                            <li><Link><span>contact us</span></Link></li>
                        </ul>
                    </div>
                    <div className="bar-icon">
                        <i class="icofont-navigation-menu open" onClick={open}></i>
                    </div>
                    <div className="mobile-menus">
                        <div id="mobile" className="mobile">
                            <div className="mobile-overlay">
                                <ul>
                                    <li><Link><span>home</span></Link></li>
                                    <li><Link><span>about us</span></Link></li>
                                    <li><Link><span>our services</span></Link></li>
                                    <li><Link><span>our history</span></Link></li>
                                    <li><Link><span>contact us</span></Link></li>
                                </ul>
                            </div>
                            <i  class="icofont-close-circled close" onClick={close}></i>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;