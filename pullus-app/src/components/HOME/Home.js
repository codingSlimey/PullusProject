import React from 'react'
import styles from './styles.module.css'
import { useUserAuth } from '../../context/auth'

import { useNavigate } from 'react-router-dom'
import Button from '../FARMER/button'

export default function Home() {
	const navigate = useNavigate()
	const { user } = useUserAuth()
	return (
		<div
			className={
				'bg-homepage bg-cover bg-center bg-no-repeat h-full flex flex-col justify-center text-center text-white'
			}
		>
			<h1 className='text-3xl md:text-4xl lg:text-5xl font-bold'>Welcome to PULLUS</h1>

			<div className='text-lg  md:text-xl  px-1 lg:text-3xl'>
				<p className='my-12 w-full  md:w-[40%] mx-auto'>
					We connect poultry farmers to quality Input, Services, Market &
					Finance.
				</p>
				<p className='font-medium'>Begin your journey as a</p>
			</div>

			<div className={'mt-14 flex justify-center items-center gap-8 md:gap-14'}>
				<Button
					action={() => navigate(`/sign-up?user_type=${user && user.userType} `)}
					color={'fade'}
					title={'FARMER'}
					extraClass={'font-bold px-7 md:px-auto text-xs md:text-lg border border-white capitalize'}
				/>

				<p>OR</p>
				<Button
					action={() => navigate('/farmer/cycle-management')}
					color={'fade'}
					title={'VENDOR'}
					extraClass={'font-bold px-7 md:px-auto text-xs md:text-lg border border-white capitalize'}
				/>
			</div>
		</div>
	)
}
