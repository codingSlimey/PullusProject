import { HiOutlineArrowLeft } from 'react-icons/hi'
import { BsChevronRight } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import { ToggleSwitch } from 'flowbite-react'
import { useState } from 'react'

function Security(props) {
	const navigate = useNavigate()
	const [toggle, setToggle] = useState(false)

	return (
		<div className='font-bold pb-12'>
			<div className='flex items-center'>
				<button
					onClick={() => navigate('/farmer/settings/card')}
					className='bg-primary py-1 px-2 rounded-lg mr-4 text-[#fff]'
				>
					<HiOutlineArrowLeft className='h-6 w-6' />
				</button>
				<div className='text-primary  my-6'>Add New Card</div>
			</div>

			<div className='flex gap-14 mt-8'>
				<div className='flex-1 grid gap-6 text-primary'>
					<div className='flex justify-between font-normal'>
						<p>Rememeber Me</p>
						<ToggleSwitch
							checked={true}
							onChange={() => setToggle(!toggle)}
							className='text-primary'
						/>
					</div>
					<div className='flex justify-between font-light'>
						<p>Biometric ID</p>
						<ToggleSwitch
							checked={true}
							onChange={() => setToggle(!toggle)}
							className='text-primary'
						/>
					</div>
					<div className='flex justify-between font-light'>
						<p>Google Authentication</p>
						<BsChevronRight className='h-6 w-6' />
					</div>
					input
				</div>
				<div className='  flex-1 gap-y-4'></div>
			</div>

			<div className='mt-16 grid justify-center gap-8 '>
				<button
					onClick={() => navigate('/farmer/settings')}
					className={`w-[fit] bg-{#fff} text-primary py-4 px-36 flex  items-center rounded-full shadow-xl  my-auto`}
				>
					Change PIN
				</button>
				<button
					onClick={() => navigate('/farmer/settings')}
					className={`w-[fit] bg-primary text-[#fff] py-4 px-36 flex  items-center rounded-full shadow-xl  my-auto`}
				>
					Change Password
				</button>
			</div>
		</div>
	)
}

export default Security
