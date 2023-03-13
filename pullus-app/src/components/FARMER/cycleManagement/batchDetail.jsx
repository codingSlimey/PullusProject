import { FaHeartbeat } from 'react-icons/fa'
import { GiChicken } from 'react-icons/gi'
import { IoAdd } from 'react-icons/io5'

import { useNavigate } from 'react-router-dom'

export default function BatchDetail() {
	const navigate = useNavigate()

	return (
		<div className='text-left'>
			<div>
				<div className='text-primary mb-4'>General Info</div>
				<div className='py-4 shadow-lg rounded-lg px-6 my-4 bg-grey'>
					<div className='flex items-center justify-between font-bold text-primary gap-6'>
						<span>Batch 1 - Nov 2022</span>
						<span className='font-light'>14 - Nov-2022</span>
					</div>
					<hr className='border-primary mt-2 mb-6' />

					<div className='flex items-center justify-between font-bold text-primary gap-6'>
						<span className='font-light'>14 - Nov-2022</span>
						<span>Batch 1 - Nov 2022</span>
					</div>
					<div className='flex mt-2 items-center justify-between font-bold text-primary gap-6'>
						<span className='font-light'>14 - Nov-2022</span>
						<span>Batch 1 - Nov 2022</span>
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
							995 <span className='font-light'>/1000 Alive</span>
						</div>
					</div>

					<div className='flex mb-6 items-center text-primary justify-between  px-8 py-4 shadow-xl rounded-full  bg-[#fff]'>
						<div className='flex gap-3 items-center'>
							<GiChicken className='text-primary text-lg' />
							<span className='font-bold'>Daily Feed Intake</span>
						</div>

						<div className='font-bold'>
							151 g <span className='font-light'>/bird</span>
						</div>
					</div>

					<div className='flex mb-6 items-center text-primary justify-between  px-8 py-4 shadow-xl rounded-full  bg-[#fff]'>
						<div className='flex gap-3 items-center'>
							<FaHeartbeat className='text-primary text-lg' />
							<span className='font-bold'>Body Weight</span>
						</div>

						<div className='font-bold'>Avg 60 g</div>
					</div>

					<div className='flex mb-6 items-center text-primary justify-between  px-8 py-4 shadow-xl rounded-full  bg-[#fff]'>
						<div className='flex gap-3 items-center'>
							<FaHeartbeat className='text-primary text-lg' />
							<span className='font-bold'>Water Intake</span>
						</div>
						<div className='font-bold'>
							0 ml <span className='font-light'>/bird</span>
						</div>
					</div>
				</div>
			</div>

			<div className='mt-16'>
				<div className='text-primary mb-4'>Notes</div>

				<div className='px-4 bg-grey rounded-xl'>
					<textarea
						type='text'
						className='bg-grey w-full rounded-xl border-none px-2 h-40'
					/>
				</div>
			</div>

			<button
				onClick={() => navigate('/farmer/cycle-management/add-data')}
				className='tablet:w-fit w-full px-4 mt-6 flex justify-center items-center bg-fade py-3 rounded-full text-[#fff] shadow-xl my-4'
			>
				Add Data&nbsp;&nbsp;{' '}
				<IoAdd className='mr-3 h-6 w-6 text-[white] font-bold' />
			</button>
		</div>
	)
}
