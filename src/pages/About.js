import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import { faHtml5, faCss3Alt, faJs, faReact, faSass, faBootstrap, faGitSquare } from '@fortawesome/free-brands-svg-icons';

const codeOpen = '<>';
const codeClose = '</>';

const doctype = '<!DOCTYPE html>';
const htmlStart = '<html>';
const htmlEnd = '</html>';
const headStart = '<head>';
const headEnd = '</head>';
const title = '<title>Presentation</title>';
const bodyStart = '<body>';
const bodyEnd = '</body>';
const pStart = '<p>';
const pEnd = '</p>';

function About() {
    return (
        <>
            <div className="about">
                <span>{codeOpen}</span>
                <p>
                    Hi! My name is Alexander Yarar Sellgren. I'm 27 years old and studying to become a front-end developer at <a href="https://kyh.se/" target="_blank" title="https://www.kyh.se/">KYH</a> vocational university in Stockholm, Sweden. I'm currently on my second term and will graduate in the summer of 2022. <br /><br />I have a love-hate relationship with coding, altough I enjoy it most of the time and think it's really cool. I am currently learning the framework React, which this portfolio site is built upon. Apart form that I enjoy experimenting with CSS to create cool designs as well as different animations. I'm eager to learn more and develop my skills.
                </p>
                <span>{codeClose}</span>
            </div>

            <div className="skills">
                <h2>Skills</h2>
                <div>
                    <div className="html">
                        <FontAwesomeIcon icon={faHtml5} className="skill-icon" />
                        <p>HTML</p>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faCss3Alt} className="skill-icon css" />
                        <p>CSS</p>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faJs} className="skill-icon js" />
                        <p>JavaScript</p>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faReact} className="skill-icon react" />
                        <p>React</p>
                    </div>
                </div>
                <div>
                    <div>
                        <FontAwesomeIcon icon={faSass} className="skill-icon sass" />
                        <p>SASS</p>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faBootstrap} className="skill-icon bootstrap" />
                        <p>Bootstrap</p>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faGitSquare} className="skill-icon git" />
                        <p>Git</p>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faMobileAlt} className="skill-icon responsive" />
                        <p>Responsive design</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;