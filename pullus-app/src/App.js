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
import { useEffect, useState } from "react";
import axios from "axios";
import Dashboard from "./components/VENDOR/Dashboard";

function App() {

  const [biodataState, setBiodataState] = useState('');
  const [addressDataState, setAddressDataState] = useState('');
  const [businessDataState, setBusinessDataState] = useState('');
  const [serviceState, setServiceState] = useState('');
  const [dataState, setDataState] = useState({
                                      businessAddress: "Allen Av",
                                      businessName: "Transglobal",
                                      bvn: "22398544539",
                                      cacUrl: "cacng.com",
                                      city: "Ikeja",
                                      country: "Nigeria",
                                      dob: "12-04-1970",
                                      email: "jonnybones@gmail.com",
                                      firstName: "Jonny",
                                      fullAddress: "Tubman drive",
                                      fullName: "Jonny Bones",
                                      gender: "M",
                                      houseNumber: "12",
                                      landMark: "Gov't house",
                                      lastName: "Bones",
                                      latitude: "7",
                                      lga: "Ajah",
                                      lgaCode: "97854",
                                      longitude: "4",
                                      middleName: "Jon",
                                      nationalIDUrl: "natlid.io",
                                      nin: "4835756",
                                      password: "QWERTYUIOP",
                                      phoneNumber: "08038999992",
                                      pin: "1385",
                                      profilePicUrl: "myface.co",
                                      rcNumber: "6457612",
                                      registeredDate: "28-12-1980",
                                      signatureUrl: "alias",
                                      state: "Lagos",
                                      streetName: "Tubman drv",
                                      timestamp: "2023-01-28T12:07:40.970Z",
                                      tinNumber: "914563",
                                      town: "Lagos",
                                      usertype: "Farmer",
                                      vendorServiceType: "Vet Services",
                                      zipCode: "10001"
                                    });

  useEffect(() => {
    handleSignUp();
  }, []);

  const getBiodata = (data) => {
    setBiodataState(data);
    console.log();
    setDataState(prev => {
      return {
        ...prev,
        firstName: biodataState.firstName,
        middleName: biodataState.middleName,
        email: biodataState.email,
        phoneNumber: biodataState.phoneNumber,
        nin: biodataState.nin
      }
    })
  }

  const getAddressData = (data) => {
    setAddressDataState(data)
    setDataState(prev => {
      return {
        ...prev,
        country: addressDataState.country,
        state: addressDataState.state,
        city: addressDataState.city,
        town: addressDataState.town,
        zipCode: addressDataState.zipCode

      }
    })
  }

  const getBusinessInfo = (data) => {
    setBusinessDataState(data)
    setDataState(prev => {
      return {
        ...prev,
        businessName: businessDataState.businessName,
        registeredDate: businessDataState.registeredDate,
        rcNumber: businessDataState.rcNumber,
        tinNumber: businessDataState.tinNumber
      }
    })
  }

  const getSelectedService = (data) => {
    setServiceState(data)
    setDataState(prev => {
      return {
        ...prev,
        serviceState: serviceState.vendorServiceType
      }
    })
  }

  const print = (data) => {
    console.log('Address Data => ' + JSON.stringify(dataState))
  }

  const handleSignUp = () => {
    const url = 'https://pullusafrica.com.ng:8080/apis/v1/pullus/signup/new/users';
    // axios
    //   .post(url, dataState)
    //   .then((response) => {
    //     console.log(response.data)
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   })
    fetch(url, {
      method: 'POST',
      headers: { "Content-type" : "application/json "},
      body: JSON.stringify(dataState)
    }).then((response) => {
      console.log(response.data)
    }).catch((error) => {
      console.error(error);
    })
  }

  
  // console.log('Address Data => ' + JSON.stringify(addressDataState))
  // console.log('Business Data => ' + JSON.stringify(businessDataState))
  // console.log('Service => ' + JSON.stringify(serviceState))
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
        <Route path='/vendor/dashboard' element={<Dashboard />} />
        <Route path='/vendor/biodata/information' element={<BioData func={getBiodata} />} />
        <Route path='/vendor/biodata/information/address' element={<BioDataAddress func={getAddressData} />} />
        <Route path='/vendor/biodata/information/business' element={<BioDataBusinessInfo func={getBusinessInfo} />} />
        <Route path='/vendor/biodata/information/service-to-provide' element={<ServiceToProvide func={getSelectedService} />} />
        <Route path='/vendor/biodata/information/documents-upload' element={<BioDataDocUpload func={print}/>} />
      </Routes>
    </main>
  );
}

export default App;
