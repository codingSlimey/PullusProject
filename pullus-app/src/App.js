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
import { useState } from "react";

function App() {

  const [biodataState, setBiodataState] = useState('');
  const [addressDataState, setAddressDataState] = useState('');
  const [businessDataState, setBusinessDataState] = useState('');
  const [serviceState, setServiceState] = useState('');


  const getBiodata = (data) => {
    setBiodataState(data);
  }

  const getAddressData = (data) => {
    setAddressDataState(data)
  }

  const getBusinessInfo = (data) => {
    setBusinessDataState(data)
  }

  const getSelectedService = (data) => {
    setServiceState(data)
  }

  console.log('Data => ' + JSON.stringify(biodataState))
  console.log('Address Data => ' + JSON.stringify(addressDataState))
  console.log('Business Data => ' + JSON.stringify(businessDataState))
  console.log('Service => ' + JSON.stringify(serviceState))
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
        <Route path='/vendor/biodata/information' element={<BioData func={getBiodata} />} />
        <Route path='/vendor/biodata/information/address' element={<BioDataAddress func={getAddressData} />} />
        <Route path='/vendor/biodata/information/business' element={<BioDataBusinessInfo func={getBusinessInfo} />} />
        <Route path='/vendor/biodata/information/service-to-provide' element={<ServiceToProvide func={getSelectedService} />} />
        <Route path='/vendor/biodata/information/documents-upload' element={<BioDataDocUpload />} />
      </Routes>
    </main>
  );
}

export default App;
