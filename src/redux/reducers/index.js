import { combineReducers } from 'redux'
import auth from './authReducer'
import theme from './themeReducer'
import alert from './alertReducer'
import profile from './profileReducer'
export default combineReducers({
    auth,
    theme,
    alert,
    profile
})