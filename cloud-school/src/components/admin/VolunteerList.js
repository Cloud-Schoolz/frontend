import React, { useState } from 'react'
import { useHistory, useParams } from "react-router-dom";
import { useApi } from '../../utils/hooks/useApi';
import { fetchTasks, putTask, postTask } from '../../utils/api';
import "./VolunteerList.css";

const initialFormState = {
    task_name: '',
    description: '',
    id: null
}

function VolunteerList(props) {
    const [currentVolunteer, setCurrentVolunteer] = useState('');
    const [ tasks, setTasks ] = useApi(() => fetchTasks(currentVolunteer));
    const [ formTask, setFormTask ] = useState(initialFormState);
    const [ id, setId ] = useState("");
    const [ newFormTask, setNewFormTask ] = useApi(() => putTask(formTask, id));
    const [ addTask, setAddTask ] = useApi(() => postTask(newTaskObj));
    const history = useHistory();
    const params = useParams();

    const newTaskObj = {
        task_name: formTask.task_name,
        description: formTask.description,
        volunteer_id: currentVolunteer
    }

    window.onclick = function(event) {
        // Grabbing Elements
        let editModal = document.getElementById('modalContainer');
        let addTaskModal = document.getElementById('addTaskModal');
        // Closing Modals if you click outside of them on the Window
        if (event.target === editModal || event.target === addTaskModal) {
            editModal.style.display = "none";
            addTaskModal.style.display = "none";
        }
    }

    const openModal = (e) => {
        // Grabbing Elements
        let editModal = document.getElementById('modalContainer');
        let addTaskModal = document.getElementById('addTaskModal');
        console.log(e.target);
        if(e.target.id === 'addTaskButton') {
            addTaskModal.style.display = "block";
            setFormTask(initialFormState);
        } else {
            editModal.style.display = "block";
        }
            
    }
    const closeModal = () => {
        let editModal = document.getElementById('modalContainer');
        let addTaskModal = document.getElementById('addTaskModal');
        editModal.style.display = "none";
        addTaskModal.style.display = "none";
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
            ...formTask,
            [e.target.name]: e.target.value
        })
    }

    const handleFormSubmit = e => {
        e.preventDefault();
        setNewFormTask(formTask);
        closeModal();
        setTimeout(() => {
            setTasks();
        }, 250);
        history.push(`/admin/${params.id}`);
    }

    const handleClick = e => {
        openModal(e);
        setId(tasks.data[e.target.id].task_id);
        const taskObject = {
            task_name: tasks.data[e.target.id].task_name,
            description: tasks.data[e.target.id].description,
        }
        setFormTask(taskObject);
    }

    const handleAddSubmit = e => {
        e.preventDefault();
        setAddTask();
        closeModal();
        setTimeout(() => {
          setTasks();
        }, 250);
        history.push(`/admin/${params.id}`);
    }

   
    // console.log(id);
    // console.log(formTask);
    
    return (
        <div id="volunteersDisplay">
            <form onSubmit={handleSubmit}>
                <label for="volunteers_id">Volunteers:</label>
                    <select onChange={handleChange} id="volunteers" name="volunteers_id" size="5">
                    {props.volunteers && props.volunteers.map(volunteer => (<option value={volunteer.id}>{volunteer.name}</option>))}
                    </select>
                    <button type="submit" id="volunteerModalButton">Pick Your Volunteer</button>
            </form>
            <div id="tasksContainer">
                {tasks.data && tasks.data.map((task, index) => (
                    <div onClick={handleClick} key={index} id="taskList">
                        <h1 id={index}>{task.task_name}</h1>
                        <p id={index}>{task.description}</p>
                    </div>
                ))}
                { tasks.data && <button id="addTaskButton" onClick={openModal}>Add Task</button>}
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
                            <label htmlFor="task_name">Task:
                                <input
                                  onChange={handleFormChange}
                                  value={formTask.task_name} 
                                  className="inputs"
                                  name="task_name"
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
            <div id="addTaskModal">
                <div id="modal">
                    <div id="modalHeader">
                        <h1>Add Task</h1>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" id="close" onClick={closeModal}><path fill="#1E213F" fill-rule="evenodd" d="M11.95.636l1.414 1.414L8.414 7l4.95 4.95-1.414 1.414L7 8.414l-4.95 4.95L.636 11.95 5.586 7 .636 2.05 2.05.636 7 5.586l4.95-4.95z" opacity=".5"/></svg>
                    </div>
                    <hr className="modalHr"/>
                    <div id="modalFormContainer">
                        <form id="modalForm" onSubmit={handleAddSubmit}>
                            <label htmlFor="task_name">Task:
                                <input
                                  onChange={handleFormChange}
                                  value={formTask.task_name} 
                                  className="inputs"
                                  name="task_name"
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
                            <button type="submit" id="modalButton">Add Task</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VolunteerList
