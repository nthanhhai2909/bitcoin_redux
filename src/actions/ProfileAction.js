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


export const openDialogSent = () => ({
    type: profileTypes.OPEN_DIALOG_SENT
})

export const closeDialogSent = () => ({
    type: profileTypes.CLOSE_DIALOG_SENT
})

export const setIdWalletSent = idWallet => ({
    type: profileTypes.SET_IDWALLET_SENT,
    idWallet
})

export const setAmountSent = amount => ({
    type: profileTypes.SET_AMOUNT_SENT,
    amount
})

export const setDescription = description => ({
    type: profileTypes.SET_DESCRIPTION,
    description
})

export const setMyIDSent = myID => ({
    type: profileTypes.SET_MYID_SENT,
    myID
})

export const setIsValidIDWalletSent = mstatus => ({
    type: profileTypes.SET_ISVALID_IDWALLET_SENT,
    mstatus
})

export const setIsValidAmountSent = mstatus => ({
    type: profileTypes.SET_ISVALID_AMOUNT_SENT, 
    mstatus
})

export const setIsValidDescription = mstatus => ({
    type: profileTypes.SET_ISVALID_DESCRIPTION,
    mstatus
})

export const setIsValidFormSent = mstatus => ({
    type: profileTypes.SET_ISVALID_FORM_SENT,
    mstatus
})

export const postSent = () => ({
    type:profileTypes.POST_SENT
})

export const sentSuccess = () => ({
    type: profileTypes.SENT_SUCCESS
})

export const sentFail = () => ({
    type: profileTypes.SENT_FAIL
})