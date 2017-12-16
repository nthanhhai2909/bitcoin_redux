import {profileTypes} from '../constants/actionTypes'
import axios from 'axios'
export const setName = name => ({
    type:profileTypes.SET_NAME_PROFILE, 
    name
})

export const setBalance = balance => ({
    type: profileTypes.SET_BALANCE,
    balance
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
    type:profileTypes.SET_MYID,
    myID
})

export const postProfile = () => ({
    type: profileTypes.POST_PROFILE,
})

export const getProfileFail = () => ({
    type: profileTypes.GET_PROFILE_FAIL,
})

export const getProfileSuccess = () => ({
    type: profileTypes.GET_PROFILE_SUCCESS
})

export const getProfile = (username) => (dispatch, getState) => {

    dispatch(postProfile());
    axios.get('https://tradingbitcoin.herokuapp.com/user/' + username)
         .then((response)=>{
             if(response.data.status === 'true'){
            
                    dispatch(setName(response.data.data[0].fullname));
                    dispatch(setBalance(response.data.data[0].balance));
                    dispatch(setIdWallet(response.data.data[0].idWallet));
                    dispatch(setUsername(response.data.data[0].username));
                    dispatch(setMyID(response.data.data[0]._id));
                    dispatch(getProfileSuccess());
             } 
             else{
                dispatch(getProfileFail());
             }
         })
         .catch((err) => {dispatch(getProfileFail());});
         //------------------------------------------------------------------------------  
}


export const postTransaction = () => ({
    type: profileTypes.POST_TRANSACTION_PROFILE
})

export const getTransactionFail = () => ({
    type: profileTypes.GET_TRANSACTION_FAIL
})

export const getTransactionSuccess = () => ({
    type: profileTypes.GET_TRANSACTION_SUCCESS
})

export const setTransaction = (transactions) => ({
    type: profileTypes.SET_TRANSACTION_PROFILE, 
    transactions
})

export const getTransactions = (username) => (dispatch, getState) => {
    dispatch(postTransaction());
    axios.get('https://tradingbitcoin.herokuapp.com/transaction/' + username)
        .then((response) =>{
            if(response.data.status === 'true'){
                dispatch(getTransactionSuccess());
                console.log('data', response.data.data)
                dispatch(setTransaction(response.data.data));
            }
            else{
                dispatch(getTransactionFail());
            }
            
        })
        .catch((err) => dispatch(getTransactionFail()));
}