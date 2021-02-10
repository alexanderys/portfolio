import React from 'react';
import { Link } from 'react-router-dom'

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

function Presentation() {
    return (
        <section className="presentation">
            {/* <FontAwesomeIcon icon={faCode} size="2x" className="home-icon" /> */}
            {/* <h2 className="code-open">{codeOpen}</h2> */}
            <p className="doctype">{doctype}</p>
            <p className="html-tag">{htmlStart}</p>
            <p className="head-tag">{headStart}</p>
            <p className="title-tag">{title}</p>
            <p className="head-tag">{headEnd}</p>
            <p className="body-tag">{bodyStart}</p>
            <p className="p-tag">{pStart}</p>
            <p className="p-text">
                Hi! My name is Alexander Yarar Sellgren. I'm studying to become a front-end developer at <a href="https://kyh.se/" target="_blank" title="https://www.kyh.se/">KYH</a> vocational university in Stockholm, Sweden. <Link to="/about">Read more</Link>
            </p>
            <p className="p-tag">{pEnd}</p>
            <p className="body-tag">{bodyEnd}</p>
            <p className="html-tag html-end">{htmlEnd}</p>
            {/* <h2 className="code-close">{codeClose}</h2> */}
        </section>
    );
}

export default Presentation;