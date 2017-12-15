
import {registerTypes} from '../constants/actionTypes'
import { combineReducers } from 'redux'
const initialStateInput = {
    fullname: '',
    username: '',
    password:'',
    confirm: '',
}

const initialStateIsValid = {
    isvalidFullName: true,
    isvalidUsername: true,
    isvalidPassword: true,
    isvalidConfirm: true,   
    isValidForm : true, 
}

const initialStateSubmitForm = {
    isFetching: false,
    isRegister: false,
}

const inputs = (state = initialStateInput, action) =>{

    switch(action.type){
        case registerTypes.SET_FULLNAME_REGISTER:
            console.log('fullname', action.fullname)
            return Object.assign({}, state,
                  {fullname: action.fullname});
        case registerTypes.SET_USERNAME_REGISTER:
            return Object.assign({}, state,
                {username: action.username});
        case registerTypes.SET_PASSWORD_REGISTER:
                return Object.assign({}, state, 
                    {password: action.password});
        case registerTypes.SET_CONFIRM_REGISTER:
            return Object.assign({}, state, 
                {confirm: action.confirm});
        case registerTypes.RESET_INPUT:
            return Object.assign({}, initialStateInput);
        default:
            return state;
    }
}

const isValids = (state = initialStateIsValid, action) =>{

    switch(action.type){
        case registerTypes.SET_ISVALID_FULLNAME:

            return Object.assign({}, state, {
                isvalidFullName: action.mstatus
            });
        case registerTypes.SET_ISVALID_USERNAME:
            return Object.assign({}, state,
                 {isvalidUsername: action.mstatus});
        case registerTypes.SET_ISVALID_PASSWORD:
            return Object.assign({}, state,
                 {isvalidPassword: action.mstatus});
        case registerTypes.SET_ISVALID_COFIRM:
            return Object.assign({}, state, {
                    isvalidConfirm:action.mstatus
                });
        case registerTypes.SET_NOTIFICATION:
            return Object.assign({}, state, {
                isValidForm: action.mstatus
            });
        case registerTypes.RESET_ISVALID: 
            return Object.assign({}, initialStateIsValid);
        default:
            return state;
    }
}

const submitForm = (state = initialStateSubmitForm, action) => {
    switch(action.type){
        case registerTypes.REGISTER_POST:
            return Object.assign({}, state, {
                isFetching: true
            });
        case registerTypes.REGISTER_FAIL:
            return Object.assign({}, state, {
                isFetching: false,
                isRegister: false
            });
        case registerTypes.REGISTER_SUCCESS:
            return Object.assign({}, state,{
                isFetching: false,
                isRegister: true
            });
        case registerTypes.RESET_REGISTER:
            return Object.assign({}, initialStateSubmitForm)
        default:
            return state;
    }
}

export default combineReducers({
    inputs,
    isValids,
    submitForm
    
})