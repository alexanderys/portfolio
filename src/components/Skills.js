import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import { faHtml5, faCss3Alt, faJs, faReact, faSass, faBootstrap, faGitSquare } from '@fortawesome/free-brands-svg-icons';

function Skills() {
    return (
        <section className="skills">
            <h2>Skills</h2>
            <div>
                <div>
                    <div className="html">
                        <FontAwesomeIcon icon={faHtml5} className="skill-icon" />
                        <p>HTML5</p>
                    </div>
                    <div className="css">
                        <FontAwesomeIcon icon={faCss3Alt} className="skill-icon" />
                        <p>CSS3</p>
                    </div>
                </div>
                <div>
                    <div className="js">
                        <FontAwesomeIcon icon={faJs} className="skill-icon" />
                        <p>JavaScript</p>
                    </div>
                    <div className="react">
                        <FontAwesomeIcon icon={faReact} className="skill-icon" />
                        <p>React</p>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <div className="sass">
                        <FontAwesomeIcon icon={faSass} className="skill-icon" />
                        <p>SASS</p>
                    </div>
                    <div className="bootstrap">
                        <FontAwesomeIcon icon={faBootstrap} className="skill-icon" />
                        <p>Bootstrap</p>
                    </div>
                </div>
                <div>
                    <div className="git">
                        <FontAwesomeIcon icon={faGitSquare} className="skill-icon" />
                        <p>Git</p>
                    </div>
                    <div className="responsive">
                        <FontAwesomeIcon icon={faMobileAlt} className="skill-icon" />
                        <p>Responsive design</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;
