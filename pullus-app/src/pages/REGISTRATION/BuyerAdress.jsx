import React, {useEffect, useState} from 'react'
import Input from '../../components/FARMER/Input'
import Button from '../../components/FARMER/button'
import { useNavigate } from 'react-router-dom'
import Select from  '../../components/FARMER/Select'
import Emodal from '../../modal/EModal'
import L from 'leaflet';
import { geocodeService } from 'esri-leaflet-geocoder';


import FarmersLocation from './FarmersLocation'
// import { getStates } from "../../api";

import axios from 'axios'

function getLocation() {
	return new Promise((resolve, reject) => {
	  if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(resolve, reject);
	  } else {
		reject("Geolocation is not supported by this browser.");
	  }
	});
  }



  export default function BuyerAdress() {
	const [states, setStates] = useState([])
	const [lgas, setLgas] = useState([])
	const [selectedState, setSelectedState] =useState('')
	const [showModal, setShowModal] = useState(false)
	const [response, setResponse]= useState("")
	const [currentLat, setCurrentLat] = useState('');
	const [currentlong, setCurrentLong] = useState('');
	const [CurrentLocation, setCurrentLocation]= useState('')

	// useEffect(()=>{
	// 		if (navigator.geolocation) {
	// 		  navigator.geolocation.getCurrentPosition(
	// 			position => {
	// 			  setCurrentLat(position.coords.latitude);
	// 			  setCurrentLong(position.coords.longitude);
	// 			},
	// 			error => console.error(error)
	// 		  );
	// 		} else {
	// 		  console.error('Geolocation is not supported by this browser');
	// 		}
	// }, [])

//   const getCoordinates = () => {
//     getLocation()
//       .then((position) => {
// 		console.log(position)
//         setLocation({
//           latitude: position.coords.latitude,
//           longitude: position.coords.longitude,
//         });
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

	const theAnswer = (res)=>{
		setResponse(res)
		if(res === 'yes'){
			console.log('Yaaaaayy')
			if (currentLat && currentlong) {
				const latlng = L.latLng(currentLat, currentlong);
				geocodeService()
				  .reverse()
				  .latlng(latlng)
				  .run((error, result) => {
					if (error) {
					  console.error(error);
					} else {
					  setCurrentLocation(result.address.LongLabel);
					  console.log(CurrentLocation)
					}
				  });
			  }	
			// getCoordinates()
			setShowModal(false)
			// loader
		}else {
		alert('You have to be on your farm to be able to capture your location')
		setShowModal(false)
		return
	}
}
const api_key= `e00eb06c82240bc2777c9171a2f42bdf`
const Api = `https://api.openweathermap.org/data/2.5/weather?`

	const handleSubmit = ()=>{

	} 

	const handleFarmersLocation = ()=>{
		setShowModal(true)	
		
	}


	useEffect(()=>{
		axios.get('https://pullusafrica.com.ng:8080/apis/v1/pullus/signup/statesAndLga')
		.then(res=>{
			const apiArray = Object.entries(res.data);
			const mappedArray = apiArray.map((item)=>{
				// console.log(item[0])
				return {state: item[0], lga: item[1]}

			})
			// console.log(mappedArray)
			setStates(mappedArray)

		})
		.catch(err=>{
			console.log(err)
		})
	}, [])

	const handleStateChange = (e) =>{
		const state = e.target.value
		const selectedState = states.find(item=> item.state === state)
		setLgas(selectedState.lga)
		setSelectedState(state)

		
	}
	const handleSucess= position => {
		setCurrentLat(position.coords.latitude)
		setCurrentLong(position.coords.longitude)
		console.log(currentLat)

		let theEndPoint = `${Api}lat=${currentLat}&lon=${currentlong}&&appid=${api_key}`
	axios.get(theEndPoint)
	.then((res)=>{
		console.log(res.data)
	})
	}

		const handleError = error => {
			console.error(error);
		  };

  const FarmersLocation = () => {
    if (navigator.geolocation) {
		const options = {
			enableHighAccuracy: true,
			// timeout: 5000,
			maximumAge: 0
		  };
	
      navigator.geolocation.getCurrentPosition(handleSucess, handleError, options)
    } else {
      console.error('Geolocation is not supported by this browser');
    }
	
  };
	const navigate = useNavigate()
	return (
		<div className='py-10 font-bold h-full flex justify-center'>
			<div className='m-auto w-full max-w-[800px] px-10'>
				<h1 className='font-bold my-5 text-primary text-xl'>Address</h1>
				<div>
					<div className='flex flex-col'>
					<h1 onClick={FarmersLocation} > Click</h1>

					<Input
						type='text'
						placeholder='Country: select Country'
						value='Nigeria'
						label='select Country'
					/>
					</div>
					<Select
					name='country'
					id='countries'
					placeholder='country'
					onChange={handleStateChange}
					label='select State'
					 >
						<option> Select State</option>
						{states.map((state, index) =>{
							return <option key={index} value={state.state}>{state.state}</option>
						} )}
					</Select>
					<Select
					name='lga'
					id='lgas'
					placeholder='lga'
					label='select LGA'
					 >
						<option> Select LGA</option>
						{lgas.map((lga, index) =>{
							return <option key={index} value={lga}>{lga}</option>
						}
						)}
					</Select>


                <div className='flex flex-col' >				
					<Input
						type='text'
						placeholder='Adresss'
						label='Address'
					/>
					</div>
				</div>
				<div className='flex flex-col items-start'>
					<p className='text-primary text-sm'> Capture Address</p>
					<button onClick={handleFarmersLocation} className='font-bold px-2 py-3 rounded-sm text-white bg-fade w-full'>
						Click here to capture GPS Location{' '}
					</button>
					<Input
						type='text'
						placeholder='28, My street, PC414'
						label='Address Details'
					/>
					<div className='flex gap-2'>
						<input
							type='checkbox'
							className='text-primary'
							placeholder='Make this your default address'
						/>
						<label
							htmlFor='check'
							className='text-primary text-sm'
						>
							Make this your default address
						</label>
					</div>
				</div>
				<div className='flex justify-center my-10 items-center'>
					<Button
						title='Continue'
						icon={true}
						color={`fade`}
						action={() => navigate('/buyer/business-info')}
					/>
				</div>
				{showModal && (
            <div
              className={` z-10 fixed bg-modal left-0 top-0 h-screen w-full`}
            >
              <div className="emodal">
                <Emodal modalProps={<FarmersLocation theAnswer={theAnswer} />}/>
              </div>
            </div>
          )}
				
			</div>
		</div>
	)
}


