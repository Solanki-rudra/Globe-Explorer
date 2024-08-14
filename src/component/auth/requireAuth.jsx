import React from 'react'
import { useAuth } from './auth'
import { Navigate, useLocation } from 'react-router-dom'

const RequireAuth = ({ children }) => {
    const location = useLocation()
    const auth = useAuth()
    return auth.user ? children : <Navigate to='/login' state={location.pathname} />
}

export default RequireAuth
