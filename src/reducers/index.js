import { combineReducers } from 'redux'
import registerReducers from './registerReducer'
import loginReducers from './loginReducer'
import blockChainInforReducers from './BlockChainInforReducer'
export default combineReducers({
    registerReducers,
    loginReducers,
    blockChainInforReducers,
})
