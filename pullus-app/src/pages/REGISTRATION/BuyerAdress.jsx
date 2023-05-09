import React, { useEffect, useState } from 'react'
import Input from '../../components/FARMER/Input'
import Button from '../../components/FARMER/button'
import { useNavigate } from 'react-router-dom'
import Select from '../../components/FARMER/Select'
import Emodal from '../../modal/EModal'
import FarmersLocation from './FarmersLocation'
import { useUserAuth } from '../../context/auth'
import { FaPlay } from 'react-icons/fa'

import { getStates } from '../../api'

//Hooks

import axios from 'axios'

import mapboxgl from 'mapbox-gl'

const MAPBOX_ACCESS_TOKEN =
	'pk.eyJ1Ijoic3dlZXQtcmlkZSIsImEiOiJjbGRpdjZ4cDAxaHhkM3BwaWYxN2xobHIzIn0.uVQdmc7mOq5m9x5ICDz8UA'

// function getLocation() {
// 	return new Promise((resolve, reject) => {
// 		if (navigator.geolocation) {
// 			navigator.geolocation.getCurrentPosition(resolve, reject)
// 		} else {
// 			reject('Geolocation is not supported by this browser.')
// 		}
// 	})
// }

export default function BuyerAdress() {
	// Function to warn users when they have not completed their onboarding steps
	// useBeforeUnload()

	const [states, setStates] = useState([])
	const [lgas, setLgas] = useState([])
	const [selectedState, setSelectedState] = useState('')
	const [selectedLga, setSelectedLga] = useState('')
	const [showModal, setShowModal] = useState(false)
	const [response, setResponse] = useState('')
	const [lat, setLat] = useState('')
	const [long, setLong] = useState('')
	const { tempUser, setTemporaryUserData } = useUserAuth()
	const [isdisabled, setIsdisabled] = useState(true)

	const [location, setLocation] = useState('')

	useEffect(() => {
		navigator.geolocation.getCurrentPosition((position) => {
			setLat(position.coords.latitude)
			setLong(position.coords.longitude)
		})
	}, [])

	const getUserLocation = async (latitude, longitude) => {
		const geocoderUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${longitude},${latitude}.json?access_token=${MAPBOX_ACCESS_TOKEN}`
		const response = await fetch(geocoderUrl)
		const data = await response.json()

		return data.features[0].place_name // Return the user's location
	}

	const theAnswer = (res) => {
		setResponse(res)
		if (res === 'yes') {
			getUserLocation(lat, long).then((location) => {
				console.log(location)
				setLocation(location)
			})
			// axios
			// 	.get(
			// 		`https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/reverseGeocode?f=pjson&featureTypes=&location=${lat},${long}`
			// 	)
			// 	.then((res) => {
			// 		const { address } = res.data
			// 		console.log(address)
			// 		console.log(address?.Region)
			// 		console.log(lat)
			// 		console.log(long)
			// 		setLocation(address.Region)
			// 		console.log(location)
			// 	})
			setShowModal(false)
			// loader
		} else {
			alert('You have to be on your farm to be able to capture your location')
			setShowModal(false)
			return
		}
	}

	const handleFarmersLocation = () => {
		setShowModal(true)
	}

	useEffect(() => {
		axios
			.get(
				'https://pullusafrica.com.ng:8080/apis/v1/pullus/signup/statesAndLga'
			)
			.then((res) => {
				const apiArray = Object.entries(res.data)
				const mappedArray = apiArray.map((item) => {
					return { state: item[0], lga: item[1] }
				})
				setStates(mappedArray)
			})
			.catch((err) => {
				console.log(err)
			})
	}, [])

	const handleStateChange = (e) => {
		const state = e.target.value
		console.log(state)
		const selectedState = states.find((item) => item.state === state)
		setLgas(selectedState.lga)
		setSelectedState(state)
	}

	const handleLgaChange = (e) => {
		setSelectedLga(e.target.value)
	}

	const navigate = useNavigate()

	useEffect(() => {
		if (lat && long && selectedState && selectedLga && location) {
			setIsdisabled(false)
			return
		} else {
			setIsdisabled(true)
			return
		}
	}, [lat, location, long, selectedLga, selectedState])

	const handleSubmit = () => {
		setTemporaryUserData({
			...tempUser,
			latitude: `${lat}`,
			longitude: `${long}`,
			businessAddress: location,
			state: selectedState,
			lga: selectedLga,
		})
		console.log(tempUser)
		navigate('/onboarding/business-info')
	}

	useEffect(() => {
		if (tempUser.selectedState) {
			navigate('/onboarding/business-info')
		}
	})

	return (
		<div className='py-10 font-bold h-full flex justify-center'>
			<div className='m-auto w-full max-w-[800px] px-10'>
				<h1 className='font-bold my-5 text-primary text-xl'>Address</h1>
				<div>
					<div className='flex flex-col'>
						<Input
							type='text'
							placeholder='Country: select Country'
							value='Nigeria'
							label='Select Country'
							// onChange={handleStateChange}
							disabled
						/>
					</div>

					<Select
						name='country'
						id='countries'
						placeholder='country'
						onChange={handleStateChange}
						label='Select State'
					>
						<option> Select State</option>
						{states.map((state, index) => {
							return (
								<option
									key={index}
									value={state.state}
								>
									{state.state}
								</option>
							)
						})}
					</Select>

					<Select
						name='lga'
						id='lgas'
						placeholder='lga'
						onChange={handleLgaChange}
						label='Select LGA'
					>
						<option> Select LGA</option>
						{lgas.map((lga, index) => {
							return (
								<option
									key={index}
									value={lga}
								>
									{lga}
								</option>
							)
						})}
					</Select>

					<div className='flex flex-col'>
						<Input
							type='text'
							placeholder='Adresss'
							label='Address'
						/>
					</div>
				</div>
				<div className='flex flex-col items-start'>
					<p className='text-primary my-1'> Capture Address</p>
					<button
						onClick={handleFarmersLocation}
						className='font-bold px-2 py-3 rounded-sm my-3 text-white bg-fade w-full'
					>
						Click here to capture GPS Location{' '}
					</button>
					<Input
						type='text'
						placeholder='28, My street, PC414'
						label='Address Details'
						value={location}
					/>
				</div>

				<div className='flex justify-center'>
					<button
						// disabled={isdisabled}
						onClick={handleSubmit}
						className={`text-xs w-fit  py-4 px-10 flex items-center ${
							isdisabled
								? 'disabled:cursor-not-allowed bg-grey filter text-black/40'
								: 'bg-fade text-white'
						}   md:text-base rounded-full shadow-xl  my-auto`}
					>
						Continue
						<FaPlay className='ml-3 h-4 w-4' />
					</button>
				</div>
				{showModal && (
					<div className={` z-10 fixed bg-modal left-0 top-0 h-screen w-full`}>
						<div className='emodal'>
							<Emodal modalProps={<FarmersLocation theAnswer={theAnswer} />} />
						</div>
					</div>
				)}
			</div>
		</div>
	)
}
