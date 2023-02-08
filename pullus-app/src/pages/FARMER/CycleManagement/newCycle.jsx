import { useNavigate } from 'react-router-dom'
import { HiOutlineArrowLeft } from 'react-icons/hi'

function NewCycle(props) {
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
				<div className='text-primary  my-6'>Start a New Cycle</div>
			</div>

			<div className='flex gap-16 mt-12'>
				<div className='flex-1'>
					<div className='grid'>
						<label className='mb-3 text-primary'>Start a New Cycle</label>
						<input
							type='text'
							placeholder='Cycle 1'
							className='h-14 px-6 placeholder:text-placeholder mb-6 shadow-xl bg-[#fff] border-none w-full rounded-full  focus:outline-none focus:border-none '
						/>
					</div>

					<div className='grid mt-4'>
						<label className='mb-3 text-primary'>Date (at day one old)</label>
						<input
							type='text'
							placeholder='9/12/2022'
							className='h-14 px-6 placeholder:text-placeholder mb-6 shadow-xl bg-[#fff] border-none w-full rounded-full  focus:outline-none focus:border-none '
						/>
					</div>

					<div className='grid mt-4'>
						<label className='mb-3 text-primary'>Breed</label>
						<input
							type='text'
							placeholder='9/12/2022'
							className='h-14 px-6 placeholder:text-placeholder mb-6 shadow-xl bg-[#fff] border-none w-full rounded-full  focus:outline-none focus:border-none '
						/>
					</div>

					<div className='grid mt-4'>
						<label className='mb-3 text-primary'>Number of Birds</label>
						<input
							type='text'
							placeholder='12,000'
							className='h-14 px-6 placeholder:text-placeholder mb-6 shadow-xl bg-[#fff] border-none w-full rounded-full  focus:outline-none focus:border-none '
						/>
					</div>
				</div>

				<div className='flex-1'></div>
			</div>

			<div className='mt-8 '>
				<button className='w-[30%] bg-primary py-3 rounded-full shadow-xl text-[#fff] mt-8 mb-6'>
					Start Cycle
				</button>
			</div>
		</div>
	)
}

export default NewCycle
