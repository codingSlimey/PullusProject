import { HiOutlineArrowLeft } from 'react-icons/hi'
import { useNavigate } from 'react-router-dom'
import Input from '../../../components/FARMER/Input'
import { useState } from 'react'
import { UpdateFormState } from '../../../utils/setFormState'

function AddData() {
	const navigate = useNavigate()

	const [cycleDataForm, setCycleDataForm] = useState({
		causeOfDeadBirds: '',
		cycleManagementName: '',
		damagedEggs: 0,
		dateOfRecord: `${new Date().toISOString().slice(0, 10)}`,
		feedInKg: 0,
		noOfDeadBirds: 0,
		noOfEggsFullTrays: 0,
		noOfLeftOverEggs: 0,
		noOfSoldBirds: 0,
		noOfWeighedBirds: 0,
		totalWeightOfBirdsInGrams: 0,
		waterInLitres: 0,
	})

	// Function to handle onChange
	const handleOnchange = (event) => {
		UpdateFormState(
			event.target.name,
			event.target.value,
			cycleDataForm,
			setCycleDataForm
		)
	}

	const handleSubmit = () => {
		console.log(cycleDataForm)
	}

	return (
		<div className=' px-3 font-bold pb-12'>
			<div className='flex items-center'>
				<button
					onClick={() => navigate('/farmer/cycle-management')}
					className='bg-primary py-1 px-2 rounded-lg mr-4 text-[#fff]'
				>
					<HiOutlineArrowLeft className='h-6 w-6' />
				</button>
				<div className='text-primary  my-6'>Add Data</div>
			</div>

			<div className='flex flex-col md:flex-row gap-16 mt-12'>
				<div className='flex-1'>
					<div className='grid'>
						<Input
							type='text'
							placeholder='12.08.2022'
							label='Date of record'
							value={cycleDataForm.dateOfRecord}
						/>
					</div>

					<div className='grid mt-4'>
						<Input
							type='text'
							placeholder='Number of dead birds'
							label='Mortality'
							name='noOfDeadBirds'
							value={cycleDataForm.noOfDeadBirds}
							onChange={handleOnchange}
						/>
						<Input
							type='text'
							placeholder='Cause'
							name='causeOfDeadBirds'
							value={cycleDataForm.causeOfDeadBirds}
							onChange={handleOnchange}
						/>
						<Input
							type='text'
							placeholder='Number of Solid birds'
							name='noOfSoldBirds'
							value={cycleDataForm.noOfSoldBirds}
							onChange={handleOnchange}
						/>
					</div>

					<div className='grid mt-4'>
						<Input
							type='text'
							placeholder='Total feeds given (Kilogram)'
							label='Feed'
							name='feedInKg'
							value={cycleDataForm.feedInKg}
							onChange={handleOnchange}
						/>
					</div>
				</div>

				<div className='flex-1'>
					<div className='grid'>
						<Input
							type='text'
							placeholder='Total water given (Liters)'
							label='Water'
							name='waterInLitres'
							value={cycleDataForm.waterInLitres}
							onChange={handleOnchange}
						/>
					</div>

					<div className='grid mt-4'>
						<Input
							type='text'
							placeholder='Number of weighed birds'
							label='Body Weight'
							name='noOfWeighedBirds'
							value={cycleDataForm.noOfWeighedBirds}
							onChange={handleOnchange}
						/>
						<Input
							type='text'
							placeholder='Total weight of birds in grams'
							name='totalWeightOfBirdsInGrams'
							value={cycleDataForm.totalWeightOfBirdsInGrams}
							onChange={handleOnchange}
						/>
					</div>

					{/* <div className='grid mt-4'>
						<Input
							type='text'
							placeholder='Number of full trays'
							label='Egg Production'
							name='noOfEggsFullTrays'
							value={cycleDataForm.noOfEggsFullTrays}
							onChange={handleOnchange}
						/>
						<Input
							type='text'
							placeholder='Eggs that did not make a full day'
							name='noOfLeftOverEggs'
							value={cycleDataForm.noOfLeftOverEggs}
							onChange={handleOnchange}
						/>
						<Input
							type='text'
							placeholder='Damaged eggs'
							name='damagedEggs'
							value={cycleDataForm.damagedEggs}
							onChange={handleOnchange}
						/>
					</div> */}
				</div>
			</div>

			<div className='mt-16 flex gap-16 justify-center'>
				<button
					onClick={handleSubmit}
					className='w-[20%] bg-fade py-3 rounded-full shadow-xl text-[#fff] mt-8 mb-6'
				>
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
