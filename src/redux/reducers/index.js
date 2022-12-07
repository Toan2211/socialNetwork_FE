import { combineReducers } from 'redux'
import auth from './authReducer'
import theme from './themeReducer'
import alert from './alertReducer'
import profile from './profileReducer'
import socket from './socketReducer'
import homePosts from './postReducer'
import status from './statusReducer'

export default combineReducers({
    auth,
    theme,
    alert,
    profile,
    socket,
    homePosts,
    status
})