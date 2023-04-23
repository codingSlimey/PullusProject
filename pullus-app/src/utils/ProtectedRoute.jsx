import React, { useNavigate, Navigate } from 'react'
import { useUserAuth } from '../context/auth'
import { Route } from 'react-router-dom'

export default function ProtectedRoute({ children }) {
  const {isLogin} = useUserAuth()
  const navigate = useNavigate()

  return isLogin === true ? children : <Navigate to="/login" replace />;
}
