import { combineReducers } from 'redux'
import auth from './authReducer'
import theme from './themeReducer'

export default combineReducers({
    auth,
    theme
})