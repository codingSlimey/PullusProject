import { HiOutlineArrowLeft } from 'react-icons/hi'
import { useNavigate } from 'react-router-dom'
import Button from '../../../components/FARMER/button'

import { Checkbox } from 'flowbite-react'

function CreateProductionPlan(props) {
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
				<div className='text-primary  my-6'>Create a Production Plan</div>
			</div>

			<div className='flex gap-16 mt-12'>
				<div className='flex-1'>
					<div className='grid'>
						<label className='mb-3 text-primary'>Poultry Type</label>
						<select
							id='countries'
							className='h-14 px-6 placeholder:text-placeholder text-primary font-normal mb-6 shadow-xl bg-[#fff] border-none outline-none w-full rounded-full  focus:outline-none focus:border-none '
						>
							<option>United States</option>
							<option>Canada</option>
							<option>France</option>
							<option>Germany</option>
						</select>
					</div>

					<div className='grid mt-4'>
						<label className='mb-3 text-primary'>Start date</label>
						<input
							type='text'
							placeholder='12.08.2022'
							className='h-14 px-6 placeholder:text-placeholder mb-6 shadow-xl bg-[#fff] border-none w-full rounded-full  focus:outline-none focus:border-none '
						/>
					</div>

					<div className='grid mt-4'>
						<label className='mb-3 text-primary'>
							Number of birds to be reared:
						</label>
						<input
							type='text'
							placeholder='Enter a specific number (minimum of 500)'
							className='h-14 px-6 placeholder:text-placeholder mb-6 shadow-xl bg-[#fff] border-none w-full rounded-full  focus:outline-none focus:border-none '
						/>
					</div>

					<div className='grid mt-4'>
						<label className='mb-3 text-primary'>
							Enter a specific number (minimum of 500)
						</label>
						<select
							id='countries'
							className='h-14 px-6 placeholder:text-placeholder text-primary font-normal mb-6 shadow-xl bg-[#fff] border-none outline-none w-full rounded-full  focus:outline-none focus:border-none '
						>
							<option>United States</option>
							<option>Canada</option>
							<option>France</option>
							<option>Germany</option>
						</select>
					</div>
				</div>

				<div className='flex-1'>
					<div className='grid'>
						<label className='mb-3 text-primary'>DoC brand</label>
						<select
							id='countries'
							className='h-14 px-6 placeholder:text-placeholder text-primary font-normal mb-6 shadow-xl bg-[#fff] border-none outline-none w-full rounded-full  focus:outline-none focus:border-none '
						>
							<option>United States</option>
							<option>Canada</option>
							<option>France</option>
							<option>Germany</option>
						</select>
					</div>

					<div className='grid mt-4'>
						<label className='mb-3 text-primary'>Feed brand</label>
						<select
							id='countries'
							className='h-14 px-6 placeholder:text-placeholder text-primary font-normal mb-6 shadow-xl bg-[#fff] border-none outline-none w-full rounded-full  focus:outline-none focus:border-none '
						>
							<option>United States</option>
							<option>Canada</option>
							<option>France</option>
							<option>Germany</option>
						</select>
					</div>

					<div className='grid mt-4'>
						<label className='mb-3 text-primary'>Additional Services</label>
						<p className='text-[grey] mb-5 text-sm'>
							Select any service(s) you would like to enjoy
						</p>
						<div className='flex items-center gap-2 h-14 px-6 mb-6 shadow-xl bg-[#fff] border-none w-full rounded-full  focus:outline-none focus:border-none'>
							<Checkbox id='remember' />
							<label className='text-primary font-normal'>Insurance</label>
						</div>

						<div className='flex items-center gap-2 h-14 px-6 mb-6 shadow-xl bg-[#fff] border-none w-full rounded-full  focus:outline-none focus:border-none'>
							<Checkbox id='remember' />
							<label className='text-primary font-normal'>
								Off-take (Market)
							</label>
						</div>

						<div className='flex items-center gap-2 h-14 px-6 mb-6 shadow-xl bg-[#fff] border-none w-full rounded-full  focus:outline-none focus:border-none'>
							<Checkbox id='remember' />
							<label className='text-primary font-normal'>Loan</label>
						</div>
					</div>
				</div>
			</div>

			<div className='mt-12 flex justify-center gap-16 '>
				<Button
					title={'Generate production Plan'}
					icon={true}
					color={'primary'}
					action={() => navigate('summary')}
				/>
			</div>
		</div>
	)
}

export default CreateProductionPlan
