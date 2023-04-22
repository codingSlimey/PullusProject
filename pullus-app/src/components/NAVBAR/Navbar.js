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
import { useUserAuth } from '../../context/auth'
import { useCart } from '../../context/cart'
import MobileSideBar from '../../pages/FARMER/MobileSideBar'
import { GiHamburgerMenu } from 'react-icons/gi'

export default function Navbar() {
	const { user,userLogout } = useUserAuth()
	// console.log(user.jwtToken)
	const { items } = useCart()
	const navigate = useNavigate()
	const { pathname } = useLocation()

	const userLinks = [
		{
			name: 'Dashboard',
			icon: <ImMeter className='laptop:w-8 laptop:h-8 w-6 h-6' />,
			url: '/farmer/cycle-management',
		},
		{
			name: 'Profile',
			icon: <BsFillPersonFill className='laptop:w-8 laptop:h-8 w-6 h-6' />,
			url: '/farmer/settings',
		},
		{
			name: 'Orders',
			icon: <HiBookmarkSquare className='laptop:w-8 laptop:h-8 w-6 h-6' />,
			url: '/farmer/my-orders',
		},
		{
			name: 'Market',
			icon: <AiFillHome className='laptop:w-8 laptop:h-8 w-6 h-6' />,
			url: '/market-place',
		},
		{
			name: 'Notice',
			icon: <IoNotifications className='laptop:w-8 laptop:h-8 w-6 h-6' />,
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

	const [showMobileSideBar, setShowMobileSideBar] = useState(false)
	const toggleMobileSideBar = () => {
		setShowMobileSideBar(!showMobileSideBar)
	}

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

				<div className='hidden tablet:block'>
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
										<p className='font-semibold text-base laptop:text-lg uppercase'>
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
								<HiOutlineShoppingCart className='laptop:w-8 laptop:h-8 w-6 h-6' />
								<p className='font-semibold text-base laptop:text-lg uppercase'>Cart</p>
								{items.length ? (
									<div className='h-4 laptop:h-6 w-4 laptop:w-6 flex justify-center items-center rounded-full bg-primary text-white font-bold text-lg absolute -top-2 -right-2'>
										{items.length}
									</div>
								) : (
									<div></div>
								)}
							</NavLink>
						</div>
						<Button
							action={userLogout}
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

				</div>

				<MobileSideBar
					showMobileSideBar={showMobileSideBar}
					setShowMobileSideBar={setShowMobileSideBar}
					toggleMobileSideBar={toggleMobileSideBar}
				/>
				{ !user?.jwtToken  ? (
										<Button
										action={() => navigate('/login')}
										color={'fade'}
										title={'Login'}
										extraClass={'font-bold md:text-lg tablet:hidden'}
									/>
				): (
                   <div className='tablet:hidden  w-full flex justify-end '>
					   <GiHamburgerMenu
						onClick={toggleMobileSideBar}
						className='tablet:hidden   text-primary text-3xl'
					/>
				</div>
				)}

				
			</section>
		</div>
	)
}
