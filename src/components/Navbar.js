import React from 'react';
import { NavLink } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';

function Navbar(props) {
    return (
        <nav>
            <FontAwesomeIcon icon={faCode} size="3x" className="nav-icon" />
            <p>{props.temp}&#8451;</p>
            <ul>
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
        </nav>
    );
}

export default Navbar