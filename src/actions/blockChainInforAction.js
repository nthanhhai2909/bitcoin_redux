import {blockChaninInforTypes} from '../constants/actionTypes'
import axios from 'axios'
export const setTransaction = (transactions) => ({
    type: blockChaninInforTypes.SET_TRANSACTION,
    transactions
})

export const postTransaction = () => ({
    type: blockChaninInforTypes.TRANSACTION_POST
})

export const transactionFail = () => ({
    type: blockChaninInforTypes.TRANSACTION_FAIL
})

export const transactionSuccess = () => ({
    type: blockChaninInforTypes.TRANSACTION_SUCCESS
})

export const loadForm = () => (dispatch, getState) => {

    dispatch(postTransaction());
    axios.get('https://tradingbitcoin.herokuapp.com/transaction')
        .then((response) =>{
            if(response.data.status === 'true'){
                dispatch(transactionSuccess());
                dispatch(setTransaction(response.data.data));
            }
            else{
                dispatch(transactionFail());
            }
        })
        .catch((err) => {dispatch(transactionFail())});  
}