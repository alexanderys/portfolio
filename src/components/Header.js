import React from 'react';
import { useLocation } from 'react-router-dom'
import Navbar from './Navbar';

const codeOpen = '<>';
const codeClose = '</>';

function Header(props) {
    let content;
    const location = useLocation();

    switch (location.pathname) {
        case '/':
            content = props.content.home;
            break;
        case '/about':
            content = props.content.about;
            break;
        case '/contact':
            content = props.content.contact;
            break;
    }

    return (
        <div className="header">
            <Navbar />
            <div className="header-background">
                <div>
                    <span>{codeOpen}</span>
                    <h1>{content[0]}</h1>
                    <p>{content[1]}</p>
                    <span>{codeClose}</span>
                </div>
            </div>
        </div>
    );
}


export default Header;