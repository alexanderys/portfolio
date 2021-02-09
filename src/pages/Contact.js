import React, { useState } from 'react';
import Footer from '../components/Footer';

function Contact() {
    const [inputs, setInputs] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [focus1, setFocus1] = useState(false);
    const [focus2, setFocus2] = useState(false);
    const [focus3, setFocus3] = useState(false);

    function handleFocus1() {
        setFocus1(!focus1);
    }
    function handleFocus2() {
        setFocus2(!focus2);
    }
    function handleFocus3() {
        setFocus3(!focus3);
    }

    function handleInputChange(e) {
        console.log(e.target.name + ': ' + e.target.value)
        const name = e.target.name;
        const value = e.target.value;

        setInputs({
            ...inputs,
            [name]: value
        });
    }

    function handleSubmit(e) {
        console.log(inputs);

        setInputs({ name: "", email: "", message: "" });
        //e.preventDefault();

    }

    return (
        <>
            <div className="form">
                <form onSubmit={handleSubmit} className="gform" method="POST" action="https://script.google.com/a/student.kyh.se/macros/s/AKfycbxJyzNFOZCkAiFuZ0MIhaDr7uk98UcIvgfRu_Ob/exec">
                    <div>
                        <label>Name
                        <input
                                className={focus1 ? 'focus1' : ''}
                                name="name"
                                type="text"
                                value={inputs.name}
                                onChange={handleInputChange}
                                onFocus={handleFocus1}
                                onBlur={handleFocus1} />
                        </label>
                        <label>Email
                        <input
                                className={focus2 ? 'focus2' : ''}
                                name="email"
                                type="email"
                                value={inputs.email}
                                onChange={handleInputChange}
                                onFocus={handleFocus2}
                                onBlur={handleFocus2}
                            />
                        </label>
                    </div>
                    <label>Message
                    <textarea
                            className={focus3 ? 'focus3' : ''}
                            name="message"
                            rows="10"
                            value={inputs.message}
                            onChange={handleInputChange}
                            onFocus={handleFocus3}
                            onBlur={handleFocus3}
                        >
                        </textarea>
                    </label>
                    <button type="submit">Submit</button>
                </form>
            </div>

            <Footer />
        </>
    )
}

export default Contact;