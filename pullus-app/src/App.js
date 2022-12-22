import './App.css'

import Home from './components/HOME/Home'
import Login from './components/LOGIN/Login'
import ForgotPassword from './components/LOGIN/ForgotPassword'
import ResetPassword from './components/LOGIN/ResetPassword'
import NewPassword from './components/LOGIN/NewPassword'
import Privacy from './components/PRIVACY/Privacy'
import Signup from './components/SIGNUP/Signup'

function App() {
  return (
    <div className="App">
        <Home /> 
        <Login />
        <Signup />
        <ForgotPassword />
        <ResetPassword />
        <NewPassword />
        <Privacy />
    </div>
  );
}

export default App;
