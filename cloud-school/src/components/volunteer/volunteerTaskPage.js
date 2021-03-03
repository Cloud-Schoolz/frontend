

const VolunteerTaskPage = (props) =>{
// console.log(props.task)

    return(
        <div className='volunteer-task'>
            <h4>{props.task.task_name}</h4>
            <p>{props.task.description}</p>
        </div>
    )
}

export default VolunteerTaskPage