import React from 'react';

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
                <h2>Main skills</h2>
                <div>
                    <div className="html-skill">
                        <p className="before">HTML</p>
                        {/*                         <p className="after">
                            <p className="doctype">{doctype}</p>
                            <p className="html-tag">{htmlStart}</p>
                            <p className="head-tag">{headStart}</p><br />
                            <p className="head-tag">{headEnd}</p>
                            <p className="body-tag">{bodyStart}</p><br />
                            <p className="body-tag">{bodyEnd}</p>
                            <p className="html-tag html-end">{htmlEnd}</p>
                        </p> */}
                    </div>

                    <div className="css-skill"><p>CSS</p></div>
                </div>
                <div>
                    <div className="js-skill"><p>JavaScript</p></div>
                    <div className="react-skill"><p>React</p></div>
                </div>
            </div>
        </>
    )
}

export default About;