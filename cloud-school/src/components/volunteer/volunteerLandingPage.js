import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import axiosWithAuth from './../../utils/axiosWithAuth';
import VolunteerTaskPage from './volunteerTaskPage';

const VolunteerLandingPage = () =>{

    const [tasks, setTasks] = useState([])
    const [name, setName] = useState('')
    const {id} = useParams();
    console.log(id)

    useEffect(()=>{
        getTask()
    }, [])

    const getTask = ()=>{
        axiosWithAuth()
            .get(`/volunteers/tasks/25`)
            .then(res=>{
                console.log(res)
                setTasks(
                    res.data
                )
                // setName(
                //     res.data[0].volunteer_name
                // )
            })
    }
    console.log(name)



    return(
        <div className='volunteer-main'>
            <h2>Welcome {name} hello !</h2>
            <p>Thanks for giving us your time. Here you will see your upcoming task</p>
            <h4>TASK</h4>
            {tasks.map(task=>(
                <VolunteerTaskPage task={task} key={task.id} />
            ))}
        </div>
    )
}

export default VolunteerLandingPage

