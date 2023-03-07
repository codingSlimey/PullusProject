import { useNavigate } from 'react-router-dom'
import Button from '../../../components/FARMER/button'
import { useState } from 'react'
import EmptyList from '../../../images/emptyList.svg'
import logo from '../../../images/logo.png'

function OrderDasboard(props) {
	const navigate = useNavigate()
	const [activeTab, setActiveTab] = useState('Active')

	const tabs = [
		'Active', 'Completed'
	]

	return (
		<div className='font-bold pb-12'>
			<div className='grid place-items-center gap-10 mt-12'>
				<div className='flex items-center gap-4'>
					<input
						type='text'
						placeholder='Search'
						className='h-12 w-10/12  md:w-[350px] border-none bg-grey rounded-xl shadow-lg placeholder:text-primary placeholder:font-light'
					/>
					<Button
						title={'Search'}
						icon={false}
						color={'fade'}
						action={() => null}
					/>
				</div>

				<div className='flex'>
					{tabs.map((item) => {
						return (
							<span
								onClick={() => setActiveTab(item)}
								className={`px-4 text-primary font-medium w-40 text-center border-b-2 border-grey pb-2 cursor-pointer relative ${
									activeTab === item
										? 'after:absolute after:w-full after:bottom-0 after:translate-y-[50%] after:h-1 after:left-0 after:rounded-full after:bg-primary '
										: ''
								} `}
							>
								{item}
							</span>
						)
					})}
				</div>

				{activeTab === 'Active' && (
					<div className=''>
						<div className='  my-8 flex justify-center'>
							<img
								src={EmptyList}
								alt='Empty list '
								className=''
							/>
						</div>

						<div className=' text-primary text-center mb-3'>
							<p className='font-bold'>You don’t have an order yet </p>
							<p className='font-normal'>
								You don’t have an active order at this time
							</p>
						</div>
					</div>
				)}
				<div className='w-full md:w-[40%]'>
					{activeTab === 'Completed' && (
						<>
							{[...Array(3)].map((item, index) => {
								return (
									<div
										key={index}
										className='p-4  rounded-xl bg-white shadow-xl mb-4 '
									>
										<div className='flex gap-3 items-center font-normal text-primary '>
											<img
												className='md:h-20 md:w-20 h-14 w-14 rounded-2xl p-2 bg-grey'
												src={logo}
												alt=''
											/>
											<div className='text-primary grid gap-1 font-light flex-auto'>
												<div className='font-bold'>Day Old Chicks</div>
												<div className='flex text-xs md:text-base items-center gap-3'>
													<span>Broilers</span>
													<span>|</span>
													<span>Qty = 500</span>
												</div>
												<div>
													<span className=' flex w-24  items-start justify-start px-4 py-1 rounded-2xl text-xs bg-grey'>
														In delivery
													</span>
												</div>
												<div className='flex text-xs items-center justify-between'>
													<span className='font-bold'>N100,000</span>
													<button
														onClick={() => navigate('/farmer/track-order')}
														className='px-4 py-1 rounded-2xl shadow-lg text-xs bg-primary text-[#fff]'
													>
														Track Order
													</button>
													<span>{''}</span>
												</div>
											</div>
										</div>
									</div>
								)
							})}
						</>
					)}
				</div>
			</div>
		</div>
	)
}

export default OrderDasboard
