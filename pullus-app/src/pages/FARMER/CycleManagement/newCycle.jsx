import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { HiOutlineArrowLeft } from 'react-icons/hi'
import Input from '../../../components/FARMER/Input'
import { createNewCycle } from '../../../api'
import { UpdateFormState } from '../../../utils/setFormState'
import Select from '../../../components/FARMER/Select'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Button from '../../../components/FARMER/button'
import useCreateNewCycleForm from '../../../hooks/FormValidators/useCreateNewCycleForm'

const inputData = [
	{
		placeholder: 'Cycle 1',
		label: 'Start a New Cycle',
		type: 'text',
		inputName: 'name',
	},
	{
		placeholder: '9/12/2022',
		label: 'Date (at day one old)',
		type: 'text',
		inputName: 'startDate',
	},
	{
		placeholder: 'Broilers',
		label: 'Breed',
		type: 'type',
		inputName: 'breed',
	},
	{
		placeholder: '12,000',
		label: 'Number of Bird',
		type: 'number',
		inputName: 'noOfBirds',
	},
]

function NewCycle() {
	const navigate = useNavigate()
	const [loading, setLoading] = useState(false)
	const [cycleData, setCycleData] = useState({
		breed: '',
		feedType: '',
		name: '',
		noOfBirds: 0,
		startDate: `${new Date().toISOString().slice(0, 10)}`,
	})

	//Form validation hook
	const { errors, validateField, validateForm } = useCreateNewCycleForm()

	// Function to handle onChange
	const handleOnchange = (event) => {
		validateField(event.target.name, event.target.value)
		UpdateFormState(
			event.target.name,
			event.target.value,
			cycleData,
			setCycleData
		)
	}

	// Function to create a new cycle
	const submitNewCycle = async () => {
		console.log(cycleData)
		const isValid = validateForm(cycleData)
		if (isValid) {
			const data = { ...cycleData }
			setLoading(true)
			try {
				const res = await createNewCycle(data)
				console.log(res)
				setLoading(false)
				toast.success('Successfully Created a Cycle')
				navigate('/farmer/cycle-management')
			} catch ({ response }) {
				const { data } = response
				toast.error(data.message)
				setTimeout(() => {
					setLoading(false)
				}, 5000)
			}
		} else {
			toast.error('Please fill all input fields')
		}
	}

	return (
		<div className='font-bold pb-12'>
			<div className='flex items-center'>
				<button
					onClick={() => navigate('/farmer/cycle-management')}
					className='bg-primary py-1 px-2 rounded-lg mr-4 text-[#fff]'
				>
					<HiOutlineArrowLeft className='h-6 w-6' />
				</button>
				<div className='text-primary  my-6'>Start a New Cycle </div>
			</div>

			<div className='md:flex gap-16 mt-12'>
				<div className='   md:flex-1'>
					<div className='flex flex-col md:grid'>
						{inputData.map((data, i) => {
							return (
								<div key={i}>
									{data.inputName !== 'breed' ? (
										<Input
											type={data.type}
											onChange={handleOnchange}
											name={data.inputName}
											value={cycleData[data.inputName]}
											placeholder={data.placeholder}
											label={data.label}
											error={errors[data.inputName]}
										/>
									) : (
										<Select
											name='breed'
											label='Poultry Type'
											id='poultry-type'
											value={cycleData.breed}
											onChange={handleOnchange}
											error={errors.breed}
										>
											<option> Select Breed Type</option>
											<option value={'Broilers'}>Broilers </option>
											{/* <option value={'Layers (DoC)'} >Layers (DoC) </option>
										<option value={'Noilers'} >Noilers </option>
										<option value={'Turkey'} >Turkey </option> */}
										</Select>
									)}
								</div>
							)
						})}
					</div>
				</div>

				<div className='flex-1'></div>
			</div>

			<div className='mt-8  flex items-center justify-center'>
				<Button
					action={submitNewCycle}
					color={'fade'}
					title={'Start Cycle'}
					extraClass={`font-bold text-xl`}
					loading={loading}
				/>
			</div>
		</div>
	)
}

export default NewCycle
