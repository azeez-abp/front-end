import {combineReducers} from 'redux'
import {testReducer} from './testReducer'
import { loginReducer } from './Login_reducer'

const allReducers  = {
    testReducer,
    loginReducer
    
}

export default combineReducers(allReducers)