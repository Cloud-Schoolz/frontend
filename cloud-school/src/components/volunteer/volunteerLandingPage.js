import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import axiosWithAuth from './../../utils/axiosWithAuth';
import VolunteerTaskPage from './volunteerTaskPage';

const initialTask = [
    {
        name:'teach kids',
        id:1
    },
    {
        name:'teach more kids',
        id:2
    }

    
]

const VolunteerLandingPage = () =>{
    const [tasks, setTask] = useState('')

    useEffect(()=>{
        getTask()
    }, [])

    const getTask = ()=>{
        axiosWithAuth()
            .get(`/tasks`)
            .then(res=>{
                console.log(res)
            })
    }


    return(
        <div className='volunteer-main'>
            <h2>Welcome Volunteers!</h2>
            <p>Thanks for giving us your time. Here you will see your upcoming task</p>
            <h4>TASK</h4>
            {initialTask.map(task=>(
                <VolunteerTaskPage task={task} key={task.id} />
            ))}
        </div>
    )
}

export default VolunteerLandingPage

