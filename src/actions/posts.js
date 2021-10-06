import * as api from '../api/index.js'
import {FETCH_ALL, CREATE, UPDATE, DELETE} from '../constants/actionTypes';

//action creators - functions that return actions
//redux thunk - add additional inner function for async/await uses
export const getPosts = () => async (dispatch) => {
    try{
        //use destructuring to get data from response to get posts
        const {data} = await api.fetchPosts(); 
        dispatch({ type: FETCH_ALL, payload: data}); //we dispatch action type, not return, using redux thunk. This will be handled in reducer.
    }catch(error){
        console.log(error);
    }
}

export const createPost = (post) => async (dispatch) => {
    try {
        const {data} = await api.createPost(post);
        dispatch({ type: CREATE, payload: data})
    } catch(error){
        console.log(error);
    }
}

export const updatePost = (id, post) => async (dispatch) => {
    try {
        const {data} = await api.updatePost(id, post);
        dispatch({ type: UPDATE, payload: data})
    } catch(error){
        console.log(error);
    }
}

export const deletePost = (id) => async (dispatch) => {
    try {
        await api.deletePost(id);
        dispatch({ type: DELETE, payload: id})
    } catch(error){
        console.log(error);
    }
}

export const likePost = (id) => async (dispatch) => {
    try {
        const {data} = await api.likePost(id);
        dispatch({ type: UPDATE, payload: data})
    } catch(error){
        console.log(error);
    }
}