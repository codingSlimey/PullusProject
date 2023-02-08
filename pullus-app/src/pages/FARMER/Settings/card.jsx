import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { GrCreditCard } from 'react-icons/gr'
import { HiOutlineArrowLeft } from 'react-icons/hi'

function Card(props) {
	const navigate = useNavigate()
	const [activeTab, setActiveTab] = useState('Active')

	return (
		<div className='font-bold pb-12'>
			<div className='flex items-center'>
				<button
					onClick={() => navigate('/farmer/settings')}
					className='bg-primary py-1 px-2 rounded-lg mr-4 text-[#fff]'
				>
					<HiOutlineArrowLeft className='h-6 w-6' />
				</button>
				<div className='text-primary  my-6'>Cards</div>
			</div>
			<div className='grid place-items-center gap-10 mt-12'>
				<div className='w-[40%]'>
					<>
						{[...Array(3)].map((item, index) => {
							return (
								<div
									key={index}
									className='p-3  rounded-xl bg-white shadow-xl mb-6 '
								>
									<div className='flex justify-between py-2 px-1 items-center font-normal text-primary '>
										<div className='flex gap-4 items-center text-primary'>
											<GrCreditCard className='h-6 w-6 ' />
											<div className='text-primary grid gap-1 font-light flex-auto'>
												<div className='font-bold gap-6 flex items-center'>
													<p>Paystack</p>
												</div>
											</div>
										</div>
										<div>Connected</div>
									</div>
								</div>
							)
						})}
					</>
				</div>
				<div className='mt-12 flex justify-center gap-16 '>
					<button
						onClick={() => navigate('add-card')}
						className={`w-[fit] bg-primary text-[#fff] py-4 px-36 flex  items-center rounded-full shadow-xl  my-auto`}
					>
						Add a New Card
					</button>
				</div>
			</div>
		</div>
	)
}

export default Card
