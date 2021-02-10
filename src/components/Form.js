import React, { useState } from 'react';

/* 
Form Functionality Acquired thorugh:
https://github.com/dwyl/learn-to-send-email-via-google-script-html-no-server
*/

function Form() {
    const [inputs, setInputs] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [errors, setErrors] = useState({
        name: "",
        email: "",
        message: ""
    })

    function handleValidationName(e) {
        console.log('Name validation ran');
        const name = e.target.name;
        /* let formIsValid = true; */

        // Name
        if (!inputs.name) {
            setErrors({
                ...errors,
                [name]: "Cannot be empty"
            });
            return;
        } else {
            setErrors({
                ...errors,
                [name]: ""
            });
        }

        if (typeof inputs.name !== "undefined") {
            if (!inputs.name.match(/^[a-zA-Z]+$/)) {
                /* formIsValid = false; */
                setErrors({
                    ...errors,
                    [name]: "Only letters"
                });
                return;
            } else {
                setErrors({
                    ...errors,
                    [name]: ""
                });
            }
        }
    }

    function handleValidationEmail(e) {
        console.log('Email validation ran');
        const name = e.target.name;
        // Email
        if (!inputs.email) {
            /* formIsValid = false; */
            setErrors({
                ...errors,
                [name]: "Cannot be empty"
            });
            return;
        } else {
            setErrors({
                ...errors,
                [name]: ""
            });
        }

        if (typeof inputs.email !== "undefined") {
            let lastAtPos = inputs.email.lastIndexOf('@');
            let lastDotPos = inputs.email.lastIndexOf('.');

            if (!(lastAtPos < lastDotPos && lastAtPos > 0 && inputs.email.indexOf('@@') == -1 && lastDotPos > 2 && (inputs.email.length - lastDotPos) > 2)) {
                /* formIsValid = false; */
                setErrors({
                    ...errors,
                    [name]: "Email is not valid"
                });
                return;
            } else {
                setErrors({
                    ...errors,
                    [name]: ""
                });
            }
        }
    }

    function handleValidationMessage(e) {
        console.log('Message validation ran');
        const name = e.target.name;
        if (!inputs.message) {
            /* formIsValid = false; */
            setErrors({
                ...errors,
                [name]: "Cannot be empty"
            });
        } else {
            setErrors({
                ...errors,
                [name]: ""
            });
        }
    }

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
        // timeout rensa fält
        console.log(inputs);

        const formElements = document.querySelector('.gform').elements;
        for (let i = 0; i < formElements.length; i++) {
            formElements[i].disabled = true;
            formElements[i].classList.add('disabled');
        }
        const text = document.querySelector('.invisible');
        text.classList.add('visible');

        setTimeout(function () {
            for (let i = 0; i < formElements.length; i++) {
                formElements[i].disabled = false;
                formElements[i].classList.remove('disabled');
                setInputs({ name: "", email: "", message: "" });
            }
            text.classList.remove('visible');
        }, 5000);
    }

    return (
        <section className="form">
            <form onSubmit={handleSubmit} className="gform" method="POST" action="https://script.google.com/a/student.kyh.se/macros/s/AKfycbxJyzNFOZCkAiFuZ0MIhaDr7uk98UcIvgfRu_Ob/exec">
                <div>
                    <label htmlFor="name">Name
                        <input
                            className={focus1 ? 'focus1' : ''}
                            id="name"
                            name="name"
                            type="text"
                            value={inputs.name}
                            onChange={handleInputChange}
                            onFocus={handleFocus1}
                            onBlur={e => {
                                handleFocus1();
                                handleValidationName(e);
                            }} />
                        <span style={{ color: "red" }}>{errors.name}</span>
                    </label>
                    <label htmlFor="email">Email
                        <input
                            className={focus2 ? 'focus2' : ''}
                            id="email"
                            name="email"
                            type="email"
                            value={inputs.email}
                            onChange={handleInputChange}
                            onFocus={handleFocus2}
                            onBlur={e => {
                                handleFocus2();
                                handleValidationEmail(e);
                            }}
                        />
                        <span style={{ color: "red" }}>{errors.email}</span>
                    </label>
                </div>
                <label htmlFor="message">Message
                    <textarea
                        className={focus3 ? 'focus3' : ''}
                        id="message"
                        name="message"
                        rows="10"
                        value={inputs.message}
                        onChange={handleInputChange}
                        onFocus={handleFocus3}
                        onBlur={e => {
                            handleFocus3();
                            handleValidationMessage(e);
                        }}
                    >
                    </textarea>
                    <span style={{ color: "red" }}>{errors.message}</span>
                </label>
                <button type="submit">Submit</button>

                <p className="invisible">
                    Thanks for reaching out! I will get back to you soon.
                    <br />New form submission possible in a few seconds
                </p>
            </form>
        </section >
    );
}

export default Form;