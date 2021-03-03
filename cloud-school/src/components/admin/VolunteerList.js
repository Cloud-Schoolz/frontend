import React, { useState } from 'react'
import { useApi } from '../../utils/hooks/useApi';
import { fetchTasks, putTask } from '../../utils/api';

function VolunteerList(props) {
    const [currentVolunteer, setCurrentVolunteer] = useState('');
    const [ tasks, setTasks ] = useApi(() => fetchTasks(currentVolunteer));
    const [ formTask, setFormTask ] = useApi(() => putTask(tasks.data[0], currentVolunteer));
    const handleSubmit = (e) => {
        e.preventDefault();
        setTasks();
    }
    const handleChange = (e) => {
        const dropDown = document.getElementById('volunteers');
        const valueToAdd = parseInt(dropDown.value);
        setCurrentVolunteer(valueToAdd);
    }

    const handleFormSubmit = e => {
        e.preventDefault();
        setFormTask();
    }

    const handleClick = e => {

    }

    // const openModal = ()

    console.log(tasks.data[0]);
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label for="volunteers_id">Volunteers:</label>
                    <select onChange={handleChange} id="volunteers" name="volunteers_id" size="5">
                    {props.volunteers && props.volunteers.map(volunteer => (<option value={volunteer.id} >{volunteer.name}</option>))}
                    </select>
                    <button type="submit" id="modalButton">Sign Up!</button>
            </form>

            <div>
                {tasks.data && tasks.data.map(task => (<h1 onClick={handleClick} key={task.task_id}>{task.task_name}</h1>))}
            </div>
            <div id="modalContainer">
                <div id="modal">
                    <div id="modalHeader">
                        <h1>Edit Task</h1>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" id="close"><path fill="#1E213F" fill-rule="evenodd" d="M11.95.636l1.414 1.414L8.414 7l4.95 4.95-1.414 1.414L7 8.414l-4.95 4.95L.636 11.95 5.586 7 .636 2.05 2.05.636 7 5.586l4.95-4.95z" opacity=".5"/></svg>
                    </div>
                    <hr className="modalHr"/>
                    <div id="modalFormContainer">
                        <form id="modalForm" onSubmit={handleFormSubmit}>
                            <label htmlFor="name">Volunteer:
                                <input
                                  value={tasks.volunteer_name} 
                                  className="inputs"
                                  name="name"
                                  type="text"
                                />
                            </label>
                            <label htmlFor="email">Task:
                                <input
                                  value={tasks.task_name} 
                                  className="inputs"
                                  name="email"
                                  type="email"
                                />
                            </label>
                            <label htmlFor="password">Description:
                                <input
                                  value={tasks.description}
                                  className="inputs"
                                  name="password"
                                  type="password"
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
