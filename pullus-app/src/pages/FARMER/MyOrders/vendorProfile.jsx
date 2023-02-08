import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { FaPlay } from 'react-icons/fa'
import { AiFillStar } from 'react-icons/ai'

import { Avatar } from 'flowbite-react'

import logo from '../../../images/logo.png'

function VendorProfile(props) {
	const navigate = useNavigate()

	return (
		<div className='font-bold pb-12 px-20'>
			<div className='text-primary  my-6'>Vendor Profile</div>
			<div className='grid  place-items-center mt-12 '>
				<div className='flex items-center gap-20'>
					<div>
						<img
							src='https://flowbite.com/docs/images/people/profile-picture-5.jpg'
							alt=''
							className='h-56 w-56 shadow-2xl rounded-full'
						/>
						<div className='text-primary text-center  mt-8'>Adeyemi Kasim</div>
					</div>

					<div className=' '>
						<div className='flex gap-2 text-primary mb-3'>
							<span className='font-bold'>Company: </span>
							<span className='font-normal'>Company registered name</span>
						</div>
						<div className='flex gap-2 text-primary mb-3'>
							<span className='font-bold'>Phone number: </span>
							<span className='font-normal'>+234 805 1111 111 </span>
						</div>
						<div className='flex gap-2 text-primary mb-3'>
							<span className='font-bold'>Location: </span>
							<span className='font-normal'>Lagos, Nigeria</span>
						</div>
						<div className='flex gap-2 text-primary mb-3'>
							<span className='font-bold'>Primary service: </span>
							<span className='font-normal'>Bird Supplier </span>
						</div>
						<div className='flex gap-2 text-primary mb-3'>
							<span className='font-bold'>Transactions: </span>
							<span className='font-normal'>105 </span>
						</div>
						<div className='flex items-center gap-2 text-primary mb-3'>
							<span className='font-bold'>Rating: </span>
							<AiFillStar />
							<span className='font-normal'>4.9 (7 reviews) </span>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default VendorProfile
