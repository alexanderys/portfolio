import React from 'react';

import arkaden from '../images/arkaden.png';
import quire from '../images/quire.png';
import nasaapi from '../images/nasaapi.png';

function Work() {
    return (
        <div className="work">
            <h2>Selected work</h2>
            <div className="card-container">
                <div className="card">
                    <a href="https://alexanderys.github.io/individual-project-1/" target="_blank">
                        <div className="img-card">
                            <img src={arkaden} alt="" />
                        </div>
                        <p>Arkaden</p>
                    </a>
                </div>
                <div className="card">
                    <div className="img-card">
                        <img src={quire} alt="" />
                    </div>
                    <p>Quire notebook</p>
                </div>
                <div className="card">
                    <div className="img-card">
                        <img src={nasaapi} alt="" />
                    </div>
                    <p>NASA Api playground</p>
                </div>
            </div>
        </div>
    );
}

export default Work;