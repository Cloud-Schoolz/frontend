
export const ADD_ROLE = 'ADD_ROLE'
export const REMOVE_ROLE = 'REMOVE_ROLE'


export const addRole = (role) => {
    return dispatch => {
        dispatch({type:ADD_ROLE, payload:role});
    }
}

export const removeRole=()=>{
    return({type:REMOVE_ROLE})
}