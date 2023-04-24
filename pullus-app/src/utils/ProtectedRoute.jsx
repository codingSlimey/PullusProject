import React  from 'react' 
import { useUserAuth } from '../context/auth'
import { Route, useNavigate } from 'react-router-dom'
import { withRouter } from 'react-router';


const ProtectedRoute = ({ component: Component, ...rest })=> {
  const {isLogin} = useUserAuth()
  const navigate = useNavigate()
   
  return (
    <Route
      {...rest}
      render={(props) =>
        isLogin ? <Component {...props} /> : navigate('/login')
      }
    />

  )
}

export default withRouter(ProtectedRoute)
