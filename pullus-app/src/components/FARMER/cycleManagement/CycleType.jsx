import { BsChevronRight, BsChevronDown } from 'react-icons/bs'
import SingleBatch from '../../../components/FARMER/cycleManagement/singleBatch'
import { useEffect, useState } from 'react'
import { getMyCycles } from '../../../api'
import Paginator from '../../Paginator'
import { toast } from 'react-toastify'

export default function CycleType({
	item,
	openIndex,
	index,
	toggleAccordion,
	openBatchDetail,
	isActive,
}) {
	const [cycles, setCycles] = useState([])
	const [skeleton, setSkeleton] = useState(false)
	const [totalPages, setTotalPages] = useState(0)

	const [offset, setOffset] = useState(0)
	const limit = 6

	const [currentPage, setCurrentPage] = useState(1)

	const paginate = (pageNumber) => {
		setCurrentPage(pageNumber)
		if (pageNumber < currentPage) {
			const newOffset = offset - limit
			setOffset(newOffset)
		} else {
			const newOffset = offset + limit
			setOffset(newOffset)
		}
	}

	async function fetchData(newOffset) {
		setSkeleton(true)
		try {
			const res = await getMyCycles(limit, newOffset, isActive)
			setTotalPages(res?.data?.data?.totalCount)
			setCycles(res?.data?.data?.obj)
			setSkeleton(false)
		} catch ({ response }) {
			const { data } = response
			toast.error(data.message)
			setTimeout(() => {
				setSkeleton(false)
			}, 5000)
		}
	}

	useEffect(() => {
		fetchData(offset)
	}, [isActive, limit, offset])

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
				} p-2 lgmobile:p-5 my-1 rounded-xl grid gap-4`}
			>
				{!skeleton ? (
					<>
						{cycles.map((item, index) => {
							return (
								<div
									key={index}
									onClick={() => openBatchDetail(item?.cycleName)}
								>
									<SingleBatch item={item} />
								</div>
							)
						})}
					</>
				) : (
					<>
						{[...Array(limit)].map((_, idx) => {
							return (
								<div
									key={idx}
									className='h-14 animate-pulse rounded-lg bg-primary/30'
								></div>
							)
						})}
					</>
				)}

				{totalPages !== 0 && (
					<div className='mt-2'>
						<Paginator
							totalItems={totalPages}
							itemsPerPage={limit}
							paginate={paginate}
							currentPage={currentPage}
						/>
					</div>
				)}

				{!cycles.length && !skeleton && (
					<div className='text-primary font-light text-center'>
						There are no {item?.title}
					</div>
				)}
			</div>
		</div>
	)
}
