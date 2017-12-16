import {profileTypes} from '../constants/actionTypes'
import {combineReducers} from 'redux'

const initialInfor = {
    name: '',
    username: '',
    balance: '',
    idWallet: '',
    myID: '',
}

const initialStateGetPropfile = {
    isFetching: false,
    isGetProfile: false
}

const initialStateTransaction = {
    transactions: []
}

const initialStateGetTransaction = {
    isFetching: false,
    isGetTransaction: false,
}

const infor = ( state = initialInfor, action) => {
    switch(action.type){
        case profileTypes.SET_NAME_PROFILE:
            return Object.assign({}, state, {
                name: action.name
            });
        case profileTypes.SET_BALANCE:
            return Object.assign({}, state, {
                balance: action.balance
            });
        case profileTypes.SET_IDWALLET:
            return Object.assign({}, state, {
                idWallet: action.idWallet
            });
        case profileTypes.SET_USERNAME_PROFILE:
            return Object.assign({}, state, {
                username: action.username
            });
        case profileTypes.SET_MYID:
            return Object.assign({}, state, {
                myID: action.myID
            });
        default: 
            return state;
    }
}

const getProfile = (state = initialStateGetPropfile, action) => {
    switch(action.type){
        case profileTypes.POST_PROFILE:
            return Object.assign({}, state, {
                isFetching: true
            });
        case profileTypes.GET_PROFILE_FAIL:
            return Object.assign({}, state, {
                isFetching: false,
                isGetProfile: false,
            });
        case profileTypes.GET_PROFILE_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                isGetProfile: true,
            })
        default:
            return state;
    }
}

const transactions = (state = initialStateTransaction, action) => {
    switch(action.type){
        case profileTypes.SET_TRANSACTION_PROFILE:
            return Object.assign({}, state, {
                transactions: action.transactions
            });
        default: 
            return state;
    }
}

const getTransaction = (state = initialStateGetTransaction, action) => {
    switch(action.type){
        case profileTypes.POST_TRANSACTION_PROFILE:
            return Object.assign({}, state, {
                isFetching: true
            });
        case profileTypes.GET_TRANSACTION_FAIL:
            return Object.assign({}, state, {
                isFetching: false,
                isGetTransaction: false
            });
        case profileTypes.GET_TRANSACTION_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                isGetTransaction: true,
            })
        default:
            return state;
    }
}


export default combineReducers({
    infor,
    getProfile,
    transactions,
    getTransaction
})