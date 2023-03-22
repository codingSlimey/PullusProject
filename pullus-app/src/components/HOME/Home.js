import React from 'react'
import styles from './styles.module.css'

import { useNavigate } from 'react-router-dom'
import Button from '../FARMER/button'

export default function Home() {
	const navigate = useNavigate()
	return (
		<div
			className={
				'bg-homepage bg-cover bg-center bg-no-repeat h-full flex flex-col justify-center text-center text-white'
			}
		>
			<h1 className='text-4xl md:text-5xl font-bold'>Welcome to PULLUS</h1>

			<div className='text-2xl px-1 md:text-3xl'>
				<p className='my-12 w-full  md:w-[40%] mx-auto'>
					We connect poultry farmers to quality Input, Services, Market &
					Finance.
				</p>
				<p className='font-medium'>Begin your journey as a</p>
			</div>

			<div className={'mt-14 flex justify-center items-center gap-8 md:gap-14'}>
				<Button
					action={() => navigate('/farmer/cycle-management')}
					color={'fade'}
					title={'FARMER'}
					extraClass={'font-bold text-xs md:text-lg border border-white capitalize'}
				/>

				<p>OR</p>
				<Button
					action={() => navigate('/farmer/cycle-management')}
					color={'fade'}
					title={'VENDOR'}
					extraClass={'font-bold text-xs md:text-lg border border-white capitalize'}
				/>
			</div>
		</div>
	)
}
