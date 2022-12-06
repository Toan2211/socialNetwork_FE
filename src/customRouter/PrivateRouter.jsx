import { Route, Navigate } from 'react-router-dom'
import React from 'react'
const PrivateRouter = (props) => {
    const firstLogin = localStorage.getItem('firstLogin')
    return firstLogin ? <Route {...props} /> : <Navigate to="/" />
}

export default PrivateRouter
