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

const initialStateSent =  {
    isShow: false,
    isWallet: '',
    amount:'',
    description:'',
    myID: '',
}

const initialStateIsValidSent = {
    isValidIDWalletSent: true,
    isValidAmountSent: true, 
    isVlidDescription: true, 
    idValidFormSent: true,
}

const initialStateSubmitFormSent = {
    isFetching: false,
    isSent: false,
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

const sent = (state = initialStateSent, action) => {
    switch(action.type){
        case profileTypes.OPEN_DIALOG_SENT:
            return Object.assign({}, state, {
                isShow: true
            });
        case profileTypes.CLOSE_DIALOG_SENT:
            return Object.assign({}, state, {
                isShow: false
            });
        case profileTypes.SET_IDWALLET_SENT:
            return Object.assign({}, state, {
                idWallet: action.idWallet
            });
        case profileTypes.SET_AMOUNT_SENT:
            return Object.assign({}, state, {
                amount: action.amount
            })
        case profileTypes.SET_DESCRIPTION:
            return Object.assign({}, state, {
                description: action.description
            });
        case profileTypes.SET_MYID_SENT:
            return Object.assign({}, state, {
                myID: action.myID
            });
        case profileTypes.RESET_INPUT_SENT:
            return Object.assign({}, initialStateSent);
        default:
            return state;
    }
}

const isValidForm = (state = initialStateIsValidSent, action) => {
    switch(action.type){
        case profileTypes.SET_ISVALID_IDWALLET_SENT:
            return Object.assign({}, state, {
                isValidIDWalletSent: action.mstatus
            });
        case profileTypes.SET_ISVALID_AMOUNT_SENT:
            return Object.assign({}, state, {
                isValidAmountSent: action.mstatus
            });
        case profileTypes.SET_ISVALID_DESCRIPTION:
            return Object.assign({}, state, {
                isVlidDescription: action.mstatus
            });
        case profileTypes.SET_ISVALID_FORM_SENT:
            return Object.assign({}, state, {
                isValidForm: action.mstatus
            })
        case profileTypes.RESET_ISVALID_SENT: 
            return Object.assign({}, initialStateIsValidSent)
        default:
            return state; 
    }
}
const submitForm = (state = initialStateSubmitFormSent, action) => {
    switch(action.type){
        case profileTypes.POST_SENT:
            return Object.assign({}, state, {
                isFetching: true
            });
        case profileTypes.SENT_FAIL:
            return Object.assign({}, state, {
                isFetching: false,
                isSent: false
            });
        case profileTypes.SENT_SUCCESS:
            return Object.assign({}, state, {
                isFetching: true,
                isSent: true,
            });
        case profileTypes.RESET_SUBMIT_FORM_SENT:
            return Object.assign({}, initialStateSubmitFormSent);
        default:
            return state;
    }
}

export default combineReducers({
    infor,
    getProfile,
    transactions,
    getTransaction, 
    sent,
    isValidForm,
    submitForm
})