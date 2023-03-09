//flowbite
import { Card } from 'flowbite-react'

//react-icons
import { FaPlay, FaHeartbeat } from 'react-icons/fa'
import { GiChicken } from 'react-icons/gi'
import { IoAdd } from 'react-icons/io5'
import { BsChevronRight, BsChevronDown } from 'react-icons/bs'

//Image

import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

import Analysis from './analysis'
import SingleBatch from '../../../components/FARMER/cycleManagement/singleBatch'

function MyCycle(props) {
	const navigate = useNavigate()
	const [activeTab, setActiveTab] = useState('cycle info')
	const tabs = ['cycle info', 'analysis']

	const cycles = [
		{
			title: 'Active Batches',
		},
		{
			title: 'Closed Batches',
		},
	]

	const [openIndex, setOpenIndex] = useState(0)

	const toggleAccordion = (index) => {
		setOpenIndex(openIndex === index ? null : index)
	}

	return (
		<div className='font-bold pb-12'>
			<div className='text-primary text-left my-6'>My Cycles</div>

			<div className='flex mb-8 font-bold max-tablet:hidden'>
				{tabs.map((item, index) => {
					return (
						<div
							key={index}
							onClick={() => setActiveTab(item)}
							className={`capitalize h-[65px] w-[180px] flex items-center justify-center ${
								activeTab === item
									? 'bg-fade text-[#fff]'
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
				<div className='flex max-tablet:flex-col gap-12 text-left lg:gap-10 xl:gap-16'>
					<div className='flex-1'>
						{cycles.map((item, index) => {
							return (
								<div
									className={`mt-4  bg-white border border-primary/20 shadow-lg rounded-xl `}
								>
									<div
										className={`flex rounded-lg items-center justify-between w-full px-5 py-3 focus:bg-white text-xl max-md:text-lg max-mobile:text-base font-medium text-left  ${
											openIndex === index ? 'bg-primary/10' : 'bg-white'
										}  `}
										onClick={() => toggleAccordion(index)}
									>
										<span className='text-primary font-bold'>{item.title}</span>
										<span
											className={` ${
												openIndex === index
													? 'bg-primary text-white'
													: 'bg-white text-primary '
											} h-10 w-10 max-md:h-8 max-md:w-8 ml-4 max-xmd:ml-8 rounded-full  max-xmd:px-2 flex items-center justify-center `}
										>
											{openIndex === index ? (
												<BsChevronDown />
											) : (
												<BsChevronRight />
											)}
										</span>
									</div>
									<div
										className={` ${
											openIndex === index ? 'block' : 'hidden'
										} p-5 my-1 rounded-xl `}
									>
										{[...Array(2)].map((item, index) => {
											return <SingleBatch />
										})}
									</div>
								</div>
							)
						})}

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
