
import {blockChaninInforTypes} from '../constants/actionTypes'
import { combineReducers } from 'redux'
const initalStateInput = {
    transactions: []
}
const initStatePost = {
    isFetching: false,
    statusPost: false,
}

const inputs = (state = initalStateInput, action) => {
    switch(action.type){
        case blockChaninInforTypes.SET_TRANSACTION:
            return Object.assign({}, state, {
                transactions: action.transactions
            });
        default: return state;
    }
}



const posts = (state = initStatePost, action) => {
    switch(action.type){
        case blockChaninInforTypes.TRANSACTION_POST:
            return Object.assign({}, state, {
                isFetching: true
            });
        case blockChaninInforTypes.TRANSACTION_FAIL:
            return Object.assign({}, state, {
                statusPost: false
            });
        case blockChaninInforTypes.TRANSACTION_SUCCESS:
            return Object.assign({}, state, {
                statusPost: true
            });
        default:
            return state
    }
}

export default combineReducers({
    inputs,
    posts,
})