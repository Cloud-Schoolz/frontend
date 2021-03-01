import {ADD_ROLE, REMOVE_ROLE} from './../actions'

const initialState = {
    role:''
}

const reducer = (state= initialState, action)=>{
    switch(action.type){
        case(ADD_ROLE):
            return({
                ...state,
                role: action.payload
            })
        case(REMOVE_ROLE):
            return({
                ...state,
                role: ''
            })
        default:
            return state
    }
}

export default reducer