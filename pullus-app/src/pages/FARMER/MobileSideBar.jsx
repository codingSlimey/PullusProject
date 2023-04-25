import React from 'react'
import { NavLink } from 'react-router-dom'
import avatar from '../../images/avatar.svg'
import Select from '../../components/FARMER/Select'
import { useUserAuth } from '../../context/auth'

import tabs from '../../constants/sideBarLinks'


export default function MobileSideBar({
	toggleMobileSideBar,
	showMobileSideBar,
	setShowMobileSideBar,
}) {
	const { userLogout } = useUserAuth()
	const handleToggle = () => {
		setShowMobileSideBar(!showMobileSideBar)
		
	}
	const logout = ()=>{
		userLogout()
		handleToggle()
	}

	return (
		<div
			className={`fixed z-50 w-full h-screen tablet:hidden bg-black/30 top-0 left-0 transition duration-100  transform ${
				showMobileSideBar ? 'translate-x-0' : '-translate-x-full'
			}`}
			onClick={handleToggle}
		>
			<div
				className={`  w-[70%]  h-full overflow-auto bg-green  py-6 `}
				onClick={(e) => e.stopPropagation()}
			>
				<div className='flex flex-col  gap-2 '>
					<img
						src={avatar}
						alt='avatar'
						className='w-40 h-40 mx-auto rounded-full'
					/>
					<h1 className='text-center text-white font-bold text-xl'>Mary Doe</h1>
					<h1 className='text-center text-white font-bold text-xl'>
						N100,000{' '}
					</h1>
				</div>

				<h1 className='text-white font-bold mx-4 text-start mt-6'>
					Primary Currency
				</h1>
				<hr className='border-black/20 my-2 mx-4' />
				<div className='mx-6 my-5'>
					<Select>
						<option value='Naira'>NGN</option>
						<option value='Dollar'>USD</option>
						<option value='Pounds'>GBP</option>
					</Select>
				</div>

				<ul className='flex flex-col gap-4 mt-6'>
					{tabs.map((item, index) => {
						return (
							<div
								key={index}
								className='text-white text-start px-5 font-semibold '
							> {
								item.link === 'logout' ? <button className='flex gap-3 items-center font-bold text-lg' onClick={logout}>{item.icon}{item.name}</button> :
							
								<NavLink
									onClick={handleToggle}
									// to={`/farmer/${item.link}`}
									to={`/farmer/${item.name.replaceAll(' ', '-').toLowerCase()}`}
									className='flex gap-3 items-center font-bold text-lg'
								>
									{item.icon}
									{item.name}
								</NavLink>
					}
							</div>
						)
					})}
				</ul>
			</div>
		</div>
	)
}
