import React, { useState, useEffect } from 'react';
import axiosWithAuth  from '../../utils/axiosWithAuth';
import styled from "styled-components";
import { useApi } from '../../utils/hooks/useApi';
import { fetchResource, fetchTasks } from '../../utils/api';
import VolunteerList from './VolunteerList';
// Will style later.

const initialFormValues = {
    taskName: '',
    taskDescription: ''
}

const AdminLandingPage = () => {
    const [ expand, setExpand ] = useState(false);
    const [ fillOutForm, setFillOutForm ] = useState(initialFormValues);
    const [ showTasks, setShowTasks ] = useState(false);
    const [ taskList, setTaskList ] = useState(initialFormValues);
    const [ volunteers, setVolunteers ] = useApi(() => fetchResource('volunteers'));
    const [ tasks, setTasks ] = useApi(() => fetchTasks(3));

    useEffect(() => {
        setVolunteers();
    }, [])

    console.log(volunteers);

    const submitNewTask = e => {
        e.preventDefault();
        axiosWithAuth()
            .post('https://cloud-schoolz.herokuapp.com/api/tasks', fillOutForm)
            .then( res => {
                console.log('This is a new task being submitted', res.data)
            })
        setExpand(false);
        setFillOutForm(initialFormValues);
    }

    const expandTask = e => {
        e.preventDefault();
        setShowTasks(true);
    }

    return (
        <div >
            <h2>Admin Page</h2>
        <button onClick={() => setExpand=(true)}>Create New Task</button>
        <button onClick={expandTask}>Edit Existing Task</button>
        <VolunteerList volunteers={volunteers.data}/>
        {expand && (
            <div onSubmit={submitNewTask}>
                <h2>A New Task</h2>
                <label>Task Name:  </label>
                    <input
                    onChange={e =>
                    setFillOutForm({...fillOutForm, taskName: e.target.value})}
                    value={fillOutForm.taskName}
                    />

                <label>Task Description:  </label>
                        <input
                        onChange={e =>
                        setFillOutForm({...fillOutForm, taskDescription: e.target.value})}
                        value={fillOutForm.taskDescription}
                        />

                        <button type='submit'>Save</button>
                        <button onClick={() => setExpand(false)}>Cancel</button>
            </div>
        )}

        {showTasks && (
            <div className='tasks'>
                <label tasks={tasks} setShowTasks={setShowTasks} />

                <button onClick={() => setShowTasks(false)}>Hide</button>
            </div>
        )}
        </div>
    )
};

export default AdminLandingPage;