import { HiOutlineArrowLeft } from 'react-icons/hi'
import { useNavigate } from 'react-router-dom'
import Input from '../../../components/FARMER/Input'

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
						<Input type='text' placeholder='12.08.2022' label='Date of record' />
					</div>

					<div className='grid mt-4'>
						<Input type='text' placeholder='Number of dead birds' label='Mortality' />
						<Input type='text' placeholder='Cause' />
						<Input type='text' placeholder='Number of Solid birds' />
					</div>

					<div className='grid mt-4'>
						<Input type='text' placeholder='Number of Dead birds' label='Feed'/>
					</div>
				</div>

				<div className='flex-1'>
					<div className='grid'>
						<Input type='text' placeholder='Total water given (Liters)' label='Water' />
					</div>

					<div className='grid mt-4'>
						<Input type='text' placeholder='Number of weighed birds' label='Body Weight' />
						<Input type='text' placeholder='Total weight of birds in grams' />
					</div>

					<div className='grid mt-4'>
						<Input type='text' placeholder='Number of full trays' label='Egg Production' />
						<Input type='text' placeholder='Eggs that did not make a full day' />
						<Input type='text' placeholder='Damaged eggs' />
					</div>
				</div>
			</div>

			<div className='mt-16 flex gap-16 justify-center'>
				<button className='w-[20%] bg-fade py-3 rounded-full shadow-xl text-[#fff] mt-8 mb-6'>
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
