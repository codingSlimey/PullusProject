import { HiOutlineArrowLeft } from 'react-icons/hi'
import { useNavigate } from 'react-router-dom'
import Button from '../../../components/FARMER/button'
import BroilersTable from '../../../constants/BroilersTable'
import useGetProductionPlan from '../../../hooks/ProductionPlan/useGetProductionPlan'

function ProductionSchedule() {
	const navigate = useNavigate()

	const { summary, skeleton } = useGetProductionPlan()

	return (
		<div className='font-bold pb-12 '>
			<div className='flex items-center'>
				<button
					onClick={() => window.history.back()}
					className='bg-primary py-1 px-2 rounded-lg mr-4 text-[#fff]'
				>
					<HiOutlineArrowLeft className='h-6 w-6' />
				</button>
				<div className='text-primary  my-6'>Schedule</div>
			</div>

			<div className='grid gap-16 mt-12'>
				<div className=''>
					<div className='flex gap-2 text-primary mb-3'>
						<span className='font-bold'>Number of Birds: </span>
						{skeleton ? (
							<Skeleton />
						) : (
							<span className='font-normal'>{summary?.noOfBirds} </span>
						)}
					</div>
					<div className='flex gap-2 text-primary mb-3'>
						<span className='font-bold'>Hatchery: </span>
						{skeleton ? (
							<Skeleton />
						) : (
							<span className='font-normal'>{summary?.docBrand} </span>
						)}
					</div>
					<div className='flex gap-2 text-primary mb-3'>
						<span className='font-bold'>Quantity of Feed: </span>
						{skeleton ? (
							<Skeleton />
						) : (
							<span className='font-normal'>
								{summary?.totalFeedRequired / 1000} Kg
							</span>
						)}
					</div>
				</div>

				<div className='overflow-x-auto'>
					<table className='w-full  max-tablet:overflow-x-auto text-sm text-left  border-collapse border border-slate-400'>
						<thead className='text-xs  uppercase bg-primary text-[#fff] border border-[white]'>
							<tr className=''>
								<th
									scope='col'
									className=' px-6 py-3'
								>
									Age
								</th>
								{/* <th
									scope='col'
									className='px-6 py-3'
								>
									Week
								</th>
								<th
									scope='col'
									className='px-6 py-3'
								>
									Quantity
								</th> */}
								<th
									scope='col'
									className='px-6 py-3'
								>
									Activity
								</th>
								<th
									scope='col'
									className='px-6 py-3'
								>
									Routine
								</th>
								{/* <th
									scope='col'
									className='px-6 py-3'
								>
									Description
								</th> */}
							</tr>
						</thead>
						<tbody className='bg-green'>
							{BroilersTable.map((item, index) => {
								return (
									<tr
										key={index}
										className=' border border-[white] text-[white]'
									>
										<td className='px-6 py-4 font-medium  border '>
											{item.age}
										</td>
										{/* <td className='border px-6 py-4'>1</td> */}
										{/* <td className='border px-6 py-4'>990</td> */}
										<td className='border px-6 py-4'>Vaccine</td>
										<td className='border px-6 py-4'>{item.activity}</td>
										{/* <td className='border px-6 py-4'>Done at the hatchery</td> */}
									</tr>
								)
							})}
						</tbody>
					</table>
				</div>
			</div>

			<div className='mt-12 flex justify-center gap-16 '>
				<Button
					title={'Proceed to Marketplace'}
					icon={true}
					color={'fade'}
					action={() => navigate('/market-place')}
				/>
			</div>
		</div>
	)
}

export default ProductionSchedule

function Skeleton() {
	return <div className='w-28 h-4 rounded-md animate-pulse bg-primary/30'></div>
}
