import React from 'react'
import Input from '../../components/FARMER/Input'
import Button from '../../components/FARMER/button'
import { useNavigate } from 'react-router-dom'

import { useUserAuth } from '../../context/auth'
// import { FormController } from 'form-controller-lite'
import { checkBvn, getStates } from '../../api'

function BuyerBioData() {
	const navigate = useNavigate()
	const { tempUser } = useUserAuth()
	console.log(tempUser)

	const handleSubmit = async () => {
		getStates()
		// console.log(values, e)
	}
	const handleOnChangeBVN = async (e) => {
		// console.log(e.target.value)
		const bvnInput = e.target.value
		const data = {
			bvn: '2220978561',
			firstName: 'Tobi',
			gender: 'Male',
			lastName: 'Ikupolati',
			middleName: 'Emmanuel',
		}
		if (bvnInput.length === 10) {
			console.log('run query')
			const response = await checkBvn(data)
			console.log(response)
		}
	}

	return (
		<div className='py-10 font-bold h-full flex justify-center'>
			<div className='m-auto max-w-[800px] px-10'>
				<h1 className='text-primary font-bold my-5 text-xl'>BioData</h1>
				<div className=' mx-auto my-10'>
					{/* <FormController
						onSubmit={handleSubmit}
						clearAfterSubmit={false}
					> */}
					<Input
						type='text'
						placeholder='Name'
						name='name'
					/>
					<Input
						type='text'
						placeholder='Surname'
						name='surname'
					/>
					<Input
						type='email'
						placeholder='Email'
						value={tempUser ? tempUser.email : ''}
						name='email'
					/>
					<Input
						type='tel'
						placeholder='Phone Number'
						name='phoneNumber'
					/>
					<Input
						type='number'
						placeholder='Bank Verification Number (BVN)'
						name='bvn'
						onChange={handleOnChangeBVN}
					/>
					{/* </FormController> */}
				</div>
				<div className='flex justify-center'>
					<Button
						title='Continue'
						icon={true}
						color={`fade`}
						action={handleSubmit}
						// action={() => navigate('/buyer/address')}
					/>
				</div>
			</div>
		</div>
	)
}

export default BuyerBioData
