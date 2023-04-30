import { useNavigate } from 'react-router-dom'
import { FaPlay } from 'react-icons/fa'
import { BsBoxSeam } from 'react-icons/bs'
import { TbTruckDelivery } from 'react-icons/tb'
import { SlSocialDropbox } from 'react-icons/sl'
import { IoCheckmarkCircle } from 'react-icons/io5'

import logo from '../../../images/logo.png'
import ModalComponent from '../../../components/Modal'
import VendorProfile from './vendorProfile'
import { useState } from 'react'

function TrackOrder(props) {
	const navigate = useNavigate()
	const [showModal, setShowModal] = useState(false)

	return (
		<div className='px-3 font-bold  md:pb-12 md:px-20'>
			<div className='text-primary  my-6'>Track Order</div>
			<div className='flex flex-col lg:flex-row gap-10 lg:gap-36 mt-12 '>
				<div className='flex-1 items-center md:gap-4'>
					<div className='p-4 rounded-xl bg-white shadow-xl md:mb-4 '>
						<div className='flex gap-3 items-center font-normal text-primary '>
							<img
								className='h-20 w-20 rounded-2xl p-2 bg-grey'
								src={logo}
								alt=''
							/>
							<div className='text-primary grid gap-1 font-light flex-auto'>
								<div className='font-bold'>Day Old Chicks</div>
								<div className='flex items-center gap-3'>
									<span>Broilers</span>
									<span>|</span>
									<span>Qty = 500</span>
								</div>

								<div className='flex items-center justify-between'>
									<span className='font-bold'>N100,000</span>
								</div>
							</div>
						</div>
					</div>

					<div className='flex justify-center gap-8 mt-12'>
						<div className='grid place-items-center gap-3 text-primary'>
							<BsBoxSeam className='h-10 w-10' />
							<div className='relative after:absolute after:w-[200%] after:h-[2px] after:border-dashed after:border-1 after:border-primary after:bottom-[50%]  after:left-[100%] after:bg-primary '>
								<IoCheckmarkCircle className='h-6 w-6 ' />
							</div>
						</div>
						<div className='grid place-items-center gap-3 text-primary'>
							<TbTruckDelivery className='h-10 w-10' />
							<div className='relative after:absolute after:w-[200%] after:h-[2px] after:border-dashed after:border-1 after:border-primary after:bottom-[50%]  after:left-[100%] after:bg-primary/30 '>
								<IoCheckmarkCircle className='h-6 w-6 ' />
							</div>
						</div>
						<div className='grid place-items-center gap-3 text-primary/30'>
							<SlSocialDropbox className='h-10 w-10' />
							<IoCheckmarkCircle className='h-6 w-6' />
						</div>
					</div>
					<div className='text-primary text-center  mt-8'>
						Package In Delivery
					</div>
				</div>
				<div className='flex-1'>
					<div className='text-primary '>Order Status Details</div>

					{[...Array(5)].map((item, index) => (
						<div
							key={index}
							className='flex justify-between my-4 text-primary'
						>
							<div className='flex items-center gap-6'>
								<input
									type='radio'
									readOnly
									checked={true}
									className='text-primary outline-primary border-primary'
								/>
								<div className='text-sm'>
									<p>Order In Transit - Aug 28</p>
									<p className='font-light'>
										Ahmadu Bello Ave. Ring Road, DA 5643{' '}
									</p>
								</div>
							</div>
							<div className='font-light self-start'>8:30AM</div>
						</div>
					))}

					<button
						onClick={() => setShowModal(true)}
						className={`w-fit bg-[#fff] text-primary py-2 px-6 flex  items-center rounded-full  my-6`}
					>
						View vendor profile here
						<FaPlay className='ml-3 h-4 w-4' />
					</button>
				</div>
			</div>

			<ModalComponent
				isOpen={showModal}
				handleClose={() => setShowModal(false)}
			>
				<VendorProfile />
			</ModalComponent>
		</div>
	)
}

export default TrackOrder
