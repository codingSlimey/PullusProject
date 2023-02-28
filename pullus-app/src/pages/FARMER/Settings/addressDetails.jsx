import { useNavigate } from 'react-router-dom'
import { ImLocation } from 'react-icons/im'
import { FiEdit } from 'react-icons/fi'
import { HiOutlineArrowLeft } from 'react-icons/hi'

function AddressDetails(props) {
	const navigate = useNavigate()

	return (
		<div className='font-bold pb-12'>
			<div className='flex items-center'>
				<button
					onClick={() => navigate('/farmer/settings')}
					className='bg-primary py-1 px-2 rounded-lg mr-4 text-[#fff]'
				>
					<HiOutlineArrowLeft className='h-6 w-6' />
				</button>
				<div className='text-primary  my-6'>Address Details</div>
			</div>
			<div className='grid place-items-center gap-10 mt-12'>
				<div className='w-[50%]'>
					<>
						{[...Array(3)].map((item, index) => {
							return (
								<div
									key={index}
									className='p-3  rounded-xl bg-white shadow-xl mb-6 '
								>
									<div className='flex justify-between pr-8 items-center font-normal text-primary '>
										<div className='flex gap-3 items-center'>
											<div className='p-1 bg-primary rounded-full border-4 border-grey text-[#fff]'>
												<ImLocation className='h-5 w-5' />
											</div>
											<div className='text-primary grid gap-1 font-light flex-auto'>
												<div className='font-bold gap-6 flex items-center'>
													<p>Home</p>
													<div>
														<span className='inline font-light px-4 py-1 rounded-2xl text-xs bg-grey'>
															Default
														</span>
													</div>
												</div>
												<div className=''>
													67 Balogun Street, Off Ogbagi road
												</div>
											</div>
										</div>

										<FiEdit className='h-5 w-5 cursor-pointer' />
									</div>
								</div>
							)
						})}
					</>
				</div>
				<div className='mt-12 flex justify-center gap-16 '>
					<button
						onClick={() => navigate('new-address')}
						className={`w-[fit] bg-primary text-[#fff] py-4 px-36 flex  items-center rounded-full shadow-xl  my-auto`}
					>
						Add Address
					</button>
				</div>
			</div>
		</div>
	)
}

export default AddressDetails
