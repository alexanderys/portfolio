import React from 'react';
import Footer from '../components/Footer';

function Contact() {
    // state for form control
    return (
        <>
            <div className="form">
                <form>
                    <div>
                        <label htmlFor="name">Name
                        <input id="name" name="name" type="text" />
                        </label>
                        <label htmlFor="email">Email
                        <input id="email" name="email" type="email" />
                        </label>
                    </div>
                    <label htmlFor="message">Message
                    <textarea id="message" name="message" rows="10"></textarea>
                    </label>
                    <button type="submit">Submit</button>
                </form>
            </div>

            <Footer />
        </>
    )
}

export default Contact;