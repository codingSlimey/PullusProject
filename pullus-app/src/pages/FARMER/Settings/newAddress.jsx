import { HiOutlineArrowLeft } from 'react-icons/hi'
import { useNavigate } from 'react-router-dom'

function NewAddress(props) {
	const navigate = useNavigate()

	return (
		<div className='font-bold pb-12'>
			<div className='flex items-center'>
				<button
					onClick={() => navigate('/farmer/settings')}
					className='bg-primary py-1 px-2 rounded-lg mr-4 text-[#fff]'
				>
					<HiOutlineArrowLeft className='h-6 w-6' />
				</button>
				<div className='text-primary  my-6'>New Address</div>
			</div>

			<div className='flex gap-14'>
				<div className='grid  flex-1 gap-y-4'>
					<div className='grid'>
						<label className='mb-3 text-primary'>Street Name</label>
						<input
							type='text'
							placeholder='anthonyadams@domain.comom'
							className='h-14 px-6 placeholder:text-placeholder my-auto shadow-xl bg-[#fff] border-none w-full rounded-full  focus:outline-none focus:border-none '
						/>
					</div>

					<div className='grid mt-4'>
						<label className='mb-3 text-primary'>Country</label>

						<select
							id='countries'
							className='h-14 px-6 placeholder:text-placeholder text-primary font-normal my-auto shadow-xl bg-[#fff] border-none outline-none w-full rounded-full  focus:outline-none focus:border-none '
						>
							<option>United States</option>
							<option>Canada</option>
							<option>France</option>
							<option>Germany</option>
						</select>
					</div>

					<div className='grid mt-4'>
						<label className='mb-3 text-primary'>State</label>
						<select
							id='countries'
							className='h-14 px-6 placeholder:text-placeholder text-primary font-normal my-auto shadow-xl bg-[#fff] border-none outline-none w-full rounded-full  focus:outline-none focus:border-none '
						>
							<option>United States</option>
							<option>Canada</option>
							<option>France</option>
							<option>Germany</option>
						</select>
					</div>

					<div className='grid mt-4'>
						<label className='mb-3 text-primary'>Local Government</label>
						<select
							id='countries'
							className='h-14 px-6 placeholder:text-placeholder text-primary font-normal my-auto shadow-xl bg-[#fff] border-none outline-none w-full rounded-full  focus:outline-none focus:border-none '
						>
							<option>United States</option>
							<option>Canada</option>
							<option>France</option>
							<option>Germany</option>
						</select>
					</div>

					<div className='grid mt-4'>
						<label className='mb-3 text-primary'>Capture Address</label>
						<div className='bg-primary h-12 text-center flex items-center justify-center text-[#fff] cursor-pointer text-xl'>
							Click here to capture GPS Location
						</div>
					</div>

					<div className='grid mt-4'>
						<label className='mb-3 text-primary'>Address Details</label>
						<input
							type='text'
							placeholder='anthonyadams@domain.comom'
							className='h-14 px-6 placeholder:text-placeholder my-auto shadow-xl bg-[#fff] border-none w-full rounded-full  focus:outline-none focus:border-none '
						/>
					</div>

					<div className='flex items-center gap-2 h-14 px-6 mb-6 shadow-xl bg-[#fff] border-none w-full rounded-full  focus:outline-none focus:border-none'>
						<input
							type='checkbox'
							id='remember'
							className='text-primary border-primary focus:text-primary outline-0 box-shadow-outline-sm focus:outline-none focus-within:text-primary focus-visible:text-primary active:text-primary focus:border-primary active:border-primary'
						/>
						<label className='text-primary font-normal'>
							Make this your default address
						</label>
					</div>
				</div>
				<div className='flex-1'>
					<div className='h-[60%] rounded-xl w-full bg-grey'></div>
				</div>
			</div>

			<div className='mt-12 flex justify-center gap-16 '>
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

export default NewAddress
