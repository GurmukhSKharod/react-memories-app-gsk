import {AUTH} from '../constants/actionTypes';
import * as api from '../api/index.js'

/*redux workflow:
1. go to form in Auth - get data and dispatch action (sign in, sign up)
2. actions - call to api for post request to db

*/
export const signin = (formData, history) => async (dispatch) => {
    try {
        //login the user...
        const {data} = await api.signIn(formData);
        dispatch({type: AUTH, data});
        history.push('/');
    } catch (error) {
        console.log(error);
    }
}

export const signup = (formData, history) => async (dispatch) => {
    try {
        //sign up the user...
        const {data} = await api.signUp(formData);
        dispatch({type: AUTH, data});
        history.push('/');
    } catch (error) {
        console.log(error);
    }
}