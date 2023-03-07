import { HiOutlineArrowLeft } from 'react-icons/hi'
import { useNavigate } from 'react-router-dom'

function AddCard(props) {
	const navigate = useNavigate()

	return (
		<div className='font-bold pb-12'>
			<div className='flex items-center'>
				<button
					onClick={() => navigate('/farmer/settings/card')}
					className='bg-primary py-1 px-2 rounded-lg mr-4 text-[#fff]'
				>
					<HiOutlineArrowLeft className='h-6 w-6' />
				</button>
				<div className='text-primary  my-6'>Add New Card</div>
			</div>

			<div className='flex flex-col md:flex-row gap-14 mt-8'>
				<div className='flex-1'>
					<div className='h-[80%] rounded-xl w-full bg-grey'></div>
				</div>
				<div className='grid  flex-1 gap-y-4'>
					<div className='grid'>
						<label className='mb-3 text-primary'>Card Name</label>
						<input
							type='text'
							placeholder='Anthony Adams'
							className='h-14 px-6 placeholder:text-placeholder my-auto shadow-xl bg-[#fff] border-none w-full rounded-full  focus:outline-none focus:border-none '
						/>
					</div>

					<div className='grid mt-4'>
						<label className='mb-3 text-primary'>Card Number</label>
						<input
							type='text'
							placeholder='2657 8965 5432 1234'
							className='h-14 px-6 placeholder:text-placeholder my-auto shadow-xl bg-[#fff] border-none w-full rounded-full  focus:outline-none focus:border-none '
						/>
					</div>

					<div className='flex gap-16'>
						<div className='grid mt-4'>
							<label className='mb-3 text-primary'>Expiry Date</label>
							<input
								type='text'
								placeholder='13/08/23'
								className='h-14 px-6 placeholder:text-placeholder my-auto shadow-xl bg-[#fff] border-none w-full rounded-full  focus:outline-none focus:border-none '
							/>
						</div>

						<div className='grid mt-4'>
							<label className='mb-3 text-primary'>CVV</label>
							<input
								type='text'
								placeholder='265'
								className='h-14 px-6 placeholder:text-placeholder my-auto shadow-xl bg-[#fff] border-none w-full rounded-full  focus:outline-none focus:border-none '
							/>
						</div>
					</div>
				</div>
			</div>

			<div className='mt-16 flex justify-center gap-16 '>
				<button
					onClick={() => navigate('/farmer/settings')}
					className={`w-[fit] bg-primary text-[#fff] py-4 px-36 flex  items-center rounded-full shadow-xl  my-auto`}
				>
					Add
				</button>
			</div>
		</div>
	)
}

export default AddCard
