// import { HiOutlineArrowLeft } from 'react-icons/hi'
import { useNavigate } from 'react-router-dom'
import Button from '../../../components/FARMER/button'
import useGetProductionPlan from '../../../hooks/ProductionPlan/useGetProductionPlan'

function Summary() {
	const navigate = useNavigate()

	const { paramValue, summary, skeleton } = useGetProductionPlan()

	// Function to change date Format
	function formatDate(dateString) {
		const date = new Date(dateString)
		const options = { month: 'long', day: 'numeric', year: 'numeric' }
		return date.toLocaleDateString('en-US', options)
	}

	const leftHandSideClass = 'flex items-center gap-2 text-primary mb-3'

	return (
		<div className='font-bold pb-12'>
			<div className='flex items-center'>
				{/* <button
					onClick={() => navigate('/farmer/cycle-management')}
					className='bg-primary py-1 px-2 rounded-lg mr-4 text-[#fff]'
				>
					<HiOutlineArrowLeft className='h-6 w-6' />
				</button> */}
				<div className='text-primary my-4 text-lg'>{paramValue} Summary</div>
			</div>

			<div className='flex flex-col md:flex-row items-center gap-16 mt-8'>
				<div className='w-full md:flex-1'>
					<div className={leftHandSideClass}>
						<span className='font-bold'>Start Date: </span>
						{skeleton ? (
							<Skeleton />
						) : (
							<span className='font-normal'>
								{formatDate(summary?.startDate)}{' '}
							</span>
						)}
					</div>
					<div className={leftHandSideClass}>
						<span className='font-bold'>Number of Birds: </span>
						{skeleton ? (
							<Skeleton />
						) : (
							<span className='font-normal'>{summary?.noOfBirds} </span>
						)}
					</div>
					<div className={leftHandSideClass}>
						<span className='font-bold'>Bird Type: </span>
						{skeleton ? (
							<Skeleton />
						) : (
							<span className='font-normal'>{summary?.poultryType}</span>
						)}
					</div>
					<div className={leftHandSideClass}>
						<span className='font-bold'>Duration of Production: </span>
						{skeleton ? (
							<Skeleton />
						) : (
							<span className='font-normal'>
								{summary?.durationOfProductionInWeeks} Weeks{' '}
							</span>
						)}
					</div>
					<div className={leftHandSideClass}>
						<span className='font-bold'>DoC Brand: </span>
						{skeleton ? (
							<Skeleton />
						) : (
							<span className='font-normal'>{summary?.docBrand} </span>
						)}
					</div>
					<div className={leftHandSideClass}>
						<span className='font-bold'>Feed Brand: </span>
						{skeleton ? (
							<Skeleton />
						) : (
							<span className='font-normal'>{summary?.feedBrand} </span>
						)}
					</div>
					<div className={leftHandSideClass}>
						<span className='font-bold'>Insurance: </span>
						{skeleton ? (
							<Skeleton />
						) : (
							<span className='font-normal'>
								{summary?.insurance === true ? 'Yes' : 'No'}
							</span>
						)}
					</div>
					<div className={leftHandSideClass}>
						<span className='font-bold'>Off-take: </span>
						{skeleton ? (
							<Skeleton />
						) : (
							<span className='font-normal'>
								{summary?.market === true ? 'Yes' : 'No'}
							</span>
						)}
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
										Item
									</th>
									<th
										scope='col'
										className='px-6 py-3'
									>
										Value
									</th>
								</tr>
							</thead>
							<tbody className='bg-green'>
								<tr className=' border border-[white] text-[white]'>
									<td className='px-6 py-4 font-medium  border '>DoC Brand</td>
									{skeleton ? (
										<td className='h-4 w-20 bg-white/70 animate-pulse'></td>
									) : (
										<td className='border px-6 py-4'>{summary?.docBrand}</td>
									)}
								</tr>
								<tr className=' border border-[white] text-[white]'>
									<td className='px-6 py-4 font-medium  border '>Feed Brand</td>
									{skeleton ? (
										<td className='h-4 w-20 bg-white/70 animate-pulse'></td>
									) : (
										<td className='border px-6 py-4'>{summary?.feedBrand}</td>
									)}
								</tr>
								<tr className=' border border-[white] text-[white]'>
									<td className='px-6 py-4 font-medium  border '>
										Duration of Production
									</td>
									{skeleton ? (
										<td className='h-4 w-20 bg-white/70 animate-pulse'></td>
									) : (
										<td className='border px-6 py-4'>
											{summary?.durationOfProductionInWeeks} Weeks{' '}
										</td>
									)}
								</tr>

								<tr className=' border border-[white] text-[white]'>
									<td className='px-6 py-4 font-medium  border '>
										Quantity of DoC
									</td>
									{skeleton ? (
										<td className='h-4 w-20 bg-white/70 animate-pulse'></td>
									) : (
										<td className='border px-6 py-4'>
											{summary?.totalWeightGain}
										</td>
									)}
								</tr>

								<tr className=' border border-[white] text-[white]'>
									<td className='px-6 py-4 font-medium  border '>
										Quantity of Feed
									</td>
									{skeleton ? (
										<td className='h-4 w-20 bg-white/70 animate-pulse'></td>
									) : (
										<td className='border px-6 py-4'>
											{summary?.totalFeedRequired / 1000} Kg
										</td>
									)}
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
					action={() =>
						navigate(
							`/farmer/production-plan/production-schedule?plan=${paramValue}`
						)
					}
				/>
			</div>
		</div>
	)
}

export default Summary

function Skeleton() {
	return <div className='w-28 h-4 rounded-md animate-pulse bg-primary/30'></div>
}
