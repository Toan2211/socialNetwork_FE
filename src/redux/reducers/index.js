import { combineReducers } from 'redux'
import auth from './authReducer'
import theme from './themeReducer'
import alert from './alertReducer'
import profile from './profileReducer'
import socket from './socketReducer'
import homePosts from './postReducer'
import status from './statusReducer'
import detailPost from './detailPostReducer'
import message from './messageReducer'
import online from './onlineReducer'
import peer from './peerReducer'
import suggestions from './suggestionsReducer'
import notify from './notifyReducer'
export default combineReducers({
    auth,
    theme,
    alert,
    profile,
    socket,
    homePosts,
    status,
    detailPost,
    message,
    online,
    peer,
    suggestions,
    notify
})