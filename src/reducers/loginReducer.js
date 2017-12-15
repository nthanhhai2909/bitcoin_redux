import {loginTypes} from '../constants/actionTypes'
import { combineReducers } from 'redux'

const initialStateInput = {
    username: '',
    password: '',
    notification: true,
}


const initialStateSubmitForm = {
    isFetching: false,
    isLogin: false,
}


const inputs = (state = initialStateInput, action) => {
    switch(action.type){
        case loginTypes.SET_USERNAME_LOGIN:
            return Object.assign({}, state, {
                username: action.username
            });
        case loginTypes.SET_PASSWORD_LOGIN:
            return Object.assign({}, state, {
                password: action.password
            });
        case loginTypes.SET_NOTIFICATION_LOGIN:
            return Object.assign({}, state, {
                notification: action.mstatus
            });
        case loginTypes.RESET_INPUT_LOGIN:
            return Object.assign({}, initialStateInput);
        default:
            return state;
    }
}

const submitForm = (state = initialStateSubmitForm, action) => {
    switch(action.type){
        case loginTypes.LOGIN_POST:
            return Object.assign({}, state, {
                isFetching: true,
            });
        case loginTypes.LOGIN_FAIL:
            return Object.assign({} , state, {
                isFetching: false,
                isLogin: false,
            });
        case loginTypes.LOGIN_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                isLogin: true
            });
        case loginTypes.RESET_SUBMITFORM_LOGIN:
            Object.assign({}, initialStateSubmitForm);
        default:
            return state;
    }
}

export default combineReducers({
    inputs,
    submitForm,
})