
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
        case registerTypes.SET_FULLNAME:
            return Object.assign({}, state,
                  {fullname: action.fullname});
        case registerTypes.SET_USERNAME:
            return Object.assign({}, state,
                {username: action.username});
        case registerTypes.SET_PASSWORD:
                return Object.assign({}, state, 
                    {password: action.password});
        case registerTypes.SET_CONFIRM:
            return Object.assign({}, state, 
                {confirm: action.confirm});
        
        default:
            return state;
    }
}

const isValids = (state = initialStateIsValid, action) =>{

    switch(action.type){
        case registerTypes.SET_ISVALID_FULLNAME:
            return Object.assign({}, state, {
                isvalidFullName: action.status
            });
        case registerTypes.SET_ISVALID_USERNAME:
            return Object.assign({}, state,
                 {isvalidUsername: action.status});
        case registerTypes.SET_ISVALID_PASSWORD:
            return Object.assign({}, state,
                 {isvalidPassword: action.status});
        case registerTypes.SET_ISVALID_COFIRM:
            return Object.assign({}, state, {
                    isvalidConfirm:action.status
                });
        case registerTypes.SET_NOTIFICATION:
            return Object.assign({}, state, {
                isValidForm: action.status
            });
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
                isRegister: false
            });
        case registerTypes.REGISTER_SUCCESS:
            return Object.assign({}, state,{
                isRegister: true
            });
        default:
            return state;
    }
}

export default combineReducers({
    inputs,
    isValids,
    submitForm
    
})