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
import useOnboardingBioDataForm from '../../hooks/FormValidators/useOnboardingBioDataForm'
import { toast } from 'react-toastify'

function BuyerBioData() {
	// Function to warn users when they have not completed their onboarding steps
	useBeforeUnload()

	const { tempUser, setTemporaryUserData } = useUserAuth()

	const navigate = useNavigate()
	// const [isdisabled, setIsdisabled] = useState(true)
	const [isFormfilled, setIsFormFilled] = useState(true)
	const [bvnError, setBvnError] = useState('')
	const [successMsg, setSuccessMsg] = useState('')
	const [isloading, setIsLoading] = useState(false)
	const [bioDataForm, setbioDataForm] = useState({
		firstName: '',
		lastName: '',
		middleName: '',
		email: '',
		phoneNumber: '',
		dob: '',
		gender: '',
		bvn: '',
	})

	//Form validation hook
	const { errors, validateField, validateForm } = useOnboardingBioDataForm()

	useEffect(() => {
		if (
			bioDataForm.firstName &&
			bioDataForm.lastName &&
			bioDataForm.phoneNumber &&
			bioDataForm.gender
		) {
			setIsFormFilled(false)
			return
		} else {
			setIsFormFilled(true)
			return
		}
	}, [bioDataForm])

	// If the user has already started the registeration, it fetches the already inputted data and sets it
	useEffect(() => {
		if (tempUser) {
			const formData = {
				firstName: tempUser.firstName || '',
				lastName: tempUser.lastName || '',
				middleName: tempUser.middleName || '',
				email: tempUser.email || '',
				phoneNumber: tempUser.phoneNumber || '',
				dob: tempUser.dob || '',
				gender: tempUser.gender || '',
				bvn: tempUser.bvn || '',
			}
			setbioDataForm(formData)
		}
	}, [tempUser])

	const handleChange = (event) => {
		validateField(event.target.name, event.target.value)
		UpdateFormState(
			event.target.name,
			event.target.value,
			bioDataForm,
			setbioDataForm
		)
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
		const isValid = validateForm(bioDataForm)
		if (isValid) {
			setTemporaryUserData({ ...tempUser, ...bioDataForm })
			navigate('/onboarding/address')
		} else {
			toast.error('Please attend to all fields errors')
		}
	}

	const handleOnChangeBVN = async (e) => {
		const bvnInput = e.target.value

		setbioDataForm({ ...bioDataForm, bvn: bvnInput })

		if (bioDataForm.bvn.length === 10) {
			setIsLoading(true)
			setSuccessMsg('')
			const data = {
				firstName: bioDataForm.firstName,
				lastName: bioDataForm.lastName,
				middleName: bioDataForm.middleName,
				gender: bioDataForm.gender,
				bvn: bvnInput,
			}
			try {
				const response = await checkBvn(data)
				console.log(response)
				setIsLoading(false)
				setSuccessMsg('Details Match, Proceed!')
				return
			} catch ({ response }) {
				const { data } = response

				setIsLoading(false)
				setSuccessMsg('')
				setBvnError(data.message)
				if (!bvnInput) {
					setIsLoading(false)
					setBvnError('')
				}
				console.log(errors)
				return
			}
		}
		if (bvnInput !== 11) {
			setBvnError('')
		}
		if (!bvnInput) {
			setIsLoading(false)
			setBvnError('please fill the field')
		}
	}

	useEffect(() => {
		const checkBVNStatus = async () => {
			if (bioDataForm.bvn.length === 11) {
				const data = {
					firstName: bioDataForm.firstName,
					lastName: bioDataForm.lastName,
					middleName: bioDataForm.middleName,
					gender: bioDataForm.gender,
					bvn: bioDataForm.bvn,
				}
				try {
					// setIsLoading(true)
					setSuccessMsg('')
					const response = await checkBvn(data)
					setIsLoading(false)
					console.log(response)
					setSuccessMsg('Details Match, Proceed!')
					return
				} catch ({ response }) {
					const { data } = response
					setIsLoading(false)
					setSuccessMsg('')
					setBvnError(data.message)
				}
			}
		}

		if (bioDataForm.bvn) {
			checkBVNStatus()
		}
	}, [bioDataForm])

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
						value={bioDataForm.firstName}
						name='firstName'
						onChange={handleChange}
						label='First name'
						error={errors.firstName}
					/>
					<Input
						type='text'
						placeholder='Surname'
						value={bioDataForm.lastName}
						name='lastName'
						onChange={handleChange}
						label='Surname'
						error={errors.lastName}
					/>
					<Input
						type='text'
						placeholder='middle name'
						value={bioDataForm.middleName}
						name='middleName'
						onChange={handleChange}
						label='Middle name'
						error={errors.middleName}
					/>
					<Input
						type='email'
						placeholder='Email'
						value={bioDataForm.email}
						onChange={handleChange}
						name='email'
						label='Enter your email'
						error={errors.email}
					/>
					<Input
						type='tel'
						placeholder='Phone Number'
						name='phoneNumber'
						value={bioDataForm.phoneNumber}
						onChange={handleChange}
						label='Enter your phone number'
						error={errors.phoneNumber}
					/>
					<Input
						type='date'
						placeholder='date of birth'
						value={bioDataForm.dob}
						name='dob'
						onChange={handleChange}
						label='Enter your date of birth'
						error={errors.dob}
					/>
					<div className='mt-3'>
						<p className='text-start text-primary '> Gender</p>
						<div className='flex py-5 items-center px-5 gap-5 text-slate-600 '>
							<label
								className='flex gap-5 items-center '
								htmlFor='gender'
							>
								Male
								<input
									type='radio'
									checked={bioDataForm.gender === 'male'}
									onChange={(e) =>
										setbioDataForm({ ...bioDataForm, gender: e.target.value })
									}
									value='male'
								/>
							</label>
							<label className='flex gap-5 items-center'>
								Female
								<input
									type='radio'
									checked={bioDataForm.gender === 'female'}
									onChange={(e) =>
										setbioDataForm({ ...bioDataForm, gender: e.target.value })
									}
									value='female'
								/>
							</label>
						</div>
						{errors.gender && !bioDataForm.gender && (
							<p className='text-[red] text-left font-light text-sm mt-1'>
								{errors.gender}
							</p>
						)}
					</div>
					<Input
						type='number'
						placeholder='Bank Verification Number (BVN)'
						value={bioDataForm.bvn}
						name='bvn'
						onChange={handleOnChangeBVN}
						disabled={isFormfilled}
						maxLength={10}
						error={errors.bvn}
					/>
					<p className='text-red-600 capitalize'> {bvnError} </p>
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
						className={`text-xs w-fit  py-4 px-10 flex items-center bg-fade text-white md:text-base rounded-full shadow-xl  my-auto`}
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
