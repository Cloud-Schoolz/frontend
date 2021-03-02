import React, { useState } from 'react'
// import { Route, Switch } from "react-router-dom";
import "./Home.css";
import arrow from "../assets/arrow.svg";

//import Modals
// import AdminSignUp from "./modals/adminSignUp";
// import AdminLogIn from "./modals/adminLogIn";

function Home() {
    const [account, setAccount] = useState('');
    
    window.onclick = function(event) {
        let signUpModal = document.getElementById('modalContainerSignUp');
        let logInModal = document.getElementById('modalContainerLogin');
        if (event.target === signUpModal  || event.target === logInModal) {
            signUpModal.style.display = "none";
            logInModal.style.display = "none";
        }
    }
    
    const closeModal = () => {
        let signUpModal = document.getElementById('modalContainerSignUp');
        let logInModal = document.getElementById('modalContainerLogin');
        signUpModal.style.display = "none";
        logInModal.style.display = "none";
    }

    const openModal = (ev) => {
        let signUpModal = document.getElementById('modalContainerSignUp');
        let logInModal = document.getElementById('modalContainerLogin');
        ev.target.innerHTML === "Sign Up" ? signUpModal.style.display = "block" : logInModal.style.display = "block";
    }

    const submit = (ev) => {
        ev.preventDefault();
        let accountType = document.getElementById('accountType');
        setAccount(accountType.value);
    }

    console.log(account);

    return (
        <div className="Home">
            <div className="header">
                <hr id="hr" className="hr"/>
                <h1>School in the Cloud</h1>
                <hr className="hr"/>
                <h3>School in the Cloud is a platform that trains senior volunteers to teach students in a group or individual setting.</h3>
                <a id="headerButton" href="#mainRegion"><button>Learn More<img src={arrow} alt="arrow"/></button></a>
            </div>
            <div id="mainRegion" className="actionContainer">
                <div className="actionOuter">
                    <div className="actionInner">
                        <hr className="hr"/>
                        <h2>Get Started Today</h2>
                        <hr id="hr" className="hr"/>
                        <div className="contentContainer">
                            <h4>First select the type of account to be directed to the correct portal.</h4>
                            <hr id="verticalSeparator"/>
                            <div className="formContainer">
                                <form className="form" onSubmit={submit}>
                                    <label for="accountType">Choose Your Account:</label>
                                    <select id="accountType" name="accountType">
                                        <option value="admin">Admin</option>
                                        <option value="volunteer">Volunteer</option>
                                        <option value="student">Student</option>
                                    </select>
                                    <button type="submit" onClick={openModal}>Sign Up</button>
                                    <button type="submit" onClick={openModal}>Log In</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="modalContainerSignUp">
                <div id="modal">
                    <div id="modalHeader">
                        <h1>Sign Up</h1>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" id="close" onClick={closeModal}><path fill="#1E213F" fill-rule="evenodd" d="M11.95.636l1.414 1.414L8.414 7l4.95 4.95-1.414 1.414L7 8.414l-4.95 4.95L.636 11.95 5.586 7 .636 2.05 2.05.636 7 5.586l4.95-4.95z" opacity=".5"/></svg>
                    </div>
                    <hr className="modalHr"/>
                    <div id="modalFormContainer">
                        <form id="modalForm">
                            <label htmlFor="name">Name:
                                <input 
                                  className="inputs"
                                  name="name"
                                  type="text"
                                />
                            </label>
                            <label htmlFor="email">Email:
                                <input 
                                  className="inputs"
                                  name="email"
                                  type="email"
                                />
                            </label>
                            <label htmlFor="password">Password:
                                <input 
                                  className="inputs"
                                  name="password"
                                  type="password"
                                />
                            </label>
                        </form>
                        <hr id="bottomModalHr" className="modalHr"/>
                        <button id="modalButton">Sign Up!</button>
                    </div>
                </div>
            </div>
            <div id="modalContainerLogin">
                <div id="modalLogin">
                    <div id="modalHeader">
                        <h1>Log In</h1>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" id="close" onClick={closeModal}><path fill="#1E213F" fill-rule="evenodd" d="M11.95.636l1.414 1.414L8.414 7l4.95 4.95-1.414 1.414L7 8.414l-4.95 4.95L.636 11.95 5.586 7 .636 2.05 2.05.636 7 5.586l4.95-4.95z" opacity=".5"/></svg>
                    </div>
                    <hr className="modalHr"/>
                    <div id="modalFormContainer">
                        <form id="modalForm">
                            <label htmlFor="email">Email:
                                <input 
                                  className="inputs"
                                  name="email"
                                  type="email"
                                />
                            </label>
                            <label htmlFor="password">Password:
                                <input 
                                  className="inputs"
                                  name="password"
                                  type="password"
                                />
                            </label>
                        </form>
                        <hr id="bottomModalHr" className="modalHr"/>
                        <button id="modalButton">Log In!</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
