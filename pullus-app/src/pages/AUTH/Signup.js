import React, { useState } from 'react'

import { Link, useNavigate } from 'react-router-dom'
import Button from '../../components/FARMER/button'
import {AiFillEyeInvisible} from 'react-icons/ai'
import {AiFillEye} from 'react-icons/ai'

import { FiLock } from 'react-icons/fi'
import Input from '../../components/FARMER/Input'
import { useUserAuth } from '../../context/auth'
import thankYou from '../../images/thankYou.svg'

import { UpdateFormState } from '../../utils/setFormState'

export default function Login() {
	const [showModal, setShowModal] = React.useState(false)
	const [error, setError] = useState('')
	const [isLoading, setIsLoading] = useState(false)
	const handleModal = () => {
		setShowModal(!showModal)
	}
	const [showPassword, setShowPassword] = useState(false)
	const closeModal = (event) => {
		navigate('/onboarding/biodata')
		// if (!event.target.closest('.emodal')) {
		setShowModal(false)
		// }
	}
	const [signUpForm, setSignInForm] = useState({
		email: '',
		password: '',
	})


	const [confirmPassword, setConfirmPassword] = useState('')
	const navigate = useNavigate()

	const { firstRegister,clearTemporaryUserData } = useUserAuth()

	const handleChange = (event) => {
		UpdateFormState(
			event.target.name,
			event.target.value,
			signUpForm,
			setSignInForm
		)
	}
	const displayPassword = () => {
		setShowPassword(!showPassword)
	}

	const handleSubmit = async (event) => {
		event.preventDefault()
		setError('')
		if (signUpForm.password === confirmPassword) {
			setIsLoading(true)
			try {
				const res = await firstRegister({ ...signUpForm, usertype: 'farmer' })
				console.log(res)
				if (res) handleModal()
				setIsLoading(false)
				clearTemporaryUserData()
				// console.log('Submit')
			} catch (error) {
				console.log(error)
				setTimeout(() => {
					setIsLoading(false)
				}, 4000)
			}
		} else {
			setError('Your passwords do not match!')
		}
		// console.log(values)
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

				<form
					onSubmit={handleSubmit}
					className='w-[70%] max-mobile:w-[90%] mx-auto'
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
							onChange={handleChange}
						/>
						<div className='relative' >
						<Input
							type={!showPassword ? 'password': 'text'}
							placeholder='Password'
							name='password'
							onChange={handleChange}
						/>
						<div className='absolute top-6 left-[90%]' >
							{!showPassword ? (
								<AiFillEyeInvisible onClick={displayPassword} className='text-primary w-5 h-5' />
							) : (
								<AiFillEye onClick={displayPassword} className='text-primary w-5 h-5' />
							)}
						</div>
						</div>
						<div className='relative'> 
						<Input
							type={!showPassword ? 'password': 'text'}
							placeholder='Confirm Password'
							name='confirmPassword'
							onChange={(e)=>setConfirmPassword(e.target.value)}
						/>
						<div className='absolute top-6 left-[90%]' >
							{!showPassword ? (
								<AiFillEyeInvisible onClick={displayPassword} className='text-primary w-5 h-5' />
							) : (
								<AiFillEye onClick={displayPassword} className='text-primary w-5 h-5' />
							)}
						</div>
						</div>

						<p className='text-[red] font-medium'>{error}</p>

						<div className='flex flex-col justify-center items-center '>
							<Button
								action={() => null}
								color={'fade'}
								title={'Sign Up'}
								extraClass={
									'font-bold max-lgmobile:py-2 text-lg lgmobile:text-xl text-center w-full flex uppercase justify-center items-center'
								}
							/>
							<p className='text-primary tablet:hidden my-3 '>Already have an account ? <b className='text-lg cursor-pointer' onClick={()=>{ navigate('/login')}}>Login</b> </p>
						</div>
						{isLoading && (
							<div className=' flex gap-3 justify-center items-center'>
								<div className='spinner'></div>
							</div>
						)}
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
				<div className='flex  justify-center mt-14'>
					<Button
						action={() => navigate('/login')}
						color={'white'}
						title={'Login'}
						extraClass={'font-bold text-xl  text-primary'}
					/>
				</div>
			</section>

			{showModal && (
				<div
					className={` z-10 fixed bg-modal left-0 top-0 h-screen flex flex-col items-center justify-center w-full`}
					// onClick={closeModal}
				>
					<div className='bg-white px-8 py-5 rounded-2xl w-fit'>
						<div className='px-4 py-6   grid place-items-center bg-white  mb-4 '>
							<img
								src={thankYou}
								alt=''
								className='bg-[white]'
							/>
						</div>
						<h5 className='text-primary text-center font-bold text-xl my-2'>
							Account Created !
						</h5>
						<p className='text-primary text-center w-[50%] mx-auto'>
							You have successfully created an account with Pullus Afrcia. You
							just have few more steps to onboard.
						</p>
						<div className='mt-4 grid w-full gap-6 justify-center '>
							<button
								onClick={closeModal}
								className={`w-full bg-fade text-[#fff] text-base font-bold py-3 px-8 flex justify-center  items-center rounded-full shadow-xl  my-auto`}
							>
								Continue
							</button>
						</div>
					</div>
				</div>
			)}
		</section>
	)
}
