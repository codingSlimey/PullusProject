//flowbite
import { Accordion,  Card } from 'flowbite-react'

//react-icons
import { FaPlay, FaHeartbeat } from 'react-icons/fa'
import { GiChicken } from 'react-icons/gi'
import { IoAdd } from 'react-icons/io5'

//Image
import logo from '../../../images/logo.png'

import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

import Analysis from './analysis'



function MyCycle(props) {
	const navigate = useNavigate()
	const [activeTab, setActiveTab] = useState('cycle info')
	const tabs = ['cycle info', 'analysis']

	return (
		<div className='font-bold pb-12'>
			<div className='text-primary  my-6'>My Cycles</div>

			<div className='flex mb-8 font-bold'>
				{tabs.map((item, index) => {
					return (
						<div
							key={index}
							onClick={() => setActiveTab(item)}
							className={`capitalize h-[70px] w-[180px] flex items-center justify-center ${
								activeTab === item
									? 'bg-custom text-[#fff]'
									: 'border-primary text-primary border'
							}  cursor-pointer`}
						>
							{item}
						</div>
					)
				})}
			</div>

			{activeTab === 'analysis' && <Analysis />}

			{activeTab === 'cycle info' && (
				<div className='flex gap-16'>
					<div className='flex-1'>
						<Accordion
							collapseAll={true}
							alwaysOpen={true}
						>
							<Accordion.Panel>
								<Accordion.Title>
									<div className='text-primary'>Active Cycles (2)</div>
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
													<span>Batch 1</span>
													<span>|</span>
													<span>1 weeks</span>
													<span>|</span>
													<span>Feed Type</span>
												</div>
											</Card>
										)
									})}
								</Accordion.Content>
							</Accordion.Panel>
							<Accordion.Panel>
								<Accordion.Title>
									<div className='text-primary'>Closed Cycles (0)</div>
								</Accordion.Title>
								<Accordion.Content>
									<p className='mb-2 text-gray-500 dark:text-gray-400'>
										Flowbite is first conceptualized and designed using the
										Figma software so everything you see in the library has a
										design equivalent in our Figma file.
									</p>
								</Accordion.Content>
							</Accordion.Panel>
						</Accordion>

						<div className='mt-20'>
							<button
								onClick={() => navigate('new-cycle')}
								className='w-full bg-primary py-3 rounded-full shadow-xl text-[#fff] mt-8 mb-6'
							>
								Start a New Cycle
							</button>

							<button className='w-full flex justify-center items-center bg-[#fff] py-3 rounded-full text-primary shadow-xl my-4'>
								Create a New Production Plan&nbsp;&nbsp;{' '}
								<FaPlay className='mr-3 h-4 w-4' />
							</button>
						</div>
					</div>

					<div className='flex-1'>
						<div>
							<div className='text-primary mb-4'>General Info</div>
							<Card className='py-0 my-4 bg-grey'>
								<div className='flex items-center justify-between font-bold text-primary gap-6'>
									<span>Batch 1 - Nov 2022</span>
									<span className='font-light'>14 - Nov-2022</span>
								</div>
								<hr className='border-primary mb-6' />

								<div className='flex items-center justify-between font-bold text-primary gap-6'>
									<span className='font-light'>14 - Nov-2022</span>
									<span>Batch 1 - Nov 2022</span>
								</div>
								<div className='flex items-center justify-between font-bold text-primary gap-6'>
									<span className='font-light'>14 - Nov-2022</span>
									<span>Batch 1 - Nov 2022</span>
								</div>
							</Card>
						</div>

						<div className='mt-10'>
							<div className='text-primary mb-4'>Flock Records</div>

							<div>
								<div className='flex mb-6 items-center text-primary justify-between  px-8 py-4 shadow-xl rounded-full  bg-[#fff]'>
									<div className='flex gap-3 items-center'>
										<FaHeartbeat className='text-primary text-lg' />
										<span className='font-bold'>Liveability</span>
									</div>

									<div className='font-bold'>
										995 <span className='font-light'>/1000 Alive</span>
									</div>
								</div>

								<div className='flex mb-6 items-center text-primary justify-between  px-8 py-4 shadow-xl rounded-full  bg-[#fff]'>
									<div className='flex gap-3 items-center'>
										<GiChicken className='text-primary text-lg' />
										<span className='font-bold'>Daily Feed Intake</span>
									</div>

									<div className='font-bold'>
										151 g <span className='font-light'>/bird</span>
									</div>
								</div>

								<div className='flex mb-6 items-center text-primary justify-between  px-8 py-4 shadow-xl rounded-full  bg-[#fff]'>
									<div className='flex gap-3 items-center'>
										<FaHeartbeat className='text-primary text-lg' />
										<span className='font-bold'>Body Weight</span>
									</div>

									<div className='font-bold'>Avg 60 g</div>
								</div>

								<div className='flex mb-6 items-center text-primary justify-between  px-8 py-4 shadow-xl rounded-full  bg-[#fff]'>
									<div className='flex gap-3 items-center'>
										<FaHeartbeat className='text-primary text-lg' />
										<span className='font-bold'>Water Intake</span>
									</div>
									<div className='font-bold'>
										0 ml <span className='font-light'>/bird</span>
									</div>
								</div>
							</div>
						</div>

						<div className='mt-16'>
							<div className='text-primary mb-4'>Notes</div>

							<div className='px-4 bg-grey rounded-xl'>
								<textarea
									type='text'
									className='bg-grey w-full rounded-xl border-none px-2 h-40'
								/>
							</div>
						</div>

						<button
							onClick={() => navigate('add-data')}
							className='w-fit px-4 mt-6 flex justify-center items-center bg-primary py-3 rounded-full text-[#fff] shadow-xl my-4'
						>
							Add Data&nbsp;&nbsp;{' '}
							<IoAdd className='mr-3 h-6 w-6 text-[white] font-bold' />
						</button>
					</div>
				</div>
			)}
		</div>
	)
}

export default MyCycle
