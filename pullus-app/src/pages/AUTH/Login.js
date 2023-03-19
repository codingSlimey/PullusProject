import React, { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import Button from '../../components/FARMER/button'

import { FiLock } from 'react-icons/fi'
import Input from '../../components/FARMER/Input'

export default function Login() {
	const navigate = useNavigate()
	const [formData, setFormData] = useState({ username: '', password: '' })

	console.log('Form Data =>' + formData)

	// FUNCTION TO CONTROL LOGIN FORM INPUTS
	function handleFormChange(event) {
		const { name, value } = event.target

		setFormData((prev) => {
			return {
				...prev,
				[name]: value,
			}
		})
	}

	// FUNCTION TO HANDLE LOGIN
	function handleLogin(event) {
		event.preventDefault()

		const url = 'https://pullusafrica.com.ng:8080/authenticate'

		axios
			.post(url, formData)
			.then((response) => {
				console.log(response.data)
			})
			.catch((error) => {
				console.error(error)
			})
	}

	return (
		<section className={'flex h-full w-full'}>
			<section className={'flex-1 flex flex-col  justify-center'}>
				<div className='flex items-center gap-4 mb-6 justify-center text-primary'>
					<FiLock className='w-8 h-8 font-bold' />
					<div className='text-medium text-2xl font-semibold'>Login</div>
				</div>

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

				<div className='flex items-center justify-center w-[70%] max-mobile:w-[90%] mx-auto my-5'>
					<hr className='border-primary border flex-1' />
					<p className='px-3 bg-white text-primary'>OR</p>
					<hr className='border-primary border flex-1' />
				</div>

				<form
					onSubmit={handleLogin}
					className='w-[70%] max-mobile:w-[90%] mx-auto'
				>
					<div className={'grid gap-3'}>
						<Input
							type='email'
							placeholder='Email'
							name='email'
							value={formData.username}
							onChange={handleFormChange}
						/>
						<Input
							type='password'
							placeholder='Password'
							name='password'
							value={formData.password}
							onChange={handleFormChange}
						/>

						<div className='flex items-center gap-3 text-primary font-bold'>
							<input
								type={'checkbox'}
								name={'remember'}
							/>
							<label htmlFor={'remember'}>Remember me</label>
						</div>
						<div className='flex '>
							<Button
								action={() => null}
								color={'fade'}
								title={'LOGIN'}
								extraClass={
									'font-bold text-xl text-center w-full flex justify-center items-center'
								}
							/>
						</div>
						<div className='flex mt-4 text-primary font-bold'>
							<Link to={'/'}>Forgot your password?</Link>
						</div>
					</div>
				</form>
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
						action={() => navigate('/sign-up')}
						color={'white'}
						title={'Sign Up'}
						extraClass={'font-bold text-xl  text-primary'}
					/>
				</div>
			</section>
		</section>
	)
}
