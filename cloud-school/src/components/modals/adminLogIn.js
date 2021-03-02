import React from 'react'

function adminLogIn() {
    let modal = document.getElementById('modalContainer');
    const closeModal = () => {
        modal.style.display = "none";
    }
    return (
        <div id="modalContainerLogin">
                <div id="modal">
                    <div id="modalHeader">
                        <h1>Log In</h1>
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
                        <button id="modalButton">Sign Up!</button>
                    </div>
                </div>
            </div>
    )
}

export default adminLogIn;