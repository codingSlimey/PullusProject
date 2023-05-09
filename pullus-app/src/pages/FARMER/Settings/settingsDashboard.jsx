import { Link } from 'react-router-dom'
import { CiCircleChevRight } from 'react-icons/ci'
import { BsFillPersonFill } from 'react-icons/bs'
import { ImLocation } from 'react-icons/im'
import { HiBell } from 'react-icons/hi'
import { RiWallet3Fill } from 'react-icons/ri'
import { MdSecurity } from 'react-icons/md'
import { BsGlobe } from 'react-icons/bs'
import { BiLockAlt, BiLogOut } from 'react-icons/bi'
import { IoHelpCircleSharp } from 'react-icons/io5'
import useGetUserProfile from '../../../hooks/useGetUserProfile'

function SettingsDashboard() {
	const links = [
		{
			name: 'Edit Profile',
			link: 'edit-profile',
			component: <BsFillPersonFill className='h-5 w-5' />,
		},
		{
			name: 'Address',
			link: 'address',
			component: <ImLocation className='h-5 w-5' />,
		},
		{
			name: 'Notification',
			link: '',
			component: <HiBell className='h-5 w-5' />,
		},
		{
			name: 'Payment',
			link: 'card',
			component: <RiWallet3Fill className='h-5 w-5' />,
		},
		{
			name: 'Security',
			link: 'security',
			component: <MdSecurity className='h-5 w-5' />,
		},
		{
			name: 'Language',
			link: '',
			component: <BsGlobe className='h-5 w-5' />,
		},
		{
			name: 'Privacy Policy',
			link: '/privacy',
			component: <BiLockAlt className='h-5 w-5' />,
		},
		{
			name: 'Help Center',
			link: '',
			component: <IoHelpCircleSharp className='h-5 w-5' />,
		},
	]

	const { userData } = useGetUserProfile()
	return (
		<div className='font-bold py-5 px-5 lg:py-12 lg:px-20'>
			{/* <div className='grid  place-items-center mt-12 '> */}
			<div className='flex flex-col lg:flex-row justify-center items-center gap-10  md:gap-36'>
				<div>
					<img
						src={userData?.profilePicUrl}
						alt='User Profile'
						className='h-56 w-56 shadow-2xl rounded-full'
					/>
					<div className='text-primary text-center  mt-8'>
						{userData?.lastName} {userData?.firstName}
					</div>
					<div className='text-primary font-light text-center  mt-4'>
						{userData?.phone}
					</div>
				</div>

				<div className=' w-full lg:w-[40%]'>
					{links.map((item, index) => {
						return (
							<Link
								to={item.link}
								key={index}
								className='flex justify-between items-center text-primary mb-3 font-normal'
							>
								<div className='flex items-center gap-2'>
									{item.component}
									<span>{item.name} </span>
								</div>
								<CiCircleChevRight className='h-6 w-6' />
							</Link>
						)
					})}
					<div className='flex justify-between items-center text-[red] mb-3 font-normal'>
						<div className='flex items-center gap-2'>
							<BiLogOut className='h-5 w-5' />
							<span className=''>Logout </span>
						</div>
					</div>
				</div>
			</div>
			{/* </div> */}
		</div>
	)
}

export default SettingsDashboard
