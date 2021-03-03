import react, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

function ToDoList ({ steps, name, todos_id, first_name, last_name, volunteer, admin_id, is_completed }){
    const type = useSelector(state => state.authentication.user.type);
    const user_id = useSelector(state => state.authentication.user.id);
    const [ isEditing, setIsEditing ] = useState(false);
    const [ listTitle, setListTitle ] = useState(name);
    const [ isCompleted, setIsCompleted ] = useState(is_completed);
    const [ todos, setTodos ] = useState(() => {
        const state = [];
        steps.forEach(step => {
            state[JSON.stringify(step.id)] = {
                id: step.id,
                description: step.description
            }
        })
        return state;
    });

    const startEditing = event => {
        event.preventDefault();
        setIsEditing(true);
    }

    const handleTitleChanges = event => {
        setListTitle(event.target.value);
    }

    const updateTodoList = event => {
        event.preventDefault();
        setIsEditing(false);
    }

    const toggleCompleted = event => {
        setIsCompleted(true);
        event.preventDefault();
    }

    const handleChanges = event => {
        setTodos({
            ...todos,
            [event.target.name]: {
                id: Number(event.target.name),
                description: event.target.value
            }
        })
    }
    
    return (
        <form onSubmit={isEditing ? updateTodoList : startEditing }>
            { isEditing ? 
            <input className='title-input' value={listTitle} onChange={handleTitleChanges} /> 
            : <div className='title'>{name}</div> }
            {type === 'admin' ? 
            <div className='assigned-to'>Assigned To:</div> : ``}
            <div className={type === 'admin' ? 'assigned-name' : 'name' }>
                {type === 'admin' ? `${volunteer[0].first_name} ${volunteer[0].last_name}` : `${first_name} ${last_name}` }
            </div>
            <div className={type === 'admin' ? 'items' : 'items'}>
                {steps.map((step, index) => (
                    isEditing
                    ? <input className='item-input' key={index} name={JSON.stringify(step.id)} onChange={handleChanges} value={todos[JSON.stringify(step.id)].description} />
                    : <p key={index} className={ isCompleted ? 'item-completed' : 'item'} > {`${index+1}.)`} {step.description}</p>
                )
                )}
            </div>
            {
                type === 'admin' ?
                <div className='button-container'>
                    {!isEditing ? <button className='edit-button' type='submit'>Edit</button> : null}
                    {isEditing ? <button className='edit-button' type='submit'>Save</button> : null}
                </div>
            :
                <div className='button-container'>
                    {!isCompleted ? <button className='complete-button' type='button' onClick={toggleCompleted}>Complete</button> : null}
                    {isCompleted ? <button className='complete-button' type='button' onClick={toggleCompleted}>Redo</button> : null}

                </div>
            }
        </form>
    )
}

export default ToDoList;