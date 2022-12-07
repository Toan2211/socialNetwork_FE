import { combineReducers } from 'redux'
import auth from './authReducer'
import theme from './themeReducer'
import alert from './alertReducer'
import profile from './profileReducer'
import socket from './socketReducer'
export default combineReducers({
    auth,
    theme,
    alert,
    profile,
    socket
})