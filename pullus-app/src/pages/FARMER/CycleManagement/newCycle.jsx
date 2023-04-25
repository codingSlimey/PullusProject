import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { HiOutlineArrowLeft } from 'react-icons/hi'
import Input from '../../../components/FARMER/Input'
import { createNewCycle } from '../../../api'
import { UpdateFormState } from '../../../utils/setFormState'
import Select from '../../../components/FARMER/Select'
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const inputData = [
	{
		placeholder: 'Cycle 1',
		label: 'Start a New Cycle',
		type: 'text',
		name: 'name',
	},
	{
		placeholder: '9/12/2022',
		label: 'Date (at day one old)',
		type: 'text',
		name: 'startDate',
	},
	// {
	// 	placeholder: 'Broilers',
	// 	label: 'Feed Type',
	// 	type: 'text',
	// 	name: 'feedType',
	// },
	{
		placeholder: 'Broilers',
		label: 'Breed',
		type: 'type',
		name: 'breed',
	},
	{
		placeholder: '12,000',
		label: 'Number of Bird',
		type: 'number',
		name: 'noOfBirds',
	},
]

function NewCycle() {

	const navigate = useNavigate()
	const [isDisabled , setisdisabled] = useState(true)
	const [cycleData, setCycleData] = useState({
		breed: '',
		feedType: '',
		name: '',
		noOfBirds: 0,
		startDate: `${new Date().toISOString().slice(0, 10)}`,
	})

	// Function to handle onChange
	const handleOnchange = (event) => {
		UpdateFormState(
			event.target.name,
			event.target.value,
			cycleData,
			setCycleData
		)
		
	}
	useEffect(() => {
		if(cycleData.startDate && cycleData.noOfBirds && cycleData.name ){
			setisdisabled(false)
			return
		}
		else{
			setisdisabled(true)
			return
		}
	}, [cycleData])

	// Function to create a new cycle
	const submitNewCycle = async () => {
		const data = { ...cycleData }
		console.log(data)
		try{
			const res =  await createNewCycle(data)
			console.log(res);
			toast.success("Successfully Created a Cycle")
			navigate('/farmer/cycle-management')
		}
		catch({response}){
			console.log(response)
			toast.error("An Error occured")
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
									{
									data.name !== 'breed' ?
									<Input
										type={data.type}
										onChange={handleOnchange}
										name={data.name}
										value={cycleData[data.name]}
										placeholder={data.placeholder}
										label={data.label}
									/>
									:
									<Select
										name='breed'
										label='Poultry Type'
										id='poultry-type'
										value={cycleData.breed}
										onChange={handleOnchange}
									>
										<option value={'Broilerss'} >Broilers </option>
										{/* <option value={'Layers (DoC)'} >Layers (DoC) </option>
										<option value={'Noilers'} >Noilers </option>
										<option value={'Turkey'} >Turkey </option> */}
									</Select>
									}
								</div>
								// 	<div>
								// 		<label className='my-3 text-start text-primary' htmlFor='name'> {data.label} </label>
								//     	<input className='h-14 px-6 placeholder:text-placeholder mb-6 shadow-xl bg-[#fff] border-none w-full rounded-full  focus:outline-none focus:border-none' type={data.type} placeholder={data.placeholder} />
								// </div>
							)
						})}
						

					</div>
				</div>

				<div className='flex-1'></div>
			</div>

			<div className='mt-8  flex items-center justify-center'>
				<button
					onClick={submitNewCycle}
					className={`text-xs md:w-1/3  text-center justify-center  py-4 px-10 flex items-center ${
						isDisabled
							? 'disabled:cursor-not-allowed bg-grey filter text-black/40'
							: 'bg-fade text-white'
					}   md:text-base rounded-full shadow-xl  my-auto`}
				>
					Start Cycle
				</button>
			</div>
		</div>
	)
}

export default NewCycle

// "breed": "string",
//   "feedType": "string",
//   "name": "string",
//   "noOfBirds": 0,
//   "startDate": "string"
