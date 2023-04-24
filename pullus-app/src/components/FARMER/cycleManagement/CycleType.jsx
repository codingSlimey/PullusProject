import { BsChevronRight, BsChevronDown } from 'react-icons/bs'
import SingleBatch from '../../../components/FARMER/cycleManagement/singleBatch'
import { useEffect } from 'react'
import { getMyCycles } from '../../../api'

export default function CycleType({
	item,
	openIndex,
	index,
	toggleAccordion,
	openBatchDetail,
	isActive,
}) {
	useEffect(() => {
		async function fetchData() {
			// You can await here
			const res = await getMyCycles(isActive)
			console.log(res)
		}
		fetchData()
	}, [isActive])
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
					{openIndex === index ? <BsChevronDown /> : <BsChevronRight />}
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
}
