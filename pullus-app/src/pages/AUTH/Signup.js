import React from 'react'

import { FormController } from 'form-controller-lite'

import { Link, useNavigate } from 'react-router-dom'
import Button from '../../components/FARMER/button'

import { FiLock } from 'react-icons/fi'
import Input from '../../components/FARMER/Input'
import { useUserAuth } from '../../context/auth' 

export default function Login() {
	const navigate = useNavigate()

	const {register} = useUserAuth()
	

	const handleSubmit = async (values) => {
		console.log(values)
		await register({...values, usertype: 'farmer'})
		console.log('Submit')
	}

	return (
		<section className={'flex h-full w-full'}>
			<section className={'flex-1 flex flex-col  justify-center'}>
				<h3 className='text-3xl font-bold text-center text-primary mb-6'>
					Create Your Account
				</h3>
				<div className='flex justify-center items-center gap-5 my-4'>
					<Link to={'/'}>
						<img
							className='w-8 h-8 rounded-full'
							src='/Images/google.svg'
							alt='Google'
						/>
					</Link>
					<Link to={'/'}>
						<img
							className='w-8 h-8 rounded-full'
							src='/Images/facebook.svg'
							alt='Facebook'
						/>
					</Link>
					<Link to={'/'}>
						<img
							className='w-8 h-8 rounded-full'
							src='/Images/linkedin.svg'
							alt='linkedin'
						/>
					</Link>
				</div>

				<div className='flex items-center justify-center w-[60%] max-mobile:w-[80%] mx-auto my-5'>
					<hr className='border-primary border flex-1' />
					<p className='px-3 bg-white text-primary'>OR</p>
					<hr className='border-primary border flex-1' />
				</div>

				<FormController
					onSubmit={handleSubmit}
					className='w-[70%] max-mobile:w-[90%] mx-auto'
					clearAfterSubmit={false}
				>
					<div className='flex items-center gap-4 mb-6  text-primary'>
						<FiLock className='w-8 h-8 font-bold' />
						<div className='text-medium text-2xl font-semibold'>Sign Up</div>
					</div>
					<div className={'grid gap-3'}>
						<Input
							type='email'
							placeholder='Email'
							name='email'
						/>
						<Input
							type='password'
							placeholder='Password'
							name='password'
						/>

						<div className='flex '>
							<Button
								action={() => null}
								color={'fade'}
								title={'Sign Up'}
								extraClass={
									'font-bold text-xl text-center w-full flex uppercase justify-center items-center'
								}
							/>
						</div>
					</div>
				</FormController>
			</section>

			<section
				className={
					'hidden tablet:flex bg-login bg-center bg-no-repeat bg-cover flex-1 flex-col justify-center text-white'
				}
			>
				<h1 className='text-5xl font-semibold'>New Here?</h1>
				<p className='text-2xl my-4 w-[45%] mx-auto'>
					Sign up and experience the best poultry solution in Africa.
				</p>
				<div className='flex justify-center mt-14'>
					<Button
						action={() => navigate('/login')}
						color={'white'}
						title={'Login'}
						extraClass={'font-bold text-xl  text-primary'}
					/>
				</div>
			</section>
		</section>
	)
}
