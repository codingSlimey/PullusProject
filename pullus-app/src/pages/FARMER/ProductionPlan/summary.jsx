import { HiOutlineArrowLeft } from 'react-icons/hi'
import { useNavigate } from 'react-router-dom'
import Button from '../../../components/FARMER/button'


function Summary(props) {
	const navigate = useNavigate()

	return (
		<div className='font-bold pb-12'>
			<div className='flex items-center'>
				<button
					onClick={() => navigate('/farmer/cycle-management')}
					className='bg-primary py-1 px-2 rounded-lg mr-4 text-[#fff]'
				>
					<HiOutlineArrowLeft className='h-6 w-6' />
				</button>
				<div className='text-primary  my-6'>Summary</div>
			</div>

			<div className='flex flex-col md:flex-row items-center gap-16 mt-12'>
				<div className='w-full md:flex-1'>
					<div className='flex gap-2 text-primary mb-3'>
						<span className='font-bold'>Start Date: </span>
						<span className='font-normal'>November 14, 2022 </span>
					</div>
					<div className='flex gap-2 text-primary mb-3'>
						<span className='font-bold'>Number of Birds: </span>
						<span className='font-normal'>1000 </span>
					</div>
					<div className='flex gap-2 text-primary mb-3'>
						<span className='font-bold'>Bird Type: </span>
						<span className='font-normal'>Broilers</span>
					</div>
					<div className='flex gap-2 text-primary mb-3'>
						<span className='font-bold'>Duration of Production: </span>
						<span className='font-normal'>6 Weeks </span>
					</div>
					<div className='flex gap-2 text-primary mb-3'>
						<span className='font-bold'>DoC Brand: </span>
						<span className='font-normal'>OLAM </span>
					</div>
					<div className='flex gap-2 text-primary mb-3'>
						<span className='font-bold'>Feed Brand: </span>
						<span className='font-normal'>Hybrid </span>
					</div>
					<div className='flex gap-2 text-primary mb-3'>
						<span className='font-bold'>Insurance: </span>
						<span className='font-normal'>Yes</span>
					</div>
					<div className='flex gap-2 text-primary mb-3'>
						<span className='font-bold'>Off-take: </span>
						<span className='font-normal'>Yes</span>
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
									<td
										className='px-6 py-4 font-medium  border '
									>
										DoC Brand
									</td>
									<td className='border px-6 py-4'>OLAM</td>
								</tr>
								<tr className=' border border-[white] text-[white]'>
									<td
										className='px-6 py-4 font-medium  border '
									>
										Feed Brand
									</td>
									<td className='border px-6 py-4'>Hybrid</td>
								</tr>
								<tr className=' border border-[white] text-[white]'>
									<td
										className='px-6 py-4 font-medium  border '
									>
										Duration of Production
									</td>
									<td className='border px-6 py-4'>6 weeks</td>
								</tr>

								<tr className=' border border-[white] text-[white]'>
									<td
										className='px-6 py-4 font-medium  border '
									>
										Quantity of DoC
									</td>
									<td className='border px-6 py-4'>1,000</td>
								</tr>

								<tr className=' border border-[white] text-[white]'>
									<td
										className='px-6 py-4 font-medium  border '
									>
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
