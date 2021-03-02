import React, { useState, useEffect } from 'react'
// import { Route, Switch } from "react-router-dom";
import "./Home.css";
import arrow from "../assets/arrow.svg";

//import Modals
// import AdminSignUp from "./modals/adminSignUp";
// import AdminLogIn from "./modals/adminLogIn";

function Home() {
    const [account, setAccount] = useState('');
    const [parameter, setParameter] = useState('');

    useEffect(() => {
        let accountType = document.getElementById('accountType');
        setAccount(accountType.value);
    }, [])
    
    window.onclick = function(event) {
        // Grabbing Elements
        let signUpModal = document.getElementById('modalContainerSignUp');
        let logInModal = document.getElementById('modalContainerLogin');
        let volunteerSignUp = document.getElementById('modalContainerVolunteer');
        // Closing Modals if you click outside of them on the Window
        if (event.target === signUpModal  || event.target === logInModal || event.target === volunteerSignUp) {
            signUpModal.style.display = "none";
            logInModal.style.display = "none";
            volunteerSignUp.style.display = "none";
        }
    }
    
    const closeModal = () => {
        // Grabbing Elements
        let signUpModal = document.getElementById('modalContainerSignUp');
        let logInModal = document.getElementById('modalContainerLogin');
        let volunteerSignUp = document.getElementById('modalContainerVolunteer');
        // Closing the Modals
        signUpModal.style.display = "none";
        logInModal.style.display = "none";
        volunteerSignUp.style.display = "none";
    }

    const openModal = (ev) => {
        // Grabbing Elements
        let signUpModal = document.getElementById('modalContainerSignUp');
        let logInModal = document.getElementById('modalContainerLogin');
        let volunteerSignUp = document.getElementById('modalContainerVolunteer');
        // Logic handling what modal pops up
        if(account === "volunteer" && ev.target.innerHTML === "Sign Up") {
            volunteerSignUp.style.display = "block";
            let newParameter = ev.target.id;
            setParameter(newParameter);
        } else if(ev.target.innerHTML === "Sign Up") {
            signUpModal.style.display = "block";
            let newParameter = ev.target.id;
            setParameter(newParameter);
        } else {
            logInModal.style.display = "block";
            let newParameter = ev.target.id;
            setParameter(newParameter);
        }
    }

    console.log(parameter);

    const handleChange = () => {
        let accountType = document.getElementById('accountType');
        setAccount(accountType.value);
        console.log(account);
    }

    const handleSubmit = (ev) => {
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
                                <form className="form" onSubmit={handleSubmit}>
                                    <label for="accountType">Choose Your Account:</label>
                                    <select onChange={handleChange} id="accountType" name="accountType">
                                        <option value="admin">Admin</option>
                                        <option value="volunteer">Volunteer</option>
                                        <option value="student">Student</option>
                                    </select>
                                    <button id="register" type="submit" onClick={openModal}>Sign Up</button>
                                    <button id="login" type="submit" onClick={openModal}>Log In</button>
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
            <div id="modalContainerVolunteer">
                <div id="modalVolunteer">
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
                            <hr id="volunteerExtraHr"/>
                            <label for="availability">Choose Your Availability:</label>
                            <select className="inputs" id="availability" name="availability">
                                <option value="Monday">Monday</option>
                                <option value="Tuesday">Tuesday</option>
                                <option value="Wednesday">Wednesday</option>
                                <option value="Thursday">Thursday</option>
                                <option value="Friday">Friday</option>
                                <option value="Saturday">Saturday</option>
                                <option value="Sunday">Sunday</option>
                                <option value="Weekdays">Weekdays</option>
                                <option value="Weekends">Weekends</option>
                            </select>
                            <label for="country">Choose Your Country:</label>
                            <select id="country" name="country" size="5">
                                <option value="1">Afghanistan</option>
                                <option value="2">Aland Islands</option>
                                <option value="3">Albania</option>
                                <option value="4">Algeria</option>
                                <option value="5">American Samoa</option>
                                <option value="6">Andorra</option>
                                <option value="7">Angola</option>
                                <option value="8">Anguilla</option>
                                <option value="9">Antarctica</option>
                                <option value="10">Antigua And Barbuda</option>
                                <option value="11">Argentina</option>
                                <option value="12">Armenia</option>
                                <option value="13">Aruba</option>
                                <option value="14">Australia</option>
                                <option value="15">Austria</option>
                                <option value="16">Azerbaijan</option>
                                <option value="17">The Bahamas</option>
                                <option value="18">Bahrain</option>
                                <option value="19">Bangladesh</option>
                                <option value="20">Barbados</option>
                                <option value="21">Belarus</option>
                                <option value="22">Belgium</option>
                                <option value="23">Belize</option>
                                <option value="24">Benin</option>
                                <option value="25">Bermuda</option>
                                <option value="26">Bhutan</option>
                                <option value="27">Bolivia</option>
                                <option value="28">Bosnia and Herzegovina</option>
                                <option value="29">Botswana</option>
                                <option value="30">Bouvet Island</option>
                                <option value="31">Brazil</option>
                                <option value="32">British Indian Ocean Territory</option>
                                <option value="33">Brunei</option>
                                <option value="34">Bulgaria</option>
                                <option value="35">Burkina Faso</option>
                                <option value="36">Burundi</option>
                                <option value="37">Cambodia</option>
                                <option value="38">Cameroon</option>
                                <option value="39">Canada</option>
                                <option value="40">Cape Verde</option>
                                <option value="41">Cayman Islands</option>
                                <option value="42">Central African Republic</option>
                                <option value="43">Chad</option>
                                <option value="44">Chile</option>
                                <option value="45">China</option>
                                <option value="46">Christmas Island</option>
                                <option value="47">Cocos (Keeling) Islands</option>
                                <option value="48">Colombia</option>
                                <option value="49">Comoros</option>
                                <option value="50">Congo</option>
                                <option value="51">The Democratic Republic Of The Congo</option>
                                <option value="52">Cook Islands</option>
                                <option value="53">Costa Rica</option>
                                <option value="54">Cote D'Ivoire (Ivory Coast)</option>
                                <option value="55">Croatia (Hrvatska)</option>
                                <option value="56">Cuba</option>
                                <option value="57">Cyprus</option>
                                <option value="58">Czech Republic</option>
                                <option value="59">Denmark</option>
                                <option value="60">Djibouti</option>
                                <option value="61">Dominica</option>
                                <option value="62">Dominican Republic</option>
                                <option value="63">East Timor</option>
                                <option value="64">Ecuador</option>
                                <option value="65">Egypt</option>
                                <option value="66">El Salvador</option>
                                <option value="67">Equatorial Guinea</option>
                                <option value="68">Eritrea</option>
                                <option value="69">Estonia</option>
                                <option value="70">Ethiopia</option>
                                <option value="71">Falkland Islands</option>
                                <option value="72">Faroe Islands</option>
                                <option value="73">Fiji Islands</option>
                                <option value="74">Finland</option>
                                <option value="75">France</option>
                                <option value="76">French Guiana</option>
                                <option value="77">French Polynesia</option>
                                <option value="78">French Southern Territories</option>
                                <option value="79">Gabon</option>
                                <option value="80">The Gambia</option>
                                <option value="81">Georgia</option>
                                <option value="82">Germany</option>
                                <option value="83">Ghana</option>
                                <option value="84">Gibraltar</option>
                                <option value="85">Greece</option>
                                <option value="86">Greenland</option>
                                <option value="87">Grenada</option>
                                <option value="88">Guadeloupe</option>
                                <option value="89">Guam</option>
                                <option value="90">Guatemala</option>
                                <option value="91">Guernsey and Alderney</option>
                                <option value="92">Guinea</option>
                                <option value="93">Guinea-Bissau</option>
                                <option value="94">Guyana</option>
                                <option value="95">Haiti</option>
                                <option value="96">Heard Island and McDonald Islands</option>
                                <option value="97">Honduras</option>
                                <option value="98">Hong Kong S.A.R.</option>
                                <option value="99">Hungary</option>
                                <option value="100">Iceland</option>
                                <option value="101">India</option>
                                <option value="102">Indonesia</option>
                                <option value="103">Iran</option>
                                <option value="104">Iraq</option>
                                <option value="105">Ireland</option>
                                <option value="106">Israel</option>
                                <option value="107">Italy</option>
                                <option value="108">Jamaica</option>
                                <option value="109">Japan</option>
                                <option value="110">Jersey</option>
                                <option value="111">Jordan</option>
                                <option value="112">Kazakhstan</option>
                                <option value="113">Kenya</option>
                                <option value="114">Kiribati</option>
                                <option value="115">North Korea</option>
                                <option value="116">South Korea</option>
                                <option value="117">Kuwait</option>
                                <option value="118">Kyrgyzstan</option>
                                <option value="119">Laos</option>
                                <option value="120">Latvia</option>
                                <option value="121">Lebanon</option>
                                <option value="122">Lesotho</option>
                                <option value="123">Liberia</option>
                                <option value="124">Libya</option>
                                <option value="125">Liechtenstein</option>
                                <option value="126">Lithuania</option>
                                <option value="127">Luxembourg</option>
                                <option value="128">Macau S.A.R.</option>
                                <option value="129">Macedonia</option>
                                <option value="130">Madagascar</option>
                                <option value="131">Malawi</option>
                                <option value="132">Malaysia</option>
                                <option value="133">Maldives</option>
                                <option value="134">Mali</option>
                                <option value="135">Malta</option>
                                <option value="136">Isle of Man</option>
                                <option value="137">Marshall Islands</option>
                                <option value="138">Martinique</option>
                                <option value="139">Mauritania</option>
                                <option value="140">Mauritius</option>
                                <option value="141">Mayotte</option>
                                <option value="142">Mexico</option>
                                <option value="143">Micronesia</option>
                                <option value="144">Moldova</option>
                                <option value="145">Monaco</option>
                                <option value="146">Mongolia</option>
                                <option value="147">Montenegro</option>
                                <option value="148">Montserrat</option>
                                <option value="149">Morocco</option>
                                <option value="150">Mozambique</option>
                                <option value="151">Myanmar</option>
                                <option value="152">Namibia</option>
                                <option value="153">Nauru</option>
                                <option value="154">Nepal</option>
                                <option value="155">Bonaire, Sint Eustatius and Saba</option>
                                <option value="156">The Netherlands</option>
                                <option value="157">New Caledonia</option>
                                <option value="158">New Zealand</option>
                                <option value="159">Nicaragua</option>
                                <option value="160">Niger</option>
                                <option value="161">Nigeria</option>
                                <option value="162">Niue</option>
                                <option value="163">Norfolk Island</option>
                                <option value="164">Northern Mariana Islands</option>
                                <option value="165">Norway</option>
                                <option value="166">Oman</option>
                                <option value="167">Pakistan</option>
                                <option value="168">Palau</option>
                                <option value="169">Palestinian Territory Occupied</option>
                                <option value="170">Panama</option>
                                <option value="171">Papua New Guinea</option>
                                <option value="172">Paraguay</option>
                                <option value="173">Peru</option>
                                <option value="174">Philippines</option>
                                <option value="175">Pitcairn Island</option>
                                <option value="176">Poland</option>
                                <option value="177">Portugal</option>
                                <option value="178">Puerto Rico</option>
                                <option value="179">Qatar</option>
                                <option value="180">Reunion</option>
                                <option value="181">Romania</option>
                                <option value="182">Russia</option>
                                <option value="183">Rwanda</option>
                                <option value="184">Saint Helena</option>
                                <option value="185">Saint Kitts And Nevis</option>
                                <option value="186">Saint Lucia</option>
                                <option value="187">Saint Pierre and Miquelon</option>
                                <option value="188">Saint Vincent And The Grenadines</option>
                                <option value="189">Saint-Barthelemy</option>
                                <option value="190">Saint-Martin (French part)</option>
                                <option value="191">Samoa</option>
                                <option value="192">San Marino</option>
                                <option value="193">Sao Tome and Principe</option>
                                <option value="194">Saudi Arabia</option>
                                <option value="195">Senegal</option>
                                <option value="196">Serbia</option>
                                <option value="197">Seychelles</option>
                                <option value="198">Sierra Leone</option>
                                <option value="199">Singapore</option>
                                <option value="200">Slovakia</option>
                                <option value="201">Slovenia</option>
                                <option value="202">Solomon Islands</option>
                                <option value="203">Somalia</option>
                                <option value="204">South Africa</option>
                                <option value="205">South Georgia</option>
                                <option value="206">South Sudan</option>
                                <option value="207">Spain</option>
                                <option value="208">Sri Lanka</option>
                                <option value="209">Sudan</option>
                                <option value="210">Suriname</option>
                                <option value="211">Svalbard And Jan Mayen Islands</option>
                                <option value="212">Swaziland</option>
                                <option value="213">Sweden</option>
                                <option value="214">Switzerland</option>
                                <option value="215">Syria</option>
                                <option value="216">Taiwan</option>
                                <option value="217">Tajikistan</option>
                                <option value="218">Tanzania</option>
                                <option value="219">Thailand</option>
                                <option value="220">Togo</option>
                                <option value="221">Tokelau</option>
                                <option value="222">Tonga</option>
                                <option value="223">Trinidad And Tobago</option>
                                <option value="224">Tunisia</option>
                                <option value="225">Turkey</option>
                                <option value="226">Turkmenistan</option>
                                <option value="227">Turks And Caicos Islands</option>
                                <option value="228">Tuvalu</option>
                                <option value="229">Uganda</option>
                                <option value="230">Ukraine</option>
                                <option value="231">United Arab Emirates</option>
                                <option value="232">United Kingdom</option>
                                <option value="233">United States</option>
                                <option value="234">United States Minor Outlying Islands</option>
                                <option value="235">Uruguay</option>
                                <option value="236">Uzbekistan</option>
                                <option value="237">Vanuatu</option>
                                <option value="238">Vatican City State (Holy See)</option>
                                <option value="239">Venezuela</option>
                                <option value="240">Vietnam</option>
                                <option value="241">Virgin Islands (British)</option>
                                <option value="242">Virgin Islands (US)</option>
                                <option value="243">Wallis And Futuna Islands</option>
                                <option value="244">Western Sahara</option>
                                <option value="245">Yemen</option>
                                <option value="246">Zambia</option>
                                <option value="247">Zimbabwe</option>
                                <option value="248">Kosovo</option>
                                <option value="249">Curaçao</option>
                                <option value="250">Sint Maarten (Dutch part)</option>
                            </select>
                        </form>
                        <hr id="bottomModalHr" className="modalHr"/>
                        <button id="modalButton">Sign Up!</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
