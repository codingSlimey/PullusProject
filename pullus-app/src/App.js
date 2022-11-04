import './App.css'

import Home from './components/HOME/Home'
import Login from './components/LOGIN/Login'
import ForgotPassword from './components/LOGIN/ForgotPassword'
import ResetPassword from './components/LOGIN/ResetPassword'
import NewPassword from './components/LOGIN/NewPassword'

function App() {
  return (
    <div className="App">
        <Home /> 
        <Login />
        <ForgotPassword />
        <ResetPassword />
        <NewPassword />
    </div>
  );
}

export default App;
