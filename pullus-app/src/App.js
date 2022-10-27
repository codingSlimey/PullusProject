import './App.css'

import Home from './components/HOME/Home'
import Login from './components/LOGIN/Login'
import ForgotPassword from './components/LOGIN/ForgotPassword'
import ResetPassword from './components/LOGIN/ResetPassword'

function App() {
  return (
    <div className="App">
        <Home /> 
        <Login />
        <ForgotPassword />
        <ResetPassword />
    </div>
  );
}

export default App;
