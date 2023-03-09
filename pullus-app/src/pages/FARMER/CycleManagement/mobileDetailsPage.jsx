import { useState } from 'react'

import Analysis from '../../../components/FARMER/cycleManagement/analysis'
import BatchDetail from '../../../components/FARMER/cycleManagement/batchDetail'

export default function MobileDetailsPage() {
	const [activeTab, setActiveTab] = useState('batch info')
	const tabs = ['batch info', 'analysis']

	return (
		<div className='font-bold pb-12 tablet:hidden'>
			<div className='text-primary text-left my-6'>[Back Button here]</div>

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
