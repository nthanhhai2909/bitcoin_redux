import {loginTypes} from '../constants/actionTypes'
import axios from 'axios'

export const setUsername = username => ({
    type: loginTypes.SET_USERNAME_LOGIN, 
    username
})

export const setPassword = password => ({
    type: loginTypes.SET_PASSWORD_LOGIN,
    password
})

export const setIsValidLogin = mstatus => ({
    type:loginTypes.SET_NOTIFICATION_LOGIN,
    mstatus
})

export const loginPost = () => ({
    type: loginTypes.LOGIN_POST
})

export const loginFail = () => ({
    type: loginTypes.LOGIN_FAIL
})

export const loginSuccess = () => ({
    type: loginTypes.LOGIN_SUCCESS
})

export const resetInput = () => ({
    type: loginTypes.RESET_INPUT_LOGIN
})

export const resetSubmitFrom = () => ({
    type: loginTypes.RESET_SUBMITFORM_LOGIN
})


export const submitForm = () => (dispatch, getState) => {
    const objInput = getState().loginReducers.inputs;
    dispatch(loginPost());
    axios.post('https://tradingbitcoin.herokuapp.com/login',{
        username: objInput.username, 
        password: objInput.password
    })
    .then((response)=>{
        console.log(response);
        if(response.data.status === 'true'){
            dispatch(loginSuccess());
            dispatch(setIsValidLogin(true));
            
        }
        else{

            dispatch(setIsValidLogin(false));
            dispatch(loginFail());
        }
    })
    .catch((err) => {
        dispatch(setIsValidLogin(false));
        dispatch(loginFail());}
    );
}
