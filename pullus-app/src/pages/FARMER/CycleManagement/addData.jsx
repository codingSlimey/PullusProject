import { HiOutlineArrowLeft } from 'react-icons/hi'
import { useNavigate } from 'react-router-dom'

function AddData(props) {
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
				<div className='text-primary  my-6'>Add Data</div>
			</div>

			<div className='flex gap-16 mt-12'>
				<div className='flex-1'>
					<div className='grid'>
						<label className='mb-3 text-primary'>Date of record</label>
						<input
							type='text'
							placeholder='9-12-2022'
							className='h-14 px-6 placeholder:text-placeholder mb-6 shadow-xl bg-[#fff] border-none w-full rounded-full  focus:outline-none focus:border-none '
						/>
					</div>

					<div className='grid mt-4'>
						<label className='mb-3 text-primary'>Mortality</label>
						<input
							type='text'
							placeholder='Number of dead birds'
							className='h-14 px-6 placeholder:text-placeholder mb-6 shadow-xl bg-[#fff] border-none w-full rounded-full  focus:outline-none focus:border-none '
						/>
						<input
							type='text'
							placeholder='Cause'
							className='h-14 px-6 placeholder:text-placeholder mb-6 shadow-xl bg-[#fff] border-none w-full rounded-full  focus:outline-none focus:border-none '
						/>
						<input
							type='text'
							placeholder='Number of sold birds'
							className='h-14 px-6 placeholder:text-placeholder mb-6 shadow-xl bg-[#fff] border-none w-full rounded-full  focus:outline-none focus:border-none '
						/>
					</div>

					<div className='grid mt-4'>
						<label className='mb-3 text-primary'>Feed</label>
						<input
							type='text'
							placeholder='Number of dead birds'
							className='h-14 px-6 placeholder:text-placeholder mb-6 shadow-xl bg-[#fff] border-none w-full rounded-full  focus:outline-none focus:border-none '
						/>
					</div>
				</div>

				<div className='flex-1'>
					<div className='grid'>
						<label className='mb-3 text-primary'>Water</label>
						<input
							type='text'
							placeholder='Total water given (Liters)'
							className='h-14 px-6 placeholder:text-placeholder mb-6 shadow-xl bg-[#fff] border-none w-full rounded-full  focus:outline-none focus:border-none '
						/>
					</div>

					<div className='grid mt-4'>
						<label className='mb-3 text-primary'>Body Weight</label>
						<input
							type='text'
							placeholder='Number of weighed birds'
							className='h-14 px-6 placeholder:text-placeholder mb-6 shadow-xl bg-[#fff] border-none w-full rounded-full  focus:outline-none focus:border-none '
						/>
						<input
							type='text'
							placeholder='Total weight of birds in grams'
							className='h-14 px-6 placeholder:text-placeholder mb-6 shadow-xl bg-[#fff] border-none w-full rounded-full  focus:outline-none focus:border-none '
						/>
					</div>

					<div className='grid mt-4'>
						<label className='mb-3 text-primary'>Egg Production</label>
						<input
							type='text'
							placeholder='Number of full trays'
							className='h-14 px-6 placeholder:text-placeholder mb-6 shadow-xl bg-[#fff] border-none w-full rounded-full  focus:outline-none focus:border-none '
						/>
						<input
							type='text'
							placeholder='Eggs that did not make a full tray'
							className='h-14 px-6 placeholder:text-placeholder mb-6 shadow-xl bg-[#fff] border-none w-full rounded-full  focus:outline-none focus:border-none '
						/>
						<input
							type='text'
							placeholder='Damaged eggs'
							className='h-14 px-6 placeholder:text-placeholder mb-6 shadow-xl bg-[#fff] border-none w-full rounded-full  focus:outline-none focus:border-none '
						/>
					</div>
				</div>
			</div>

			<div className='mt-16 flex gap-16 justify-center'>
				<button className='w-[20%] bg-primary py-3 rounded-full shadow-xl text-[#fff] mt-8 mb-6'>
					Save
				</button>

				<button
					onClick={() => navigate('/farmer/cycle-management')}
					className='w-[20%] flex justify-center items-center bg-[#fff] py-3 rounded-full text-primary shadow-xl my-4'
				>
					Cancel
				</button>
			</div>
		</div>
	)
}

export default AddData
