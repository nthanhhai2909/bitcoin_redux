import {registerTypes} from '../constants/actionTypes'

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







