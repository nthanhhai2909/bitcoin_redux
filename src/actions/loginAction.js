import {loginTypes} from '../constants/actionTypes'

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

