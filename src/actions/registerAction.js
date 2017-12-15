import {registerTypes} from '../constants/actionTypes'
import axios from 'axios'
export const setFullName = fullname => ({
    type: registerTypes.SET_FULLNAME,
    fullname
})


export const setUserName = username => ({
    type: registerTypes.SET_USERNAME,
    username
})

export const setPassword = password => ({
    type: registerTypes.SET_PASSWORD,
    password
})

export const setConfirm = confirm  =>({
    type: registerTypes.SET_CONFIRM,
    confirm
})


export const setIsValidFullName = status => ({
    type: registerTypes.SET_ISVALID_FULLNAME,
    status
})

export const setIsValidUsername = status => ({
    type: registerTypes.SET_ISVALID_USERNAME,
    status
})
export const setIsValidPassword = status => ({
    type: registerTypes.SET_ISVALID_PASSWORD,
    status
})
export const setIsValidConfrim = status => ({
    type: registerTypes.SET_ISVALID_COFIRM,
    status
})

export const setIsValidForm = status => ({
    type: registerTypes.SET_NOTIFICATION,
    status
})

const isValidFullname = fullname => {
    if(fullname === ''){return false;}
    return true;
}


const isValidUsername = username => {
    if(username === ''){return false;}
    if(username.length < 6){return false;}
    if(/^[a-zA-Z0-9- ]*$/.test(username) === false) {return false;}
    return true;
}

const isValidPassword = password => {
    if(password === '') {return false;}
    if(password.length < 6 ){return false;}
    if(/^[a-zA-Z0-9- ]*$/.test(password) === false) {return false;}
    return true;
}

const isValidCofirm = (confirm, password) => {
    if(confirm !== password){return false;}
    return true;
}

export const registerPost = () => ({
    type: registerTypes.REGISTER_POST
})

export const registerFail = () => ({
    type: registerTypes.REGISTER_FAIL
})

export const registerSuccess = () => ({
    type: registerTypes.REGISTER_SUCCESS
})

export const registerReveice = (data) => ({
    type: registerTypes.REGISTER_RECEIVE, 
    data
})

const isValidForm = (dispatch, getState) => {
    let count = 0;
    const objInput = getState().registerReducers.inputs;

    if(isValidFullname(objInput.fullname) === false){
        dispatch(setIsValidFullName(false));
        count++;
    }
    else{
        dispatch(setIsValidFullName(true));
    }

    if(isValidUsername(objInput.username) === false){
        dispatch(setIsValidUsername(false));
        count++;
    }
    else{
        dispatch(setIsValidUsername(true));
    }

    if(isValidPassword(objInput.password) === false){

        dispatch(setIsValidPassword(false));
        count++;
    }
    else{
        dispatch(setIsValidPassword(true));
    }

    if(isValidCofirm(objInput.confirm, objInput.password) === false){
        dispatch(setIsValidConfrim(false));
        count++;
    }
    else{
        dispatch(setIsValidConfrim(true));
    }

    return count;
}

export const submitForm = () => (dispatch, getState) => {
    const objInput = getState().registerReducers.inputs;

    if(isValidForm(dispatch, getState) > 0){
        dispatch(setIsValidForm(false));
        return;
    }
    dispatch(setIsValidForm(true));

    dispatch(registerPost());
    axios.post('https://tradingbitcoin.herokuapp.com/logup',{
            fullname: objInput.fullname,
            username: objInput.username, 
            password: objInput.password,
            confirm:  objInput.confirm,
        })
        .then((response)=>{
            if(response.data.status === 'true'){
                dispatch(registerSuccess());
            }
            else{
                dispatch(registerFail());
                dispatch(setIsValidUsername(false));
            }
        })
        .catch((err) => dispatch(registerFail()));
}






