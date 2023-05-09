import { BsChevronRight, BsChevronDown } from 'react-icons/bs'
import { useEffect, useState } from 'react'
import { getAllProductionPlan } from '../../../api'

//Image
import logo from '../../../images/logo.png'
import { Link } from 'react-router-dom'

export default function PlanAccordion() {
	const [openAccordion, setOpenAccordion] = useState(true)

	const toggleAccordion = () => {
		setOpenAccordion(!openAccordion)
	}
	const [plans, setPlans] = useState([])
	const [skeleton, setSkeleton] = useState(false)

	function getDateDifference(dateString) {
		const today = new Date()
		const date = new Date(dateString)
		const diffInMs = today - date
		const diffInDays = Math.ceil(diffInMs / (1000 * 60 * 60 * 24))
		const weeks = Math.floor(diffInDays / 7)
		const days = diffInDays % 7
		const formattedString = `${weeks} weeks (${days} days)`
		return formattedString
	}

	useEffect(() => {
		async function fetchData() {
			setSkeleton(true)
			try {
				// You can await here
				const res = await getAllProductionPlan()
				console.log(res)
				setPlans(res?.data?.data?.obj)
				setSkeleton(false)
			} catch (error) {
				console.log(error)
				setTimeout(() => {
					setSkeleton(false)
				}, 5000)
			}
		}
		fetchData()
	}, [])
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
				} p-2 lgmobile:p-5 my-1 rounded-xl grid gap-3`}
			>
				{!skeleton ? (
					<>
						{plans.map((item, index) => {
							return (
								<Link
									to={`/farmer/production-plan/summary?plan=${item?.productionPlanName}`}
									key={index}
									className='py-3 px-2 cursor-pointer hover:brightness-90 rounded-md shadow-md bg-grey'
								>
									<div className='flex items-center font-normal text-primary gap-6'>
										<img
											className='h-8 w-8'
											src={logo}
											alt='user production plan'
										/>
										<div>
											<div className='flex items-center gap-2 lgmobile:gap-4 text-sm'>
												<span className='font-bold'>{item?.poultryType}</span>
												<span>|</span>
												<span>{item?.noOfBirds} birds</span>
											</div>
											<div className='lgmobile:flex text-left lgmobile:items-center gap-4 text-sm'>
												<span>{getDateDifference(item?.startDate)}</span>
												<span className='lgmobile:block hidden'>|</span>
												<div>
													{' '}
													<span className='font-bold'>Start Date: </span>
													{item?.startDate}
												</div>
											</div>
										</div>
									</div>
								</Link>
							)
						})}
					</>
				) : (
					<>
						{[...Array(3)].map((_, idx) => {
							return (
								<div
									key={idx}
									className='h-14 animate-pulse rounded-lg bg-primary/30'
								></div>
							)
						})}
					</>
				)}

				{!plans.length && !skeleton && (
					<div className='text-primary font-light text-center'>
						There are no Production Plans
					</div>
				)}
			</div>
		</div>
	)
}
