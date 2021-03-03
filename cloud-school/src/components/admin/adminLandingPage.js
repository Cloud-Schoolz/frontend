import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import styled from "styled-component";
import { connect } from 'react-redux';
// May need to make an import { getTasks } from ../Action for an admin to fetch tasks.
// Will style later.

const initialFormValues = {
    taskName: '',
    taskDescription: ''
}

const adminLandingPage = ({ isFetching, tasks, error, getTask }) => {
    const [ expand, setExpand ] = useState(false);
    const [ fillOutForm, setFillOutForm ] = useState(initialFormValues);
    const [ showTasks, setShowTasks ] = useState(false);
    const [ taskList, setTaskList ] = useState(initialFormValues);

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
        getTasks(); // We may need to implement and fetch tasks under ../actions/index.js
    }

    return (
        <div >
            <h2>Admin Page</h2>
        <button onClick={() => setExpand=(true)}>Create New Task</button>
        <button onClick={expandTask}>Edit Existing Task</button>
        {expand && (
            <StyledNewTaskForm onSubmit={submitNewTask}>
                <h2>A New Task</h2>
                <Label>Task Name:  </Label>
                    <input
                    onChange={e =>
                    setFillOutForm({...fillOutForm, taskName: e.target.value})}
                    value={fillOutForm.taskName}
                    />

                <Label>Task Description:  </Label>
                        <input
                        onChange={e =>
                        setFillOutForm({...fillOutForm, taskDescription: e.target.value})}
                        value={fillOutForm.taskDescription}
                        />

                        <StyledButton type='submit'>Save</StyledButton>
                        <StyledButton onClick={() => setExpand(false)}>Cancel</StyledButton>
            </StyledNewTaskForm>
        )}

        {showTasks && (
            <div className='tasks'>
                {isFetching}
                <TaskCard tasks={tasks} setShowTasks={setShowTasks} />

                <button onClick={() => setShowTasks(false)}>Hide</button>
            </div>
        )}
        </div>
    )
};

const mapStateToProps = state => {
    return {
        isFetching: state.isFetching,
        tasks: state.tasks,
        error: state.error
    }
}

export default connect(
    mapStateToProps,
    { getTasks })
    (adminLandingPage);