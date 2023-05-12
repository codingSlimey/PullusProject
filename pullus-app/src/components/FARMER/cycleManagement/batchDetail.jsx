import { FaHeartbeat } from 'react-icons/fa'
import { GiChicken } from 'react-icons/gi'
import { IoAdd } from 'react-icons/io5'

import { useNavigate, useLocation } from 'react-router-dom'
import formatDays from '../../../utils/formatDays'
import { useEffect, useState } from 'react'
import { getSingleCycleInfo } from '../../../api'
import { toast } from 'react-toastify'
export default function BatchDetail() {
	const navigate = useNavigate()
	const location = useLocation()
	const [detailsSkeleton, setDetailsSkeleton] = useState(false)
	const [activeDetails, setActiveDetails] = useState(null)

	const queryParams = new URLSearchParams(location.search)

	// Get the value of a specific query parameter
	const paramValue = queryParams.get('cycle')
	// console.log(paramValue)

	useEffect(() => {
		if (paramValue) {
			const fetchData = async () => {
				setDetailsSkeleton(true)
				setActiveDetails(null)
				try {
					const res = await getSingleCycleInfo(paramValue)
					setActiveDetails(res?.data?.data?.obj)
					setDetailsSkeleton(false)
				} catch ({ response }) {
					const { data } = response
					toast.error(data.message)
					setTimeout(() => {
						setDetailsSkeleton(false)
					}, 5000)
				}
			}

			fetchData()
		}
	}, [location, paramValue])

	// if (!paramValue) return

	return (
		<>
			{!detailsSkeleton && activeDetails ? (
				<div className='text-left'>
					<div>
						<div className='text-primary mb-4'>General Info</div>
						<div className='py-4 shadow-lg rounded-lg px-6 my-4 bg-grey'>
							<div className='flex items-center justify-between font-bold text-primary gap-6'>
								<span>{activeDetails?.cycleName}</span>
								<span className='font-light'>{activeDetails?.startDate}</span>
							</div>
							<hr className='border-primary mt-2 mb-6' />

							<div className='flex items-center justify-between font-bold text-primary gap-6'>
								<span className='font-light'>Age</span>
								<span>{formatDays(activeDetails?.ageInDays)}</span>
							</div>
							<div className='flex mt-2 items-center justify-between font-bold text-primary gap-6'>
								<span className='font-light'>Feed Phase</span>
								<span>Broiler Starter</span>
							</div>
						</div>
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
									{activeDetails?.liveability}
									<span className='font-light'> Alive</span>
								</div>
							</div>

							<div className='flex mb-6 items-center text-primary justify-between  px-8 py-4 shadow-xl rounded-full  bg-[#fff]'>
								<div className='flex gap-3 items-center'>
									<GiChicken className='text-primary text-lg' />
									<span className='font-bold'>Daily Feed Intake</span>
								</div>

								<div className='font-bold'>
									{activeDetails?.dailyFeedIntake} g{' '}
									<span className='font-light'>/bird</span>
								</div>
							</div>

							<div className='flex mb-6 items-center text-primary justify-between  px-8 py-4 shadow-xl rounded-full  bg-[#fff]'>
								<div className='flex gap-3 items-center'>
									<FaHeartbeat className='text-primary text-lg' />
									<span className='font-bold'>Body Weight</span>
								</div>

								<div className='font-bold'>
									Avg {activeDetails?.bodyWeight} g
								</div>
							</div>

							<div className='flex mb-6 items-center text-primary justify-between  px-8 py-4 shadow-xl rounded-full  bg-[#fff]'>
								<div className='flex gap-3 items-center'>
									<FaHeartbeat className='text-primary text-lg' />
									<span className='font-bold'>Water Intake</span>
								</div>
								<div className='font-bold'>
									{activeDetails?.waterIntake} ml{' '}
									<span className='font-light'>/bird</span>
								</div>
							</div>
						</div>
					</div>

					{/* <div className='mt-16'>
					<div className='text-primary mb-4'>Notes</div>

					<div className=' bg-grey rounded-xl h-fit'>
						<textarea
							type='text'
							className='bg-grey w-full rounded-xl border-none px-2 h-40'
						/>
					</div>
				</div> */}

					<button
						onClick={() =>
							navigate(`/farmer/cycle-management/add-data?cycle=${paramValue}`)
						}
						className='tablet:w-fit w-full px-4 mt-6 flex justify-center items-center bg-fade py-3 rounded-full text-[#fff] shadow-xl my-4'
					>
						Add Data&nbsp;&nbsp;{' '}
						<IoAdd className='mr-3 h-6 w-6 text-[white] font-bold' />
					</button>
				</div>
			) : detailsSkeleton && !activeDetails ? (
				<div className='grid gap-4'>
					<div className='h-64 bg-primary/30 animate-pulse rounded-lg'></div>

					{[...Array(4)].map((_, idx) => {
						return (
							<div
								key={idx}
								className='h-12 bg-primary/30 rounded-full'
							></div>
						)
					})}
				</div>
			) : (
				<>
					{!activeDetails && !detailsSkeleton && (
						<div className='text-primary text-center flex justify-center items-center text-lg h-full font-semibold'>
							No details Available, try again later
						</div>
					)}
				</>
			)}
		</>
	)
}
