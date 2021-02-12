import React, { useState } from 'react';

/* 
Form Functionality Acquired thorugh:
https://github.com/dwyl/learn-to-send-email-via-google-script-html-no-server
*/
let submitReady = [false, false, false];

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
    });

    const [submit, setSubmit] = useState(true);

    function submitCheck() {
        console.log(submitReady);
        if (submitReady[0] && submitReady[1] && submitReady[2]) {
            console.log('Ready');
            setSubmit(false);
            document.querySelector('button').classList.remove('disabled');
        }
    }

    function handleValidationName(e) {
        console.log('Name validation ran');
        const name = e.target.name;

        if (!inputs.name) {
            setErrors({
                ...errors,
                [name]: "Cannot be empty"
            });
            submitReady[0] = false;
        } else if (typeof inputs.name !== "undefined") {
            if (!inputs.name.match(/^[a-zA-Z]+$/)) {
                setErrors({
                    ...errors,
                    [name]: "Only letters"
                });
                submitReady[0] = false;
            } else {
                setErrors({
                    ...errors,
                    [name]: ""
                });
                submitReady[0] = true;
            }
        } else {
            setErrors({
                ...errors,
                [name]: "",
            });
            submitReady[0] = true;
        }
    }

    function handleValidationEmail(e) {
        console.log('Email validation ran');
        const name = e.target.name;

        if (!inputs.email) {
            setErrors({
                ...errors,
                [name]: "Cannot be empty"
            });
            submitReady[1] = false;
        } else if (typeof inputs.email !== "undefined") {
            let lastAtPos = inputs.email.lastIndexOf('@');
            let lastDotPos = inputs.email.lastIndexOf('.');

            if (!(lastAtPos < lastDotPos && lastAtPos > 0 && inputs.email.indexOf('@@') == -1 && lastDotPos > 2 && (inputs.email.length - lastDotPos) >= 2)) {
                setErrors({
                    ...errors,
                    [name]: "Email is not valid"
                });
                submitReady[1] = false;
            } else {
                setErrors({
                    ...errors,
                    [name]: ""
                });
                submitReady[1] = true;
            }
        } else {
            setErrors({
                ...errors,
                [name]: ""
            });
            submitReady[1] = true;
        }
    }

    function handleValidationMessage(e) {
        console.log('Message validation ran');
        const name = e.target.name;

        if (!inputs.message) {
            setErrors({
                ...errors,
                [name]: "Cannot be empty"
            });
            submitReady[2] = false;
        } else {
            setErrors({
                ...errors,
                [name]: ""
            });
            submitReady[2] = true;
        }
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
            submitReady = [false, false, false];
            setSubmit(true);
            document.querySelector('button').classList.add('disabled');
        }, 5000);
    }

    return (
        <section className="form">
            <form onSubmit={handleSubmit} className="gform" method="POST" action="https://script.google.com/a/student.kyh.se/macros/s/AKfycbxJyzNFOZCkAiFuZ0MIhaDr7uk98UcIvgfRu_Ob/exec">
                <div>
                    <label htmlFor="name">Name
                        <input
                            id="name"
                            name="name"
                            type="text"
                            value={inputs.name}
                            onChange={handleInputChange}
                            onBlur={(e) => {
                                handleValidationName(e);
                                submitCheck();
                            }}
                        />
                        <span style={{ color: "red" }}>{errors.name}</span>
                    </label>
                    <label htmlFor="email">Email
                        <input
                            id="email"
                            name="email"
                            type="email"
                            value={inputs.email}
                            onChange={handleInputChange}
                            onBlur={(e) => {
                                handleValidationEmail(e);
                                submitCheck();
                            }}
                        />
                        <span style={{ color: "red" }}>{errors.email}</span>
                    </label>
                </div>
                <label htmlFor="message">Message
                    <textarea
                        id="message"
                        name="message"
                        rows="10"
                        value={inputs.message}
                        onChange={handleInputChange}
                        onBlur={(e) => {
                            handleValidationMessage(e);
                            submitCheck();
                        }}
                    >
                    </textarea>
                    <span style={{ color: "red" }}>{errors.message}</span>
                </label>
                <button type="submit" className="disabled" disabled={submit}>Submit</button>

                <p className="invisible">
                    Thanks for reaching out! I will get back to you soon.
                    <br />New form submission possible in a few seconds
                </p>
            </form>
        </section >
    );
}

export default Form;