//flowbite
import { Accordion, Card } from 'flowbite-react'

//react-icons
import { FaPlay } from 'react-icons/fa'

//Image
import logo from '../../../images/logo.png'

//React router
import { useNavigate } from 'react-router-dom'

function RecentProduction(props) {
	const navigate = useNavigate()

	return (
		<div className='font-bold pb-12'>
			<div className='text-primary  my-6'>Recent Productions</div>

			<div className='flex gap-16'>
				<div className='flex-1'>
					<Accordion>
						<Accordion.Panel>
							<Accordion.Title>
								<div className='text-primary'>All time Productions (2)</div>
							</Accordion.Title>
							<Accordion.Content>
								{[...Array(2)].map((item, index) => {
									return (
										<Card
											key={index}
											className='py-0 my-4'
										>
											<div className='flex items-center font-normal text-primary gap-6'>
												<img
													className='h-8 w-8'
													src={logo}
													alt=''
												/>
												<div>
													<div className='flex items-center gap-4 text-sm'>
														<span className='font-bold'>Broilers</span>
														<span>|</span>
														<span>500 birds</span>
													</div>
													<div className='flex items-center gap-4 text-sm'>
														<span>42 days (6 weeks)</span>
														<span>|</span>
														<div>
															{' '}
															<span className='font-bold'>
																Start Date:
															</span>{' '}
															08.12.2022
														</div>
													</div>
												</div>
											</div>
										</Card>
									)
								})}
							</Accordion.Content>
						</Accordion.Panel>
					</Accordion>

					<div className='mt-20'>
						<button
							onClick={() => navigate('/farmer/cycle-management/new-cycle')}
							className='w-full bg-primary py-3 rounded-full shadow-xl text-[#fff] mt-8 mb-6'
						>
							Start a New Cycle
						</button>

						<button
							onClick={() => {
								navigate('create-production-plan')
							}}
							className='w-full flex justify-center items-center bg-[#fff] py-3 rounded-full text-primary shadow-xl my-4'
						>
							Create a New Production Plan&nbsp;&nbsp;{' '}
							<FaPlay className='mr-3 h-4 w-4' />
						</button>
					</div>
				</div>

				<div className='flex-1'></div>
			</div>
		</div>
	)
}

export default RecentProduction
