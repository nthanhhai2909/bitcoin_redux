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

 export const setUsernameSent = (username) => ({
     type: profileTypes.SET_USERNAME_SENT,
     username
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

export const resetInputSent = () => ({
    type: profileTypes.RESET_INPUT_SENT
})

// async  function isValidIDWalletSent(idWallet) {
//     const infor = await axios.get('https://tradingbitcoin.herokuapp.com/user/wallet/' + idWallet);
  
//     console.log('hihi', infor);
//     return infor;
//     // if(infor.data.data.status === 'true'){
//     //     if(infor.data.data.length > 0 && (username !== infor.data.data[0].username)){
            
//     //         return infor;
//     //     }
//     // }
//     // return false;
// }

const isValiAmountSent = (amount) => {
    if(amount.length === 0){
        return false;

    }
    let countDecimal = 0;
    for(let i = 0; i < amount.length; i++){
        if(amount[i] === '.'){
            countDecimal++;
            if(countDecimal > 1){
                return false;
            }
        }
        if(amount[i] < '0' || amount[i] > '9'){
            return false
        }
    }
    return true;
}

const isValidDescription = (description) => {
    if(description.length === 0){
        return false
    }
    return true;
}


export const handleSent = () => async (dispatch, getState) => {

    let count = 0
    let informationSent =  await axios.get('https://tradingbitcoin.herokuapp.com/user/wallet/' 
            + getState().ProfileReducers.sent.idWallet);

    console.log('hihi', informationSent);
    if(informationSent.data.status === 'true'){
        if(informationSent.data.data.length > 0 && 
            getState().ProfileReducers.infor.username !== informationSent.data.data[0].username){
            dispatch(setIsValidIDWalletSent(true));
        }
        else{
            dispatch(setIsValidIDWalletSent(false));
            count++
        }
    }


    if(isValiAmountSent(getState().ProfileReducers.sent.amount)){
        dispatch(setIsValidAmountSent(true));
    }
    else{
        dispatch(setIsValidAmountSent(false));
        count++;
    }

    if(isValidDescription(getState().ProfileReducers.sent.description)){
        dispatch(setIsValidDescription(true));
    }
    else{
        dispatch(setIsValidDescription(false));
        count++;
    }

    if(count > 0){
        dispatch(setIsValidFormSent(false))
        return;
    }
    else{dispatch(dispatch(setIsValidFormSent(true)));}

    // Make a tranfer
    axios.put('https://tradingbitcoin.herokuapp.com/userSendMoney', {
        _id: getState().ProfileReducers.infor.myID,
        tranfer: getState().ProfileReducers.sent.amount,
    })
    .then((response) =>{
        if(response.data.status === 'true'){
            dispatch(setBalance(response.data.balance))
            console.log('tao chay duoc r nek')
        }
    })
    .catch((err) =>console.log(err));

    // // Make receive tranfer
    axios.put('https://tradingbitcoin.herokuapp.com/userReceiveMoney', {
        _id: informationSent.data.data[0].myID,
        tranfer: getState().ProfileReducers.sent.amount,
    })
    .then((response) =>{
        if(response.data.status === 'true'){
        }
        else{
        }
    })
    .catch((err) =>console.log(err));

    let date = new Date();
    axios.post('https://tradingbitcoin.herokuapp.com/transaction',{
        username_sent: getState().ProfileReducers.infor.username,
        username_receive: informationSent.data.data[0].username,
        date: date.getTime().toString(),
        transaction_amount: getState().ProfileReducers.sent.amount,
        _description: getState().ProfileReducers.sent.description,
    })

    .then((response)=>{
        if(response.data.status === 'true'){
            dispatch(resetInputSent())
            dispatch(getTransactions(getState().ProfileReducers.infor.username))
        }
    })
    .catch((err) => console.log(err));
    dispatch(closeDialogSent());

}