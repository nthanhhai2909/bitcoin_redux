import {profileTypes} from '../constants/actionTypes'

export const setName = name => ({
    type:profileTypes.SET_NAME_PROFILE, 
    name
})

export const setBalance = blance => ({
    type: profileTypes.SET_BALANCE,
    blance
})

export const setIdWallet = idWallet => ({
    type: profileTypes.SET_IDWALLET,
    idWallet
})

export const setUsername = username => ({
    type: profileTypes.SET_USERNAME_PROFILE,
    username
})

export const setMyID = myID => ({
    type:ProfileTypes.SET_MYID,
    myID
})