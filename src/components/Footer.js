import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faReact, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

function Footer() {

    return (
        <footer>
            <FontAwesomeIcon icon={faCode} size="3x" className="footer-icon" />
            <div>
                <a href="https://github.com/alexanderys?tab=repositories" target="_blank">
                    <FontAwesomeIcon icon={faGithub} size="2x" className="footer-link-icon" />
                </a>
                <a href="mailto:alexander.yararsellgren@student.kyh.se">
                    <FontAwesomeIcon icon={faEnvelope} size="2x" className="footer-link-icon" />
                </a>
                <a href="https://www.linkedin.com/in/alexander-yarar-sellgren-179615132/" target="_blank">
                    <FontAwesomeIcon icon={faLinkedinIn} size="2x" className="footer-link-icon" />
                </a>
            </div>
            <p>
                <FontAwesomeIcon icon={faReact} className="footer-react-icon" />
                <span>Created with React</span><br /><span>&copy; 2021 aYs</span>
            </p>
        </footer>
    );
}

export default Footer;