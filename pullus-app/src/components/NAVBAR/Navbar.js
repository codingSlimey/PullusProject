import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate, useLocation } from 'react-router-dom'
import logo from '../../images/logo.png'
import Button from '../FARMER/button'
import { IoNotifications } from 'react-icons/io5'
import { AiFillHome } from 'react-icons/ai'
import { BsFillPersonFill } from 'react-icons/bs'
import { ImMeter } from 'react-icons/im'
import { HiBookmarkSquare } from 'react-icons/hi2'
import { HiOutlineShoppingCart } from 'react-icons/hi'

import { useCart } from '../../context/cart'

export default function Navbar() {
	const { items } = useCart()
	const navigate = useNavigate()
	const { pathname } = useLocation()

	const userLinks = [
		{
			name: 'Dashboard',
			icon: <ImMeter className='w-8 h-8' />,
			url: '/farmer/cycle-management',
		},
		{
			name: 'Profile',
			icon: <BsFillPersonFill className='w-8 h-8' />,
			url: '/farmer/settings',
		},
		{
			name: 'Orders',
			icon: <HiBookmarkSquare className='w-8 h-8' />,
			url: '/farmer/my-orders',
		},
		{
			name: 'Market',
			icon: <AiFillHome className='w-8 h-8' />,
			url: '/market-place',
		},
		{
			name: 'Notice',
			icon: <IoNotifications className='w-8 h-8' />,
			url: '/farmer/notifications',
		},
	]

	const [userLayoutState, setUserLayoutState] = useState(false)

	useEffect(() => {
		const routes = [
			'/',
			'/login',
			'/sign-up',
			'/forgot-password',
			'/reset-password',
			'/new-password',
			'/onboarding/biodata',
			'/onboarding/address',
			'/onboarding/business-info',
			'/onboarding/document-upload',
		]
		const checkRouteName = () => {
			const isRouteFixed = routes.includes(pathname)
			setUserLayoutState(isRouteFixed)
		}

		checkRouteName()
	}, [pathname])

	return (
		<div className='fixed top-0 left-0 w-full z-30 bg-white border-b border-grey'>
			<section
				className={
					' flex justify-between max-width px-5  md:generalPadding items-center h-20 md:h-24'
				}
			>
				<img
					src={logo}
					alt='Logo '
					className=' w-[100px] md:w-[150px] h-auto cursor-pointer'
					onClick={() => navigate('/')}
				/>

				{!userLayoutState ? (
					<div className='flex gap-8'>
						<div className='flex gap-8 items-center '>
							{userLinks.map((item, index) => {
								return (
									<NavLink
										to={item.url}
										key={index}
										className={` ${
											pathname === item.url
												? 'text-gray-500/70'
												: 'text-primary hover:text-primary/70'
										} flex flex-col justify-center items-center  text-bold`}
									>
										{item.icon}
										<p className='font-semibold text-lg uppercase'>
											{item.name}
										</p>
									</NavLink>
								)
							})}

							<NavLink
								to={'/cart'}
								className={` ${
									pathname === '/cart'
										? 'text-gray-500/70'
										: 'text-primary hover:text-primary/70'
								} flex flex-col justify-center items-center  text-bold relative`}
							>
								<HiOutlineShoppingCart className='w-8 h-8' />
								<p className='font-semibold text-lg uppercase'>Cart</p>
								{items.length ? (
									<div className='h-6 w-6 flex justify-center items-center rounded-full bg-primary text-white font-bold text-lg absolute -top-2 -right-2'>
										{items.length}
									</div>
								) : (
									<div></div>
								)}
							</NavLink>
						</div>
						<Button
							action={() => navigate('/')}
							color={'fade'}
							title={'Logout'}
							extraClass={'font-bold md:text-lg'}
						/>
					</div>
				) : (
					<Button
						action={() => navigate('/login')}
						color={'fade'}
						title={'Login'}
						extraClass={'font-bold md:text-lg'}
					/>
				)}
			</section>
		</div>
	)
}
