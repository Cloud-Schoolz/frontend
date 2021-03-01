import React from 'react'
import "./Home.css";
import arrow from "../assets/arrow.svg";

function Home() {
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
                                <form className="form">
                                    <label for="accountType">Choose Your Account:</label>
                                    <select id="accountType" name="accountType">
                                        <option value="admin">Admin</option>
                                        <option value="volunteer">Volunteer</option>
                                        <option value="student">Student</option>
                                    </select>
                                </form>
                                <button>Sign Up</button>
                                <button>Log In</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
