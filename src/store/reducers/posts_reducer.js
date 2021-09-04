import{
    GET_POSTS,
    GET_POSTS_BY_ID,
    CLEAR_POSTS_BY_ID
} from '../types';


export default function postReducer(state={}, action){
    switch(action.type){
        case GET_POSTS:
            return {...state, ...action.payload }
        case GET_POSTS_BY_ID:
            return{...state, postById: action.payload}
        case CLEAR_POSTS_BY_ID:
            return {...state, postById: action.payload}
        default:
            return state
    }
}