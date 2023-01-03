import { Routes, Route } from "react-router-dom";

import Home from './components/HOME/Home'
import Login from './components/LOGIN/Login'
import ForgotPassword from './components/LOGIN/ForgotPassword'
import ResetPassword from './components/LOGIN/ResetPassword'
import NewPassword from './components/LOGIN/NewPassword'
import Privacy from './components/PRIVACY/Privacy'
import Signup from './components/SIGNUP/Signup'

function App() {
  return (
    <main className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/sign-up' element={<Signup />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path='/reset-password' element={<ResetPassword />} />
        <Route path='/new-password' element={<NewPassword />} />
        <Route path='/privacy' element={<Privacy />} />
      </Routes>
    </main>
  );
}

export default App;
