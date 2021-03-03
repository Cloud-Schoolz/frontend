import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import axiosWithAuth from '../../utils/axiosWithAuth';
import VolunteerTaskPage from './VolunteerTaskPage';
import { useApi } from '../../utils/hooks/useApi'
import { fetchTasks } from '../../utils/api';

const VolunteerLandingPage = () =>{

    const [name, setName] = useState([])
    const {id} = useParams();
    const [volunteerTasks, setVolunteerTasks ] = useApi(()=>fetchTasks(id))
    // console.log(id);

    useEffect(()=>{
        setVolunteerTasks()
        getName()
    }, [])

    

    
    const getName = ()=>{
        axiosWithAuth()
            .get(`https://cloud-schoolz.herokuapp.com/api/volunteers/${id}`)
            .then(res=>{
                // console.log(res)
                setName(
                    res.data.name
                )
            })
            .catch(err =>{console.log(err)})

        }
    
    console.log(name)
    console.log(volunteerTasks.data)



    return(
        <div className='volunteer-main'>
            <h2>Welcome {name}!</h2>
            <p>Thanks for giving us your time. Here you will see your upcoming task</p>
            <h4>TASK</h4>
            {!!volunteerTasks.data &&
            volunteerTasks.data.map(task=>(
                <VolunteerTaskPage task={task} key={task.id} />
            ))}
        </div>
    )
}

export default VolunteerLandingPage

