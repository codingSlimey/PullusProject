import { BsChevronRight, BsChevronDown } from 'react-icons/bs'
import { useEffect, useState } from 'react'
// import { getMyCycles } from '../../../api'

//Image
import logo from '../../../images/logo.png'

export default function PlanAccordion() {
	const [openAccordion, setOpenAccordion] = useState(true)
	const toggleAccordion = (index) => {
		setOpenAccordion(!openAccordion)
	}
	// const [cycles, setCycles] = useState([])
	// const [skeleton, setSkeleton] = useState(false)

	// useEffect(() => {
	// 	async function fetchData() {
	// 		setSkeleton(true)
	// 		// You can await here
	// 		const res = await getMyCycles(isActive)
	// 		// console.log(res.data.data.obj)
	// 		setCycles(res?.data?.data?.obj)
	// 		setSkeleton(false)
	// 	}
	// 	fetchData()
	// }, [isActive])
	return (
		<div
			className={`mt-4  bg-white border border-primary/20 shadow-lg rounded-xl `}
		>
			<div
				className={`flex rounded-lg items-center justify-between w-full px-5 py-3 focus:bg-white text-xl max-md:text-lg max-mobile:text-base font-medium text-left  ${
					openAccordion ? 'bg-primary/10' : 'bg-white'
				}  `}
				onClick={() => toggleAccordion()}
			>
				<span className='text-primary font-bold'>All time Productions (2)</span>
				<span
					className={` ${
						openAccordion ? 'bg-primary text-white' : 'bg-white text-primary '
					} h-10 w-10 max-md:h-8 max-md:w-8 ml-4 max-xmd:ml-8 rounded-full  max-xmd:px-2 flex items-center justify-center `}
				>
					{openAccordion ? <BsChevronDown /> : <BsChevronRight />}
				</span>
			</div>
			<div
				className={` ${
					openAccordion ? 'block' : 'hidden'
				} p-2 lgmobile:p-5 my-1 rounded-xl grid gap-4`}
			>
				{/* {!skeleton ? ( */}
				<>
					{[...Array(4)].map((item, index) => {
						return (
							<div
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
										<div className='flex items-center gap-2 lgmobile:gap-4 text-sm'>
											<span className='font-bold'>Broilers</span>
											<span>|</span>
											<span>500 birds</span>
										</div>
										<div className='lgmobile:flex text-left lgmobile:items-center gap-4 text-sm'>
											<span>42 days (6 weeks)</span>
											<span className='lgmobile:block hidden'>|</span>
											<div>
												{' '}
												<span className='font-bold'>Start Date:</span>
												08.12.2022
											</div>
										</div>
									</div>
								</div>
							</div>
						)
					})}
				</>
				{/* ) : ( */}
				{/* <>
						{[...Array(3)].map((_, idx) => {
							return (
								<div
									key={idx}
									className='h-14 animate-pulse rounded-lg bg-primary/30'
								></div>
							)
						})}
					</>
				)} */}

				{/* {!cycles.length && !skeleton && (
					<div className='text-primary font-light text-center'>
						There are no {item?.title}
					</div>
				)} */}
			</div>
		</div>
	)
}
