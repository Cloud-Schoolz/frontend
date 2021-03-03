import React, { useState } from 'react'
import { useApi } from '../../utils/hooks/useApi';
import { fetchTasks, putTask } from '../../utils/api';
import "./VolunteerList.css";


function VolunteerList(props) {
    const [currentVolunteer, setCurrentVolunteer] = useState('');
    const [ tasks, setTasks ] = useApi(() => fetchTasks(currentVolunteer));
    const [ formTask, setFormTask ] = useState('');
    // const [ formTask, setFormTask ] = useApi(() => putTask(tasks, currentVolunteer));

    window.onclick = function(event) {
        // Grabbing Elements
        let editModal = document.getElementById('modalContainer');
        // Closing Modals if you click outside of them on the Window
        if (event.target === editModal) {
            editModal.style.display = "none";
        }
    }

    const openModal = () => {
        // Grabbing Elements
        let editModal = document.getElementById('modalContainer');
        editModal.style.display = "block";
    }
    const closeModal = () => {
        let editModal = document.getElementById('modalContainer');
        editModal.style.display = "none";
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setTasks();
    }
    const handleChange = (e) => {
        const dropDown = document.getElementById('volunteers');
        const valueToAdd = parseInt(dropDown.value);
        setCurrentVolunteer(valueToAdd);
    }

    const handleFormChange = (e) => {
        setFormTask({
            [e.target.name]: e.target.value,
        })
    }

    const handleFormSubmit = e => {
        e.preventDefault();
        setFormTask();
    }

    const handleClick = e => {
        openModal();
        setFormTask(tasks.data[0]);
    }

    console.log(formTask);
    
    
    return (
        <div id="volunteersDisplay">
            <form onSubmit={handleSubmit}>
                <label for="volunteers_id">Volunteers:</label>
                    <select onChange={handleChange} id="volunteers" name="volunteers_id" size="5">
                    {props.volunteers && props.volunteers.map(volunteer => (<option value={volunteer.id} >{volunteer.name}</option>))}
                    </select>
                    <button type="submit" id="volunteerModalButton">Pick Your Volunteer</button>
            </form>
            <div id="tasksContainer">
                {tasks.data && tasks.data.map(task => (
                    <div onClick={handleClick} key={task.task_id} id="taskList">
                        <h1>{task.task_name}</h1>
                        <p>{task.description}</p>
                    </div>
                ))}
            </div>
            <div id="modalContainer">
                <div id="modal">
                    <div id="modalHeader">
                        <h1>Edit Task</h1>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" id="close" onClick={closeModal}><path fill="#1E213F" fill-rule="evenodd" d="M11.95.636l1.414 1.414L8.414 7l4.95 4.95-1.414 1.414L7 8.414l-4.95 4.95L.636 11.95 5.586 7 .636 2.05 2.05.636 7 5.586l4.95-4.95z" opacity=".5"/></svg>
                    </div>
                    <hr className="modalHr"/>
                    <div id="modalFormContainer">
                        <form id="modalForm" onSubmit={handleFormSubmit}>
                            <label htmlFor="volunteer">Volunteer:
                                <input
                                  onChange={handleFormChange}
                                  value={formTask.volunteer_name} 
                                  className="inputs"
                                  name="volunteer"
                                  type="text"
                                />
                            </label>
                            <label htmlFor="task">Task:
                                <input
                                  onChange={handleFormChange}
                                  value={formTask.task_name} 
                                  className="inputs"
                                  name="task"
                                  type="text"
                                />
                            </label>
                            <label htmlFor="desription">Description:
                                <input
                                  onChange={handleFormChange}
                                  value={formTask.description}
                                  className="inputs"
                                  name="description"
                                  type="text"
                                />
                            </label>
                            <hr id="bottomModalHr" className="modalHr"/>
                            <button type="submit" id="modalButton">Save</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VolunteerList
