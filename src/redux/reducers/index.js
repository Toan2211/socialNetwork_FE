import { combineReducers } from 'redux'
import auth from './authReducer'
import theme from './themeReducer'
import alert from './alertReducer'
export default combineReducers({
    auth,
    theme,
    alert
})