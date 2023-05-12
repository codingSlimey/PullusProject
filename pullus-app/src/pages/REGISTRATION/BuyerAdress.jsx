import React, { useEffect, useState } from 'react'
import Input from '../../components/FARMER/Input'
// import Button from '../../components/FARMER/button'
import { useNavigate } from 'react-router-dom'
import Select from '../../components/FARMER/Select'
import Emodal from '../../modal/EModal'
import FarmersLocation from './FarmersLocation'
import { useUserAuth } from '../../context/auth'
import { FaPlay } from 'react-icons/fa'

import { getStates } from '../../api'

// import mapboxgl from 'mapbox-gl'
import { toast } from 'react-toastify'

//Hooks
import useOnboardingAddressForm from '../../hooks/FormValidators/useOnboardingAddressForm'
import { UpdateFormState } from '../../utils/setFormState'

// const MAPBOX_ACCESS_TOKEN =
// 	'pk.eyJ1Ijoic3dlZXQtcmlkZSIsImEiOiJjbGRpdjZ4cDAxaHhkM3BwaWYxN2xobHIzIn0.uVQdmc7mOq5m9x5ICDz8UA'

export default function BuyerAdress() {
	// Function to warn users when they have not completed their onboarding steps
	// useBeforeUnload()

	const navigate = useNavigate()

	const [states, setStates] = useState([])
	const [lgaList, setLgaList] = useState([])
	const [showModal, setShowModal] = useState(false)

	const { tempUser, setTemporaryUserData } = useUserAuth()

	//Form validation hook
	const { errors, validateField, validateForm } = useOnboardingAddressForm()

	const [addressForm, setAddressForm] = useState({
		latitude: '',
		longitude: '',
		businessAddress: '',
		state: '',
		lga: '',
	})

	// Function to get user location
	const getUserLocation = async () => {
		try {
			navigator.geolocation.getCurrentPosition(async (position) => {
				const { latitude, longitude } = position.coords
				setAddressForm({
					...addressForm,
					latitude: latitude,
					longitude: longitude,
				})

				// const geocoderUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${longitude},${latitude}.json?access_token=${MAPBOX_ACCESS_TOKEN}`
				// const response = await fetch(geocoderUrl)
				// const data = await response.json()
				// const location = data.features[0].place_name
				// setLocation(location)
			})
		} catch (error) {
			toast.error('There was an error getting your location')
		}
	}

	const handleOnchange = (event) => {
		let fieldValue = event.target.value

		validateField(event.target.name, event.target.value)
		UpdateFormState(event.target.name, fieldValue, addressForm, setAddressForm)
	}

	useEffect(() => {
		const getLgas = async () => {
			if (states && addressForm.state) {
				const selectedState = states.find(
					(item) => item.state === addressForm.state
				)
				setLgaList(await selectedState.lga)
			}
		}

		getLgas()
	}, [addressForm.state, states])

	const theAnswer = (res) => {
		if (res === 'yes') {
			getUserLocation()
			setShowModal(false)
		} else {
			alert('You have to be on your farm to be able to capture your location')
			setShowModal(false)
			return
		}
	}

	// Fetch states and lga on component mount
	useEffect(() => {
		const fetchStatesAndLga = async () => {
			try {
				const response = await getStates()
				const apiArray = Object.entries(response.data)
				const mappedArray = apiArray.map((item) => {
					return { state: item[0], lga: item[1] }
				})
				setStates(mappedArray)
			} catch ({ response }) {
				const { data } = response
				toast.error(data.message)
			}
		}
		fetchStatesAndLga()
	}, [])

	const handleSubmit = () => {
		const isValid = validateForm(addressForm)
		if (isValid) {
			setTemporaryUserData({
				...tempUser,
				...addressForm,
			})
			navigate('/onboarding/business-info')
		} else {
			toast.error('Please attend to all fields errors')
		}
	}

	// If the user has already started the registerRuntimeCompiler, it fetches the already inputted data and sets it
	useEffect(() => {
		if (tempUser.latitude) {
			setAddressForm({
				latitude: tempUser.latitude,
				longitude: tempUser.longitude,
				businessAddress: tempUser.businessAddress,
				state: tempUser.state,
				lga: tempUser.lga,
			})
		}
	}, [tempUser])

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
							readOnly={true}
							// onChange={handleStateChange}
							disabled
						/>
					</div>

					<Select
						name='state'
						placeholder='country'
						onChange={handleOnchange}
						label='Select State'
						value={addressForm.state}
						error={errors.state}
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
						placeholder='lga'
						onChange={handleOnchange}
						label='Select LGA'
						value={addressForm.lga}
						error={errors.lga}
					>
						<option> Select LGA</option>
						{lgaList.map((lga, index) => {
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
							name='businessAddress'
							placeholder='Address'
							label='Address details'
							onChange={handleOnchange}
							value={addressForm.businessAddress}
							error={errors.businessAddress}
						/>
					</div>
				</div>
				<div className='flex flex-col items-start'>
					<p className='text-primary my-1'> Capture Coordinates</p>
					<button
						onClick={() => setShowModal(true)}
						className='font-bold px-2 py-3 rounded-sm my-3 text-white bg-fade w-full'
					>
						Click here to capture GPS Location{' '}
					</button>
					{addressForm.latitude && addressForm.longitude && (
						<p className='text-green text-center w-full'>
							Location has been successfully captured
						</p>
					)}

					{errors.latitude && !addressForm.latitude && (
						<p className='text-[red] text-center w-full font-light text-sm mt-1'>
							{errors.latitude}
						</p>
					)}
					{errors.longitude && !addressForm.longitude && (
						<p className='text-[red] text-center w-full font-light text-sm mt-1'>
							{errors.longitude}
						</p>
					)}
				</div>

				<div className='flex justify-center mt-4'>
					<button
						onClick={handleSubmit}
						className={`text-xs w-fit  py-4 px-10 flex items-center bg-fade text-white md:text-base rounded-full shadow-xl  my-auto`}
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
