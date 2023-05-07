import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaPlay } from 'react-icons/fa'

//Components
import Input from '../../components/FARMER/Input'

//API
import { checkBvn } from '../../api'

//State (Context API)
import { useUserAuth } from '../../context/auth'

//Hooks & Utils
import { UpdateFormState } from '../../utils/setFormState'
import useBeforeUnload from '../../hooks/useBeforeUnload'

function BuyerBioData() {
	// Function to warn users when they have not completed their onboarding steps
	useBeforeUnload()

	const { tempUser, setTemporaryUserData } = useUserAuth()

	const navigate = useNavigate()
	const [isdisabled, setIsdisabled] = useState(true)
	const [isFormfilled, setIsFormFilled] = useState(true)
	const [errors, setError] = useState('')
	const [successMsg, setSuccessMsg] = useState('')
	const [isloading, setIsLoading] = useState(false)
	const [FormData, setFormData] = useState({
		firstName: '',
		lastName: '',
		middleName: '',
		email: tempUser ? tempUser.email : '',
		phoneNumber: '',
		dob: '',
		gender: '',
		bvn: '',
	})

	useEffect(() => {
		if (
			FormData.firstName &&
			FormData.lastName &&
			FormData.middleName &&
			FormData.phoneNumber &&
			FormData.gender
		) {
			setIsFormFilled(false)
			return
		} else {
			setIsFormFilled(true)
			return
		}
	}, [FormData])

	useEffect(() => {
		if (tempUser.bvn && tempUser.email) {
			navigate('/onboarding/address')
		}
	})

	const handleChange = (event) => {
		UpdateFormState(
			event.target.name,
			event.target.value,
			FormData,
			setFormData
		)
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
		if (
			!FormData.firstName ||
			!FormData.lastName ||
			!FormData.middleName ||
			!FormData.phoneNumber ||
			!FormData.gender
		) {
			alert('Please fill all fields')
			return
		} else {
			setTemporaryUserData({ ...tempUser, ...FormData })
			navigate('/onboarding/address')
		}
	}

	const handleOnChangeBVN = async (e) => {
		const bvnInput = e.target.value

		setFormData({ ...FormData, bvn: bvnInput })

		if (FormData.bvn.length === 10) {
			setIsLoading(true)
			setSuccessMsg('')
			const data = {
				firstName: FormData.firstName,
				lastName: FormData.lastName,
				middleName: FormData.middleName,
				gender: FormData.gender,
				bvn: bvnInput,
			}
			try {
				const response = await checkBvn(data)
				console.log(response)
				setIsdisabled(false)
				setIsLoading(false)
				setSuccessMsg('Details Match, Proceed!')
				return
			} catch ({ response }) {
				const { data } = response

				setIsLoading(false)
				setSuccessMsg('')
				setError(data.message)
				if (!bvnInput) {
					setIsLoading(false)
					setError('')
				}
				console.log(errors)
				return
			}
		}
		if (bvnInput !== 11) {
			setError('')
		}
		if (!bvnInput) {
			setIsLoading(false)
			setError('please fill the field')
		}
	}

	return (
		<div className='py-10 font-bold h-full flex justify-center'>
			<form
				onSubmit={handleSubmit}
				className='m-auto max-w-[800px] w-full px-10'
			>
				<h1 className='text-primary font-bold my-5 text-xl'>BioData</h1>
				<div className=' mx-auto my-10'>
					<Input
						type='text'
						placeholder='first name'
						value={FormData.firstName}
						name='firstName'
						onChange={handleChange}
						label='First name'
					/>
					<Input
						type='text'
						placeholder='Surname'
						value={FormData.lastName}
						name='lastName'
						onChange={handleChange}
						label='Surname'
					/>
					<Input
						type='text'
						placeholder='middle name'
						value={FormData.middleName}
						name='middleName'
						onChange={handleChange}
						label='Middle name'
					/>
					<Input
						type='email'
						placeholder='Email'
						value={FormData.email}
						onChange={handleChange}
						name='email'
						label='Enter your email'
					/>
					<Input
						type='tel'
						placeholder='Phone Number'
						name='phoneNumber'
						value={FormData.phoneNumber}
						onChange={handleChange}
						label='Enter your phone number'
					/>
					<Input
						type='date'
						placeholder='date of birth'
						value={FormData.dob}
						name='dob'
						onChange={handleChange}
						label='Enter your date of birth'
					/>
					<p className='text-start text-primary '> Gender</p>
					<div className='flex py-5 items-center px-5 gap-5 text-slate-600 '>
						<label
							className='flex gap-5 items-center '
							htmlFor='gender'
						>
							Male
							<input
								type='radio'
								checked={FormData.gender === 'male'}
								onChange={(e) =>
									setFormData({ ...FormData, gender: e.target.value })
								}
								value='male'
							/>
						</label>
						<label className='flex gap-5 items-center'>
							Female
							<input
								type='radio'
								checked={FormData.gender === 'female'}
								onChange={(e) =>
									setFormData({ ...FormData, gender: e.target.value })
								}
								value='female'
							/>
						</label>
					</div>
					<Input
						type='number'
						placeholder='Bank Verification Number (BVN)'
						value={FormData.bvn}
						name='bvn'
						onChange={handleOnChangeBVN}
						disabled={isFormfilled}
						maxLength={10}
					/>
					<p className='text-red-600 capitalize'> {errors} </p>
					{isloading && (
						<div className=' flex gap-3 justify-center items-center'>
							<div className='spinner'></div>
							<p className='text-green'>
								Please wait while we verify your Bvn...
							</p>
						</div>
					)}
					{successMsg && <p className='text-green capitalize'>{successMsg}</p>}
				</div>

				<div className='flex justify-center'>
					<button
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
			</form>
		</div>
	)
}

export default BuyerBioData
