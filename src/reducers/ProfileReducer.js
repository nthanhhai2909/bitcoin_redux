import {profileTypes} from '../constants/actionTypes'
import {combineReducers} from 'redux'
const initialInfor = {
    name: '',
    username: '',
    balance: '',
    idWallet: '',
    myID: '',
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

export default combineReducers({
    infor
})