import React, {useState} from 'react';
import {Link} from "react-router-dom"




const Navbar = () => {
    const [view, setView] = useState({})
    const displayHiddenNav = ()=>{
        setView({width:"100%"})
    }
    const closeHiddenNav = ()=>{
        setView({width:"0%"})
    }
    return (
        <nav>
            <div id="myNav" style={view} class="overlay">
                <li href="javascript:void(0)" className="closebtn" onClick={closeHiddenNav}>&times;</li>
                <ul class="overlay-content">
                    <li href="#">Home</li>
                    <li href="#">About</li>
                    <li href="#">Faq</li>
                </ul>
            </div>
            <div className="container-fluid navbarContainer">
                <div className="navbarBrand">
                    <h3>We<span>Japa</span></h3>
                </div>
                <button>
                    <span onClick={displayHiddenNav} className="fa fa-bars mfa-white"></span>
                </button>
                <div className="navbar">
                    <ul className="navbar-links">
                        <Link to="/login">
                            <li>Home</li>
                        </Link>
                        <li>About</li>
                        <li>Faq</li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;