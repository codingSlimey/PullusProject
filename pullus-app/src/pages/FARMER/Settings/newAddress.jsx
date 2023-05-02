import { HiOutlineArrowLeft } from 'react-icons/hi'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Select from '../../../components/FARMER/Select'
import axios from 'axios'

function NewAddress(props) {
	const navigate = useNavigate()
	const [states, setStates] = useState([])
	const [lgas, setLgas] = useState([])
	const [selectedState, setSelectedState] = useState('')
	const [selectedLga, setSelectedLga] = useState('')
	const [profile, setProfile]= useState({
		name: " ",
		Country: "Nigeria",
		dob: "",
		phone: "",
		email: "",
		state: selectedState,
		picture: ""

	})
	useEffect(() => {
		axios
			.get(
				'https://pullusafrica.com.ng:8080/apis/v1/pullus/signup/statesAndLga'
			)
			.then((res) => {
				const apiArray = Object.entries(res.data)
				const mappedArray = apiArray.map((item) => {
					// console.log(item[0])
					return { state: item[0], lga: item[1] }
				})
				// console.log(mappedArray)
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
		// setTemporaryUserData({ ...tempUser, area: state })
	}
	const handleLgaChange = (e) => {
		setSelectedLga(e.target.value)
	}

	return (
		<div className='font-bold pb-12'>
			<div className='flex items-center'>
				<button
					onClick={() => navigate('/farmer/settings')}
					className='bg-primary py-1 px-2 rounded-lg mr-4 text-[#fff]'
				>
					<HiOutlineArrowLeft className='h-6 w-6' />
				</button>
				<div className='text-primary  my-6'>New Address</div>
			</div>

			<div className='flex flex-col md:flex-row gap-14'>
				<div className='grid  flex-1 gap-y-4'>
					<div className='flex flex-col items-start justify-start'>
						<label className='mb-3 text-primary'>Street Name</label>
						<input
							type='text'
							placeholder='anthonyadams@domain.comom'
							className='h-14 px-6 placeholder:text-placeholder my-auto shadow-xl bg-[#fff] border-none w-full rounded-full  focus:outline-none focus:border-none '
						/>
					</div>

					<div className='flex flex-col justify-start items-start mt-4'>
						<label className='mb-3 text-primary'>Country</label>
						<select
							id='countries'
							className='h-14 px-6 placeholder:text-placeholder text-primary font-normal my-auto shadow-xl bg-[#fff] border-none outline-none w-full rounded-full  focus:outline-none focus:border-none '
						>
							<option>Nigeria</option>
						</select>
					</div>

					<div className='flex flex-col justify-start w-full items-start mt-4'>
						<label className='mb-3 text-primary'>State</label>
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
					</div>

					<div className='flex flex-col items-start justify-start w-full mt-4'>
						<label className='mb-3 text-primary'>Local Government</label>
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

					</div>

					<div className=' flex flex-col items-start w-full justify-start mt-4'>
						<label className='mb-3 text-primary'>Capture Address</label>
						<div className='bg-primary h-12 w-full text-center flex items-center justify-center text-[#fff] cursor-pointer text-xl'>
							Click here to capture GPS Location
						</div>
					</div>

					<div className='flex flex-col items-start justify-start w-full mt-4'>
						<label className='mb-3 text-primary'>Address Details</label>
						<input
							type='text'
							placeholder='anthonyadams@domain.comom'
							className='h-14 px-6 placeholder:text-placeholder my-auto shadow-xl bg-[#fff] border-none w-full rounded-full  focus:outline-none focus:border-none '
						/>
					</div>

					<div className='flex items-center gap-2 h-14 px-6 mb-6 shadow-xl bg-[#fff] border-none w-full rounded-full  focus:outline-none focus:border-none'>
						<input
							type='checkbox'
							id='remember'
							className='text-primary border-primary focus:text-primary outline-0 box-shadow-outline-sm focus:outline-none focus-within:text-primary focus-visible:text-primary active:text-primary focus:border-primary active:border-primary'
						/>
						<label className='text-primary font-normal'>
							Make this your default address
						</label>
					</div>
				</div>
				<div className='flex-1'>
					<div className='h-[60%] rounded-xl w-full bg-grey'></div>
				</div>
			</div>

			<div className='mt-12 flex justify-center gap-16 '>
				<button
					onClick={() => navigate('/farmer/settings')}
					className={`w-[fit] bg-primary text-[#fff] py-4 px-36 flex  items-center rounded-full shadow-xl  my-auto`}
				>
					Add
				</button>
			</div>
		</div>
	)
}

export default NewAddress
