import { HiOutlineArrowLeft } from 'react-icons/hi'
import { useNavigate } from 'react-router-dom'
import { UpdateFormState } from '../../../utils/setFormState'
import { useState, useEffect} from 'react'
import axios from 'axios'
import Select from '../../../components/FARMER/Select'

function EditProfile(props) {
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

	const handleForm = (event)=>{
	
			UpdateFormState(
				event.target.name,
				event.target.value,
				profile,
				setProfile
			)
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
				<div className='text-primary  my-6'>Edit profile</div>
			</div>

			<div className='md:grid md:grid-cols-2 flex flex-col  gap-x-16 gap-y-4 mt-12'>
				<div className='flex flex-col '>
					{/* <label className='mb-3 text-primary'>Poultry Type</label> */}
					<label
					htmlFor="name"
					className=' my-3 text-start text-primary flex items-start w-full'
				>
				Farmer's name
				</label>
					<input
						type='text'
						placeholder='Anthony Adams'
						label="Farmer's name"
						onChange={handleForm}
						value={profile.name}
						className='h-14 px-6 placeholder:text-placeholder my-auto shadow-xl bg-[#fff] border-none w-full rounded-full  focus:outline-none focus:border-none '
					/>
				</div>

				<div className='grid mt-4'>
					{/* <label className='mb-3 text-primary'>Start date</label> */}
					<label
					htmlFor="name"
					className=' my-3 text-start text-primary flex items-start w-full'
				>
				country
				</label>
					<select
						onChange={handleForm}
						value={profile.Country}
						id='countries'
						className='h-14 px-6 placeholder:text-placeholder text-primary font-normal my-auto shadow-xl bg-[#fff] border-none outline-none w-full rounded-full  focus:outline-none focus:border-none '
					>
						<option> Nigeria</option>
						
					</select>
				</div>

				<div className='grid mt-4'>
					{/* <label className='mb-3 text-primary'>
						Number of birds to be reared:
					</label> */}
					<label
					htmlFor="name"
					className=' my-3 text-start text-primary flex items-start w-full'
				>
				dob
				</label>
					<input
						onChange={handleForm}
						value={profile.dob}
						type='text'
						placeholder='13/08/1990'
						className='h-14 px-6 placeholder:text-placeholder my-auto shadow-xl bg-[#fff] border-none w-full rounded-full  focus:outline-none focus:border-none '
					/>
				</div>

				<div className='grid mt-4'>
					{/* <label className='mb-3 text-primary'>
						Enter a specific number (minimum of 500)
					</label> */}
					<label
					htmlFor="name"
					className=' my-3 text-start text-primary flex items-start w-full'
				>
				phone number
				</label>
					<input
					value={profile.phone}
						onChange={handleForm}
						type='text'
						placeholder='+234 803 1111 111'
						className='h-14 px-6 placeholder:text-placeholder my-auto shadow-xl bg-[#fff] border-none w-full rounded-full  focus:outline-none focus:border-none '
					/>
					
				</div>

				<div className='grid mt-4'>
				<label
					htmlFor="name"
					className=' my-3 text-start text-primary flex items-start w-full'
				>
				Email
				</label>
					{/* <label className='mb-3 text-primary'>DoC brand</label> */}
					<input
						type='text'
						value={profile.email}
						onChange={handleForm}
						placeholder='anthonyadams@domain.comom'
						className='h-14 px-6 placeholder:text-placeholder my-auto shadow-xl bg-[#fff] border-none w-full rounded-full  focus:outline-none focus:border-none '
					/>
				</div>

				<div className='grid mt-4'>
					{/* <label className='mb-3 text-primary'>Feed brand</label> */}
					<label
					htmlFor="name"
					className=' my-3 text-start text-primary flex items-start w-full'
				>
				State
				</label>
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

				<div className='grid mt-4'>
					{/* <label className='mb-3 text-primary'>Additional Services</label> */}
					<label
					htmlFor="name"
					className=' my-3 text-start text-primary flex items-start w-full'
				>
				Upload profile picture
				</label>
					<input
						onChange={handleForm}
						value={profile.picture}
						className='h-14 px-6 placeholder:text-placeholder text-primary font-normal my-auto shadow-xl bg-[#fff] border-none outline-none w-full rounded-full  focus:outline-none focus:border-none '
						type='text'
						placeholder='Upload Profile picture'
					/>
				</div>
			</div>

			<div className='mt-12 flex justify-center gap-16 '>
				<button
					onClick={() => navigate('/farmer/settings')}
					className={`w-[fit] bg-primary text-[#fff] py-4 px-36 flex  items-center rounded-full shadow-xl  my-auto`}
				>
					Update
				</button>
			</div>
		</div>
	)
}

export default EditProfile
