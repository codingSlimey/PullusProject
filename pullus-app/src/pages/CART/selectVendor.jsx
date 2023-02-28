import logo from '../../images/logo.png'
import { Rating } from 'flowbite-react'
import { useNavigate } from 'react-router-dom'

function SelectVendor(props) {
	const navigate = useNavigate()
	return (
		<div className='px-36 py-10 text-left text-primary'>
			<h1 className='  text-2xl font-bold mt-8 mb-16'>Checkout</h1>
			<div className='flex gap-10'>
				<div className='flex-1'>
					<h5 className='  font-bold mb-6'>Vendors that Match Your location</h5>

					<div className='grid gap-4'>
						{[...Array(3)].map((item, index) => {
							return (
								<div
									key={index}
									className='py-4  rounded-xl bg-[#F6F7F9] shadow-xl mb-4 '
								>
									<div className=' px-6 flex items-center justify-between'>
										<div className='flex gap-3 items-center font-normal text-primary '>
											<img
												className='h-20 w-20 rounded-2xl p-2 bg-grey'
												src={logo}
												alt=''
											/>
											<div className='text-primary grid gap-1 font-light flex-auto'>
												<div className='font-bold'>
													Ultimate Farm Products Ltd.
												</div>
												<div className='flex items-center gap-3'>
													<span className='text-sm'>Delivery Count </span>
													<span>|</span>
													<span className='inline px-6 py-1 font-bold rounded-2xl text-xs bg-grey'>
														96
													</span>
												</div>
												<div className='flex items-center gap-3'>
													<span className='text-sm'>Delivery Time </span>
													<span>|</span>
													<span className='inline px-6 py-1 font-bold rounded-2xl text-xs bg-grey'>
														2 days
													</span>
												</div>

												<div className='flex items-center gap-3'>
													<Rating className='text-primary rating'>
														<Rating.Star />
														<Rating.Star />
														<Rating.Star />
														<Rating.Star />
														<Rating.Star filled={false} />
													</Rating>
													<span className='font-normal'>(23)</span>
												</div>
											</div>
										</div>
										<input
											type='checkbox'
											name=''
											id=''
											className='text-primary outline-primary border-primary border-2 focus:outline-none'
										/>
									</div>
									<hr className='my-2' />
									<div className='flex justify-between px-6 text-sm items-center'>
										<div className='flex items-center  font-bold gap-3 '>
											<span>Broilers</span>
											<span className='text-primary/40'>|</span>
											<span>Feed</span>
										</div>
										<span>
											Maitama, <span className='font-bold'>Abuja</span>{' '}
										</span>
									</div>
								</div>
							)
						})}
					</div>
				</div>

				<div className='flex-1'>
					<h5 className='  font-bold mb-6'>Other available vendors</h5>

					<div className='grid gap-4'>
						{[...Array(3)].map((item, index) => {
							return (
								<div
									key={index}
									className='py-4  rounded-xl bg-[#F6F7F9] shadow-xl mb-4 '
								>
									<div className=' px-6 flex items-center justify-between'>
										<div className='flex gap-3 items-center font-normal text-primary '>
											<img
												className='h-20 w-20 rounded-2xl p-2 bg-grey'
												src={logo}
												alt=''
											/>
											<div className='text-primary grid gap-1 font-light flex-auto'>
												<div className='font-bold'>
													Ultimate Farm Products Ltd.
												</div>
												<div className='flex items-center gap-3'>
													<span className='text-sm'>Delivery Count </span>
													<span>|</span>
													<span className='inline px-6 py-1 font-bold rounded-2xl text-xs bg-grey'>
														96
													</span>
												</div>
												<div className='flex items-center gap-3'>
													<span className='text-sm'>Delivery Time </span>
													<span>|</span>
													<span className='inline px-6 py-1 font-bold rounded-2xl text-xs bg-grey'>
														2 days
													</span>
												</div>

												<div className='flex items-center gap-3'>
													<Rating className='text-primary rating'>
														<Rating.Star />
														<Rating.Star />
														<Rating.Star />
														<Rating.Star />
														<Rating.Star filled={false} />
													</Rating>
													<span className='font-normal'>(23)</span>
												</div>
											</div>
										</div>
										<input
											type='checkbox'
											name=''
											id=''
											className='text-primary outline-primary border-primary border-2 focus:outline-none'
										/>
									</div>
									<hr className='my-2' />
									<div className='flex justify-between px-6 text-sm items-center'>
										<div className='flex items-center  font-bold gap-3 '>
											<span>Broilers</span>
											<span className='text-primary/40'>|</span>
											<span>Feed</span>
										</div>
										<span>
											Maitama, <span className='font-bold'>Abuja</span>{' '}
										</span>
									</div>
								</div>
							)
						})}
					</div>
				</div>
			</div>
			<div className='mt-12 flex  gap-16 '>
				<button
					onClick={() => navigate('/checkout')}
					className={`flex-1 bg-custom text-[#fff] text-lg font-bold py-4  flex justify-center  items-center rounded-full shadow-xl  my-auto`}
				>
					Checkout
				</button>
				<div className='flex-1'></div>
			</div>
		</div>
	)
}

export default SelectVendor
