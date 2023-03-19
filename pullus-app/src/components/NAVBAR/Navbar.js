import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import logo from '../../images/logo.png'
import Button from '../FARMER/button'
import styles from './styles.module.css'
import { IoNotifications } from 'react-icons/io5'
import { AiFillHome } from 'react-icons/ai'
import { BsFillPersonFill } from 'react-icons/bs'
import { ImMeter } from 'react-icons/im'
import { HiBookmarkSquare } from 'react-icons/hi2'

export default function Navbar() {
	const navigate = useNavigate()

	const userLinks = [
		{
			name: 'Dashboard',
			icon: <ImMeter className='w-8 h-8' />,
		},
		{
			name: 'Profile',
			icon: <BsFillPersonFill className='w-8 h-8' />,
		},
		{
			name: 'Orders',
			icon: <HiBookmarkSquare className='w-8 h-8' />,
		},
		{
			name: 'Market',
			icon: <AiFillHome className='w-8 h-8' />,
		},
		{
			name: 'Notice',
			icon: <IoNotifications className='w-8 h-8' />,
		},
	]

	return (
		<div className='fixed top-0 left-0 w-full bg-white border-b border-grey'>
			<section
				className={
					' flex justify-between max-width generalPadding items-center h-24'
				}
			>
				<img
					src={logo}
					alt='Logo '
					className={styles.logo}
					onClick={() => navigate('/')}
				/>

				<div className='flex gap-8'>
					{/* <div className='flex gap-8 items-center '>
						{userLinks.map((item, index) => {
							return (
								<NavLink
									key={index}
									className='flex flex-col justify-center items-center text-primary text-bold'
								>
									{item.icon}
									<p className='font-bold text-lg uppercase'>{item.name}</p>
								</NavLink>
							)
						})}
					</div> */}
					<Button
						action={() => navigate('/login')}
						color={'fade'}
						title={'Login'}
						extraClass={'font-bold text-lg'}
					/>
				</div>
			</section>
		</div>
	)
}
