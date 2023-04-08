import React, { useState } from 'react'
import Input from '../../components/FARMER/Input'
import Button from '../../components/FARMER/button'
import { useNavigate } from 'react-router-dom'
import { UpdateFormState } from '../../utils/setFormState'
//State (Context API)
import { useUserAuth } from '../../context/auth'

function BusinessInfo() {
	const navigate = useNavigate()
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

	const handleSubmit = async (e) => {
		e.preventDefault()
		if (!bizForm.businessName || !bizForm.rcNumber || !bizForm.tinNumber) {
			alert('Please fill all fields')
			return
		} else {
			setTemporaryUserData({ ...tempUser, ...bizForm })
			console.log(tempUser)
			navigate('/onboarding/document-upload')
		}
	}
	return (
		<div className='py-10 font-bold h-full flex justify-center'>
			<div className='m-auto max-w-[800px] px-10'>
				<h1 className='text-primary my-5 font-bold text-xl'>
					Business Information{' '}
				</h1>
				<div>
					<Input
						type='text'
						placeholder='Business Name:'
						name='businessName'
						onChange={handleChange}
					/>
					<Input
						// type='date'
						placeholder='Registered Date:'
						// label={'Registration Date'}
						name='registeredDate'
						value={today}
						disabled={true}
						onChange={handleChange}
					/>
					<Input
						type='number'
						placeholder='RC Number:'
						name='rcNumber'
						onChange={handleChange}
					/>
					<Input
						type='text'
						placeholder='TIN Number'
						name='tinNumber'
						onChange={handleChange}
					/>
				</div>
				<div className='flex items-center justify-center '>
					<Button
						title='Continue'
						icon={true}
						color={`fade`}
						action={handleSubmit}
					/>
				</div>
			</div>
		</div>
	)
}

export default BusinessInfo
