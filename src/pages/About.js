import React from 'react';
import portrait from '../images/portrait.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import { faHtml5, faCss3Alt, faJs, faReact, faSass, faBootstrap, faGitSquare } from '@fortawesome/free-brands-svg-icons';

const codeOpen = '<>';
const codeClose = '</>';

function About() {
    return (
        <>
            <div className="about">
                <div className="portrait">
                    <img src={portrait} alt="portrait" />
                </div>
                <div className="about-text">
                    <span>{codeOpen}</span>
                    <p>
                        Hi! My name is Alexander Yarar Sellgren. I'm 27 years old and studying to become a front-end developer at <a href="https://kyh.se/" target="_blank" title="https://www.kyh.se/">KYH</a> vocational university in Stockholm, Sweden. I'm currently on my second term and will graduate in the summer of 2022. <br /><br />I have a love-hate relationship with coding, although I enjoy it most of the time and think it's really cool. I am currently learning the framework React, which this portfolio site is built upon. Apart form that I enjoy experimenting with CSS to create cool designs as well as different animations. I'm eager to learn more and develop my skills.
                </p>
                    <span>{codeClose}</span>
                </div>
            </div>

            <div className="skills">
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
            </div>
        </>
    )
}

export default About;