import { Routes, Route } from "react-router-dom";

import Home from './components/HOME/Home'
import Login from './components/LOGIN/Login'
import Signup from './components/SIGNUP/Signup'
import BioData from './components/VENDOR/BioData'
import Privacy from './components/PRIVACY/Privacy'
import NewPassword from './components/LOGIN/NewPassword'
import ResetPassword from './components/LOGIN/ResetPassword'
import ForgotPassword from './components/LOGIN/ForgotPassword'
import BioDataAddress from "./components/VENDOR/BioDataAddress";
import ServiceToProvide from "./components/VENDOR/ServiceToProvide";
import BioDataBusinessInfo from "./components/VENDOR/BioDataBusinessInfo";
import BioDataDocUpload from "./components/VENDOR/BioDataDocUpload";

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
        <Route path='/vendor/biodata/information' element={<BioData />} />
        <Route path='/vendor/biodata/information/address' element={<BioDataAddress />} />
        <Route path='/vendor/biodata/information/business' element={<BioDataBusinessInfo />} />
        <Route path='/vendor/biodata/information/service-to-provide' element={<ServiceToProvide />} />
        <Route path='/vendor/biodata/information/documents-upload' element={<BioDataDocUpload />} />
      </Routes>
    </main>
  );
}

export default App;
