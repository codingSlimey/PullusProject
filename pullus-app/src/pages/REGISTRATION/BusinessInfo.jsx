import React, { useState, useEffect } from 'react'
import Input from '../../components/FARMER/Input'
// import Button from '../../components/FARMER/button'
import { useNavigate } from 'react-router-dom'
import { UpdateFormState } from '../../utils/setFormState'
import { FaPlay } from 'react-icons/fa'

//State (Context API)
import { useUserAuth } from '../../context/auth'

function BusinessInfo() {
	const navigate = useNavigate()
	const [isdisabled, setIsdisabled] = useState(true)
	const [today, setToday] = useState(new Date().toISOString().substr(0, 10))
	const { tempUser, setTemporaryUserData } = useUserAuth()

	const [bizForm, setBizForm] = useState({
		businessName: '',
		registeredDate: '',
		rcNumber: '',
		tinNumber: '',
	})
	const handleChange = (event) => {
		UpdateFormState(event.target.name, event.target.value, bizForm, setBizForm)
	}
	useEffect(() => {
		if (bizForm.businessName && bizForm.rcNumber && bizForm.tinNumber) {
			setIsdisabled(false)
			return
		} else {
			setIsdisabled(true)
			return
		}
	}, [bizForm])

	const handleSubmit = async (e) => {
		e.preventDefault()
		if (!bizForm.businessName || !bizForm.rcNumber || !bizForm.tinNumber) {
			alert('Please fill all fields')
			return
		} else {
			setTemporaryUserData({
				...tempUser,
				...bizForm,
				registeredDate: `${today}`,
			})
			console.log(tempUser)
			navigate('/onboarding/document-upload')
		}
	}

	// If the user has already started the registerRuntimeCompiler, it fetches the already inputted data and sets it
	useEffect(() => {
		if (tempUser.tinNumber) {
			setBizForm({
				businessName: tempUser.businessName,
				registeredDate: tempUser.registeredDate,
				rcNumber: tempUser.rcNumber,
				tinNumber: tempUser.tinNumber,
			})
		}
	}, [tempUser])

	return (
		<div className='py-10 mx-auto  font-bold h-full flex justify-center'>
			<div className='m-auto max-w-[800px] w-full  px-10'>
				<h1 className='text-primary my-5 font-bold text-xl'>
					Business Information{' '}
				</h1>
				<div>
					<Input
						type='text'
						placeholder='Business Name:'
						name='businessName'
						onChange={handleChange}
						label="What's your business Name"
					/>
					<Input
						type='date'
						placeholder={today}
						// label={'Registration Date'}
						name='registeredDate'
						value={bizForm.registeredDate}
						// disabled={true}
						onChange={handleChange}
						label='Registered Date'
					/>
					<Input
						type='number'
						placeholder='RC Number:'
						name='rcNumber'
						onChange={handleChange}
						label=' What is your RC number'
					/>
					<Input
						type='text'
						placeholder='TIN Number'
						name='tinNumber'
						onChange={handleChange}
						label='What is your TIn number'
					/>
				</div>

				<div className='flex justify-center'>
					<button
						disabled={isdisabled}
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
			</div>
		</div>
	)
}

export default BusinessInfo
