import { HiOutlineArrowLeft } from 'react-icons/hi'
import { useNavigate } from 'react-router-dom'
import Button from '../../../components/FARMER/button'
import Input from '../../../components/FARMER/Input'
import Select from '../../../components/FARMER/Select'
import { UpdateFormState } from '../../../utils/setFormState'
import { createProductionPlan } from '../../../api'

import { Checkbox } from 'flowbite-react'
import { useState } from 'react'
import useCreateProductionPlanForm from '../../../hooks/FormValidators/useCreateProductionPlanForm'

function CreateProductionPlan() {
	const navigate = useNavigate()

	const [loading, setLoading] = useState(false)

	const [productionPlanForm, setProductionPlanForm] = useState({
		poultryType: '',
		startDate: `${new Date().toISOString().slice(0, 10)}`,
		noOfBirds: '',
		durationOfProductionInWeeks: '',
		docBrand: '',
		feedBrand: '',
		insurance: false,
		loan: false,
		market: false,
		name: '',
	})

	//Form validation hook
	const { errors, validateField, validateForm } = useCreateProductionPlanForm()

	// Function to handle onChange
	const handleOnchange = (event) => {
		let fieldValue
		if (
			event.target.type === 'number' ||
			event.target.name === 'durationOfProductionInWeeks'
		) {
			fieldValue = parseFloat(event.target.value)
		} else if (event.target.type === 'checkbox') {
			fieldValue = event.target.checked
		} else {
			fieldValue = event.target.value
		}

		validateField(event.target.name, event.target.value)
		UpdateFormState(
			event.target.name,
			fieldValue,
			productionPlanForm,
			setProductionPlanForm
		)
	}

	// Function to Submit the form
	const handleSubmit = async () => {
		console.log(productionPlanForm)
		const isValid = validateForm(productionPlanForm)
		if (isValid) {
			setLoading(true)
			try {
				const res = await createProductionPlan(productionPlanForm)
				console.log(res)
				setLoading(false)
				navigate(`summary?plan=${productionPlanForm.name}`)
			} catch (error) {
				console.log(error)
			}
		}
	}

	return (
		<div className=' px-3 font-bold pb-12 text-left'>
			<div className='flex items-center'>
				<button
					onClick={() =>
						navigate('/farmer/production-plan/create-production-plan')
					}
					className='bg-primary py-1 px-2 rounded-lg mr-4 text-[#fff]'
				>
					<HiOutlineArrowLeft className='h-6 w-6' />
				</button>
				<div className='text-primary  my-6'>Create a Production Plan</div>
			</div>

			<div className='flex flex-col md:flex-row gap-16 mt-12'>
				<div className='flex-1'>
					<div className='grid '>
						<Input
							type='text'
							placeholder='Name of production plan'
							label='Name of Plan'
							name='name'
							onChange={handleOnchange}
							value={productionPlanForm.name}
							error={errors.name}
						/>
					</div>
					<div className='grid mt-4'>
						<Select
							name='poultryType'
							label='Poultry Type'
							id='poultry-type'
							onChange={handleOnchange}
							value={productionPlanForm.poultryType}
							error={errors.poultryType}
						>
							<option>Select a Poultry Type *</option>
							<option>Broilers </option>
							<option>Layers (DoC) </option>
							<option>Noilers </option>
							<option>Turkey </option>
						</Select>
					</div>
					<div className='grid mt-4'>
						<Input
							type='text'
							placeholder='12.08.2022'
							label='Start date'
							name='startDate'
							onChange={handleOnchange}
							value={productionPlanForm.startDate}
							error={errors.startDate}
						/>
					</div>

					<div className='grid mt-4'>
						<Input
							type='number'
							placeholder='Enter a specific number'
							label='Number of birds to be reared:'
							name='noOfBirds'
							onChange={handleOnchange}
							value={productionPlanForm.noOfBirds}
							error={errors.noOfBirds}
						/>
					</div>
					<div className='grid mt-4'>
						<Select
							label='Duration of Production (weeks)'
							id='duration'
							name='durationOfProductionInWeeks'
							onChange={handleOnchange}
							value={productionPlanForm.durationOfProductionInWeeks}
							error={errors.durationOfProductionInWeeks}
						>
							<option>Select the duration *</option>
							{[...Array(23)].map((_, i) => {
								const num = i + 3
								return (
									<option
										value={num}
										key={i}
									>
										{num + 1}
									</option>
								)
							})}
						</Select>
					</div>
				</div>

				<div className='flex-1'>
					<div className='grid'>
						<Select
							label='Doc brand'
							name='docBrand'
							onChange={handleOnchange}
							value={productionPlanForm.docBrand}
							error={errors.docBrand}
						>
							<option>Select a Doc brand *</option>
							<option>Agrited </option>
							<option>Amo </option>
							<option>CHI</option>
							<option>Farm Support</option>
							<option>Fidan</option>
							<option>OLAM</option>
							<option>Sayed</option>
							<option> Zartech </option>
						</Select>
					</div>

					<div className='grid mt-4'>
						<Select
							label='Feed brand'
							name='feedBrand'
							onChange={handleOnchange}
							value={productionPlanForm.feedBrand}
							error={errors.feedBrand}
						>
							<option>Select a Feed brand *</option>
							<option>Breedwell </option>
							<option>Chikun </option>
							<option>Hybrid </option>
							<option> Sunseed </option>
							<option> Ultima</option>
							<option> TopFeed</option>
							<option>VitaFeed </option>
						</Select>
					</div>

					<div className='grid mt-4'>
						<label className='mb-3 text-primary'>Additional Services</label>
						<p className='text-[grey] mb-5 text-sm'>
							Select any service(s) you would like to enjoy
						</p>

						<div className='flex items-center gap-2 h-14 px-6 mb-6 shadow-xl bg-[#fff] border-none w-full rounded-full  focus:outline-none focus:border-none'>
							<Checkbox
								name='insurance'
								onChange={handleOnchange}
								value={productionPlanForm.insurance}
							/>
							<label className='text-primary font-normal'>Insurance</label>
						</div>

						<div className='flex items-center gap-2 h-14 px-6 mb-6 shadow-xl bg-[#fff] border-none w-full rounded-full  focus:outline-none focus:border-none'>
							<Checkbox
								name='market'
								onChange={handleOnchange}
								value={productionPlanForm.market}
							/>
							<label className='text-primary font-normal'>
								Off-take (Market)
							</label>
						</div>

						<div className='flex  items-center gap-2 h-14 px-6 mb-6 shadow-xl bg-[#fff] border-none w-full rounded-full  focus:outline-none focus:border-none'>
							<Checkbox
								name='loan'
								onChange={handleOnchange}
								value={productionPlanForm.loan}
							/>
							<label className='text-primary font-normal'>Loan</label>
						</div>
					</div>
				</div>
			</div>

			<div className='mt-12 flex  justify-center  '>
				<Button
					title={'Generate production Plan'}
					icon={true}
					color={'fade'}
					action={handleSubmit}
					extraClass={''}
					loading={loading}
				/>
			</div>
		</div>
	)
}

export default CreateProductionPlan
