//react-icons
import { FaPlay } from 'react-icons/fa'
import { BsChevronRight, BsChevronDown } from 'react-icons/bs'

import { useNavigate } from 'react-router-dom'

import { useState } from 'react'

import useScreenWidth from '../../../hooks/useScreenWidth'

import Analysis from '../../../components/FARMER/cycleManagement/analysis'
import SingleBatch from '../../../components/FARMER/cycleManagement/singleBatch'
import BatchDetail from '../../../components/FARMER/cycleManagement/batchDetail'

function MyCycle(props) {
	const navigate = useNavigate()
	const screenWidth = useScreenWidth()

	const [activeTab, setActiveTab] = useState('batch info')
	const tabs = ['batch info', 'analysis']

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

	const [showDetails, setShowDetails] = useState(false)
	function openBatchDetail() {
		if (screenWidth > 830) setShowDetails(true)
		else navigate('/farmer/cycle-management/batch/detail')
	}

	return (
		<div className='font-bold pb-12'>
			<div className='text-primary text-left my-6'>My Cycles</div>

			{showDetails && (
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
			)}

			{activeTab === 'analysis' && (
				<div className='hidden tablet:block'>
					<Analysis />
				</div>
			)}

			{activeTab === 'batch info' && (
				<div className='flex max-tablet:flex-col gap-12 text-left lg:gap-10 xl:gap-16'>
					<div className='flex-1'>
						{/* Accordions  */}
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
											return (
												<div
													key={index}
													onClick={openBatchDetail}
												>
													<SingleBatch />
												</div>
											)
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

					{/* A single Batch details  */}
					<div className='flex-1 hidden tablet:block'>
						{showDetails && <BatchDetail />}
					</div>
				</div>
			)}
		</div>
	)
}

export default MyCycle
