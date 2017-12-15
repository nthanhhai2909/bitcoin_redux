import { combineReducers } from 'redux'
import registerReducers from './registerReducer'
import loginReducers from './loginReducer'

export default combineReducers({
    registerReducers,
    loginReducers,
})
