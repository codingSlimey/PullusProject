// import { HiOutlineArrowLeft } from 'react-icons/hi'
import { useLocation, useNavigate } from 'react-router-dom'
import Button from '../../../components/FARMER/button'
import { useEffect, useState } from 'react'
import { getSingleProductionPlan } from '../../../api'
import { toast } from 'react-toastify'

function Summary() {
	const navigate = useNavigate()
	const [summary, setSummary] = useState(null)

	const location = useLocation()
	const queryParams = new URLSearchParams(location.search)
	const paramValue = queryParams.get('plan')

	// Function to change date Format
	function formatDate(dateString) {
		const date = new Date(dateString)
		const options = { month: 'long', day: 'numeric', year: 'numeric' }
		return date.toLocaleDateString('en-US', options)
	}

	useEffect(() => {
		if (paramValue) {
			const fetchData = async () => {
				// setDetailsSkeleton(true)
				setSummary(null)
				try {
					const res = await getSingleProductionPlan(paramValue)
					console.log(res)
					setSummary(res?.data?.data?.obj)
					// setDetailsSkeleton(false)
				} catch ({ response }) {
					// console.log(response)
					const { status } = response
					// setDetailsSkeleton(false)
					if (status === 500)
						toast.error('Error fetching this particular cycle')
					if (status === 400)
						toast.error('This particular cycle does not exist')

					setTimeout(() => {
						// setDetailsSkeleton(false)
					}, 5000)
				}
			}

			fetchData()
		}
	}, [paramValue])

	return (
		<div className='font-bold pb-12'>
			<div className='flex items-center'>
				{/* <button
					onClick={() => navigate('/farmer/cycle-management')}
					className='bg-primary py-1 px-2 rounded-lg mr-4 text-[#fff]'
				>
					<HiOutlineArrowLeft className='h-6 w-6' />
				</button> */}
				<div className='text-primary my-6'>{paramValue} Summary</div>
			</div>

			<div className='flex flex-col md:flex-row items-center gap-16 mt-12'>
				<div className='w-full md:flex-1'>
					<div className='flex gap-2 text-primary mb-3'>
						<span className='font-bold'>Start Date: </span>
						<span className='font-normal'>
							{formatDate(summary?.startDate)}{' '}
						</span>
					</div>
					<div className='flex gap-2 text-primary mb-3'>
						<span className='font-bold'>Number of Birds: </span>
						<span className='font-normal'>{summary?.noOfBirds} </span>
					</div>
					<div className='flex gap-2 text-primary mb-3'>
						<span className='font-bold'>Bird Type: </span>
						<span className='font-normal'>{summary?.poultryType}</span>
					</div>
					<div className='flex gap-2 text-primary mb-3'>
						<span className='font-bold'>Duration of Production: </span>
						<span className='font-normal'>
							{summary?.durationOfProductionInWeeks} Weeks{' '}
						</span>
					</div>
					<div className='flex gap-2 text-primary mb-3'>
						<span className='font-bold'>DoC Brand: </span>
						<span className='font-normal'>{summary?.docBrand} </span>
					</div>
					<div className='flex gap-2 text-primary mb-3'>
						<span className='font-bold'>Feed Brand: </span>
						<span className='font-normal'>{summary?.feedBrand} </span>
					</div>
					<div className='flex gap-2 text-primary mb-3'>
						<span className='font-bold'>Insurance: </span>
						<span className='font-normal'>
							{' '}
							{summary?.insurance === true ? 'Yes' : 'No'}{' '}
						</span>
					</div>
					<div className='flex gap-2 text-primary mb-3'>
						<span className='font-bold'>Off-take: </span>
						<span className='font-normal'>
							{summary?.market === true ? 'Yes' : 'No'}{' '}
						</span>
					</div>
				</div>

				<div className='w-full md:flex-1'>
					<div className='relative overflow-x-auto'>
						<table className='w-full text-sm text-left  border-collapse border border-slate-400'>
							<thead className='text-xs  uppercase bg-primary text-[#fff] border border-[white]'>
								<tr className=''>
									<th
										scope='col'
										className='px-6 py-3'
									>
										Product name
									</th>
									<th
										scope='col'
										className='px-6 py-3'
									>
										Color
									</th>
								</tr>
							</thead>
							<tbody className='bg-green'>
								<tr className=' border border-[white] text-[white]'>
									<td className='px-6 py-4 font-medium  border '>DoC Brand</td>
									<td className='border px-6 py-4'>{summary?.docBrand}</td>
								</tr>
								<tr className=' border border-[white] text-[white]'>
									<td className='px-6 py-4 font-medium  border '>Feed Brand</td>
									<td className='border px-6 py-4'>{summary?.feedBrand}</td>
								</tr>
								<tr className=' border border-[white] text-[white]'>
									<td className='px-6 py-4 font-medium  border '>
										Duration of Production
									</td>
									<td className='border px-6 py-4'>
										{summary?.durationOfProductionInWeeks} Weeks{' '}
									</td>
								</tr>

								<tr className=' border border-[white] text-[white]'>
									<td className='px-6 py-4 font-medium  border '>
										Quantity of DoC
									</td>
									<td className='border px-6 py-4'>1,000</td>
								</tr>

								<tr className=' border border-[white] text-[white]'>
									<td className='px-6 py-4 font-medium  border '>
										Quantity of Feed
									</td>
									<td className='border px-6 py-4'>200 Kg</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>

			<div className='mt-12 flex justify-center gap-16 '>
				<Button
					title={'Proceed to Production Schedule'}
					icon={true}
					color={'fade'}
					action={() => navigate('production-schedule')}
				/>
			</div>
		</div>
	)
}

export default Summary
