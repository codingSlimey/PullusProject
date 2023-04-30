//react-icons
import { FaPlay } from 'react-icons/fa'

import { useLocation, useNavigate } from 'react-router-dom'

import { useEffect, useState } from 'react'

import useScreenWidth from '../../../hooks/useScreenWidth'

import Analysis from '../../../components/FARMER/cycleManagement/analysis'
import BatchDetail from '../../../components/FARMER/cycleManagement/batchDetail'
import CycleType from '../../../components/FARMER/cycleManagement/CycleType'

function MyCycle() {
	const navigate = useNavigate()
	const location = useLocation()
	const queryParams = new URLSearchParams(location.search)
	const paramValue = queryParams.get('cycle')

	const screenWidth = useScreenWidth()

	const [activeTab, setActiveTab] = useState('batch info')
	const tabs = ['batch info', 'analysis']

	const cycles = [
		{
			title: 'Active Cycles',
		},
		{
			title: 'Closed Cycles',
		},
	]

	const [openIndex, setOpenIndex] = useState(0)

	const toggleAccordion = (index) => {
		setOpenIndex(openIndex === index ? null : index)
	}

	const [showDetails, setShowDetails] = useState(false)

	// function to open a single batch
	function openBatchDetail(cycleName) {
		if (screenWidth > 960) {
			setShowDetails(true)
			navigate(`/farmer/cycle-management?cycle=${cycleName}`)
		} else navigate(`/farmer/cycle-management/batch/detail?cycle=${cycleName}`)
	}

	useEffect(() => {
		if (paramValue) {
			setShowDetails(true)
		}
	}, [paramValue])

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
								<div key={index}>
									<CycleType
										item={item}
										openIndex={openIndex}
										index={index}
										toggleAccordion={toggleAccordion}
										openBatchDetail={openBatchDetail}
										isActive={index === 0 ? true : false}
									/>
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

							<button
								onClick={() =>
									navigate('/farmer/production-plan/create-production-plan')
								}
								className='w-full flex justify-center items-center bg-[#fff] py-3 rounded-full text-primary shadow-xl my-4'
							>
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
