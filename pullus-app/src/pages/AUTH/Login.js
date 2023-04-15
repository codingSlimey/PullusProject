import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Button from '../../components/FARMER/button'

import { FiLock } from 'react-icons/fi'
import Input from '../../components/FARMER/Input'
import { UpdateFormState } from '../../utils/setFormState'
import { useUserAuth } from '../../context/auth'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Login() {
	const navigate = useNavigate()
	const [formData, setFormData] = useState({ username: '', password: '' })
	const [isLoading,setIsLoading] = useState(false)

	const { userLogin } = useUserAuth()

	// FUNCTION TO CONTROL LOGIN FORM INPUTS
	function handleFormChange(event) {
		UpdateFormState(
			event.target.name,
			event.target.value,
			formData,
			setFormData
		)
	}

	// FUNCTION TO HANDLE LOGIN
	async function handleLogin(event) {
		event.preventDefault()
		if(!formData.username || !formData.password) return
		try {
			setIsLoading(true)
			const res = await userLogin(formData)
			console.log(res);
			setIsLoading(false)
			if(res.userType === 'FARMER')
			toast.success("Login Successful")
			setTimeout(()=>{
				navigate ('/farmer/cycle-management')
			}, 5000)
			  
		} catch ({response,}) {
			const {data} = response
			console.log(data)
			switch(data.message){
				case "Incorrect password":
				  toast.error("Incorrect password")
				  break;
				case "Incorrect username":
				  toast.error("incorrect Email")
				  break;
				case "user-not-found":
				  toast.error("User Not Found")
				  break;
				  default:
					toast.error("Something went wrong")
			  }

			  setTimeout(()=>{
				setIsLoading(false)
			}, 5000)
			  return
			 }
			 
			
			
		}
	return (
		<section className={'flex h-full w-full'}>
			<ToastContainer/>
			<section className={'flex-1 flex flex-col  justify-center'}>
				<div className='flex flex-col items-center gap-4 mb-6 justify-center text-primary'>
					<FiLock className='w-8 h-8 font-bold' />
					<div className='text-medium text-2xl font-semibold'>Login to Your Account</div>
					<p>Login using social networks </p>

				</div>

				<div className='flex justify-center items-center gap-5 my-2 md:my-4'>
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
					<div className='text-primary my-2 text-lg font-semibold flex items-center' > 
					<FiLock className='w-5 h-5 font-bold' />
						 <p>Login</p> </div>
					<div className={'grid gap-3'}>
						<Input
							type='email'
							placeholder='Email'
							name='username'
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
								loading={isLoading}
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
