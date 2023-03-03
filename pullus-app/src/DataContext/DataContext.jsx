import { createContext, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
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
                                        })}
                    const allData = {
                        getBiodata,
                        getAddressData,
                        getBusinessInfo,
                        getSelectedService,
                        print,
                        handleSignUp

                    }
    return(
        <DataContext.Provider value={{ allData }}>{children}</DataContext.Provider>
    )
}

