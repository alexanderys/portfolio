import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faBars } from '@fortawesome/free-solid-svg-icons';

let dropHidden = true;

function Navbar() {

    function dropdown() {
        console.log('clicked');
        const dropdown = document.querySelector('.dropdown');
        if (dropHidden) {
            dropdown.style.display = 'block';
            dropHidden = false;
        } else {
            dropdown.style.display = 'none';
            dropHidden = true;
        }
    }

    return (
        <>
            <nav>
                <FontAwesomeIcon icon={faCode} size="3x" className="nav-icon" />
                {/*  */}
                <div>
                    <button className="dropbtn">
                        <FontAwesomeIcon icon={faBars} size="2x" className="menu-icon" onClick={dropdown} />
                    </button>
                    {/*  */}
                    <ul className="dropdown-content">
                        <li>
                            <NavLink activeClassName="active" exact to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName="active" to="/about">About</NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName="active" to="/contact">Contact</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
            <ul className="dropdown">
                <li>
                    <Link onClick={dropdown} exact to="/">Home</Link>
                </li>
                <li>
                    <Link onClick={dropdown} to="/about">About</Link>
                </li>
                <li>
                    <Link onClick={dropdown} to="/contact">Contact</Link>
                </li>
            </ul>
        </>
    );
}

export default Navbar