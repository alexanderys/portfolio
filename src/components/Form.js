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
    });

    function handleValidationName(e) {
        console.log('Name validation ran');
        const name = e.target.name;

        if (!inputs.name) {
            setErrors({
                ...errors,
                [name]: "Cannot be empty"
            });
        } else if (typeof inputs.name !== "undefined") {
            if (!inputs.name.match(/^[a-zA-Z]+$/)) {
                setErrors({
                    ...errors,
                    [name]: "Only letters"
                });
            } else {
                setErrors({
                    ...errors,
                    [name]: ""
                });
            }
        } else {
            setErrors({
                ...errors,
                [name]: "",
            });
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
        } else if (typeof inputs.email !== "undefined") {
            let lastAtPos = inputs.email.lastIndexOf('@');
            let lastDotPos = inputs.email.lastIndexOf('.');

            if (!(lastAtPos < lastDotPos && lastAtPos > 0 && inputs.email.indexOf('@@') == -1 && lastDotPos > 2 && (inputs.email.length - lastDotPos) >= 2)) {
                setErrors({
                    ...errors,
                    [name]: "Email is not valid"
                });
            } else {
                setErrors({
                    ...errors,
                    [name]: ""
                });
            }
        } else {
            setErrors({
                ...errors,
                [name]: ""
            });
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
        } else {
            setErrors({
                ...errors,
                [name]: ""
            });
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
                            onBlur={handleValidationName}
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
                            onBlur={handleValidationEmail}
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
                        onBlur={handleValidationMessage}
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