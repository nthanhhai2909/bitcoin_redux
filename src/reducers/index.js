import { combineReducers } from 'redux'
import registerReducers from './registerReducer'
import loginReducers from './loginReducer'
import blockChainInforReducers from './BlockChainInforReducer'
import ProfileReducers from './ProfileReducer'
export default combineReducers({
    registerReducers,
    loginReducers,
    blockChainInforReducers,
    ProfileReducers,
})
