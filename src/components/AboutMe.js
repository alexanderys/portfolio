import React from 'react';

import portrait from '../images/portrait.jpg';

const codeOpen = '<>';
const codeClose = '</>';

function AboutMe() {
    return (
        <section className="about">
            <div className="portrait">
                <img src={portrait} alt="portrait of myself as an avator emoji" />
            </div>
            <div className="about-text">
                <span>{codeOpen}</span>
                <p>
                    Hi! My name is Alexander Yarar Sellgren. I'm 27 years old and studying to become a front-end developer at <a href="https://kyh.se/" target="_blank" title="https://www.kyh.se/">KYH</a> vocational university in Stockholm, Sweden. I'm currently on my second term and will graduate in the summer of 2022. <br /><br />I have a love-hate relationship with coding, although I enjoy it most of the time and think it's really cool. I am currently learning the framework React, which this portfolio site is built upon. Apart form that I enjoy experimenting with CSS to create cool designs as well as different animations. I'm eager to learn more and develop my skills.
                </p>
                <span>{codeClose}</span>
            </div>
        </section>
    );
}

export default AboutMe;