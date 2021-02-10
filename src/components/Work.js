import React from 'react';

import arkaden from '../images/arkaden.png';
import quire from '../images/quire.png';
import nasaapi from '../images/nasaapi.png';

function Work() {
    return (
        <section className="work">
            <h2>Selected work</h2>
            <div className="card-container">
                <div className="card">
                    <a href="https://alexanderys.github.io/individual-project-1/" target="_blank">
                        <div className="img-card">
                            <img src={arkaden} alt="screenshot from my website Arkaden" />
                        </div>
                    </a>
                    <p>Arkaden</p>

                    <a href="https://github.com/alexanderys/individual-project-1" target="_blank"><p className="github">Link to Github</p></a>

                </div>
                <div className="card">
                    <a href="https://viktor-hultman.github.io/quire_notebook_assignment_paperclip/intro.html" target="_blank">
                        <div className="img-card">
                            <img src={quire} alt="screenshot from a notebook web app that i participated in creating" />
                        </div>
                    </a>
                    <p>Quire notebook</p>

                    <a href="https://github.com/Viktor-Hultman/quire_notebook_assignment_paperclip" target="_blank"><p className="github">Link to Github</p></a>
                </div>
                <div className="card">
                    <a href="#">
                        <div className="img-card">
                            <img src={nasaapi} alt="screenshot from my website where i implement some of NASA's open APIs" />
                        </div>
                    </a>

                    <p>NASA Api playground</p>
                    <a href="https://github.com/alexanderys/nasa-apis" target="_blank"><p className="github">Link to Github</p></a>
                </div>
            </div>
        </section>
    );
}

export default Work;