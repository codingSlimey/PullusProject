import { HiOutlineArrowLeft } from 'react-icons/hi'
import { useNavigate } from 'react-router-dom'
import Button from '../../../components/FARMER/button'
import Input from '../../../components/FARMER/Input'
import Select from '../../../components/FARMER/Select'

import { Checkbox } from 'flowbite-react'

function CreateProductionPlan(props) {
	const navigate = useNavigate()

	return (
		<div className=' px-3 font-bold pb-12'>
			<div className='flex items-center'>
				<button
					onClick={() => navigate('/farmer/cycle-management')}
					className='bg-primary py-1 px-2 rounded-lg mr-4 text-[#fff]'
				>
					<HiOutlineArrowLeft className='h-6 w-6' />
				</button>
				<div className='text-primary  my-6'>Create a Production Plan</div>
			</div>

			<div className='flex flex-col md:flex-row gap-16 mt-12'>
				<div className='flex-1'>
					<div className='grid'>
						<Select name="poultry" label='Poultry Type' id='countries'>
							<option >Broilers </option>
							<option>Layers (DoC) </option>
							<option>Noilers </option>
							<option>Turkey </option>


						</Select>
					</div>
					<div className='grid mt-4'>
					  <Input type='text' placeholder='12.08.2022' label='Start date' />
					</div>

					<div className='grid mt-4'>
						<Input type='text' placeholder="Enter a specific number (minimum)" label='Number of birds to be reared:'/>
					</div>
					<div className='grid mt-4'>
						<Select label='Enter a specific number (minimum of 500)' id="minimum" name='mimimum'>
							{[...Array(23)].map((_, i )=>{
								const num = i +3
								return(
									<option>{num + 1}</option>
								)
							})}
						</Select>
					</div>
				</div>

				<div className='flex-1'>
					<div className='grid'>
					<Select label='Doc brand' id='feed' name='feed'>
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
						<Select label='Feed brand' id='brand' name='brand'>
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
							<Checkbox id='remember' />
							<label className='text-primary font-normal'>
								Insurance
							</label>
						</div>

						<div className='flex items-center gap-2 h-14 px-6 mb-6 shadow-xl bg-[#fff] border-none w-full rounded-full  focus:outline-none focus:border-none'>
							<Checkbox id='remember' />
							<label className='text-primary font-normal'>
								Off-take (Market)
							</label>
						</div>

						<div className='flex  items-center gap-2 h-14 px-6 mb-6 shadow-xl bg-[#fff] border-none w-full rounded-full  focus:outline-none focus:border-none'>
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
					color={'fade'}
					action={() => navigate('summary')}
				/>
			</div>
		</div>
	)
}

export default CreateProductionPlan
