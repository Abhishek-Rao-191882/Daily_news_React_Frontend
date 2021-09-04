import * as api from '../../api';
import{
    GET_POSTS,
    ADD_NEWSLETTER,
    CLEAR_NEWSLETTER,
    GET_POSTS_BY_ID,
    CLEAR_POSTS_BY_ID,
    SEND_MESSAGE
} from '../types';
 
// POST
export const getPosts=(homePost, page, order, limit)=>({
    type: GET_POSTS,
    payload: api.getPosts(homePost, page, order, limit)
})

export const getPostById =(id) =>({
    type: GET_POSTS_BY_ID,
    payload: api.getPostById(id)
})

export const clearPostById =() =>({
    type: CLEAR_POSTS_BY_ID,
    payload: {}
})
// user

export const addNewLetter=(data)=>({
    type: ADD_NEWSLETTER,
    payload: api.addNewLetter(data)
})

export const clearNewsletter = ()=>({
    type: CLEAR_NEWSLETTER,
    payload: {
        newsletter : false,
        email: []
    }
})

export const sendMessage =(data)=>({
    type: SEND_MESSAGE,
    payload: api.sendMessage(data)
})