import { useState } from 'react'
import { HiOutlineArrowLeft } from 'react-icons/hi'
import { useNavigate } from 'react-router-dom'
import Analysis from '../../../components/FARMER/cycleManagement/analysis'
import BatchDetail from '../../../components/FARMER/cycleManagement/batchDetail'

export default function MobileDetailsPage() {
	const navigate = useNavigate()
	const [activeTab, setActiveTab] = useState('batch info')
	const tabs = ['batch info', 'analysis']

	return (
		<div className='font-bold pb-12 tablet:hidden'>
			<div className='flex items-center mb-5'>
				<button
					onClick={() => navigate('/farmer/cycle-management')}
					className='bg-primary py-1 px-2 rounded-lg mr-4 text-[#fff]'
				>
					<HiOutlineArrowLeft className='h-6 w-6' />
				</button>
			</div>

			<div className='flex justify-around mb-8 font-bold '>
				{tabs.map((item, index) => {
					return (
						<div
							key={index}
							onClick={() => setActiveTab(item)}
							className={`capitalize h-[50px] rounded-full shadow-md w-[130px] text-sm mobile:text-base  mobile:w-[180px] flex items-center justify-center ${
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

			{activeTab === 'batch info' && <BatchDetail />}
		</div>
	)
}
