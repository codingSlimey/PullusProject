import React, {useEffect, useState} from 'react'
import Input from '../../components/FARMER/Input'
import Button from '../../components/FARMER/button'
import { useNavigate } from 'react-router-dom'
import Select from  '../../components/FARMER/Select'
import Emodal from '../../modal/EModal'
import FarmersLocation from './FarmersLocation'
// import { getStates } from "../../api";

import axios from 'axios'

function BuyerAdress() {
	const [states, setStates] = useState([])
	const [lgas, setLgas] = useState([])
	const [selectedState, setSelectedState] =useState('')
	const [showModal, setShowModal] = useState(false)
	const [response, setResponse]= useState("")

	const theAnswer = (res)=>{
		setResponse(res)
		if(res === 'yes'){
			console.log('Yaaaaayy')
			setShowModal(false)
			// loader
		}else {
		alert('You have to be on your farm to be able to capture your location')
		setShowModal(false)
		return
	}
}

	const handleSubmit = ()=>{

	} 

	const handleFarmersLocation = ()=>{
		setShowModal(true)		
	}




	useEffect(()=>{
		axios.get('https://pullusafrica.com.ng:8080/apis/v1/pullus/signup/statesAndLga')
		.then(res=>{
			const apiArray = Object.entries(res.data);
			const mappedArray = apiArray.map((item)=>{
				console.log(item[0])
				return {state: item[0], lga: item[1]}

			})
			// console.log(mappedArray)
			setStates(mappedArray)

		})
		.catch(err=>{
			console.log(err)
		})
	}, [])

	const handleStateChange = (e) =>{
		const state = e.target.value
		const selectedState = states.find(item=> item.state === state)
		setLgas(selectedState.lga)
		setSelectedState(state)

	}
	const navigate = useNavigate()
	return (
		<div className='py-10 font-bold h-full flex justify-center'>
			<div className='m-auto w-full max-w-[800px] px-10'>
				<h1 className='font-bold my-5 text-primary text-xl'>Address</h1>
				<div>
					<Input
						type='text'
						placeholder='Country: select Country'
						value='Nigeria'
					/>
					<Select
					name='country'
					id='countries'
					placeholder='country'
					onChange={handleStateChange}
					 >
						<option> Select State</option>
						{states.map((state, index) =>{
							return <option key={index} value={state.state}>{state.state}</option>
						} )}
					</Select>
					<Select
					name='lga'
					id='lgas'
					placeholder='lga'
					 >
						<option> Select LGA</option>
						{lgas.map((lga, index) =>{
							return <option key={index} value={lga}>{lga}</option>
						}
						)}
					</Select>


				
					<Input
						type='text'
						placeholder='Adresss'
					/>
				</div>
				<div className='flex flex-col items-start'>
					<p className='text-primary text-sm'> Capture Address</p>
					<button onClick={handleFarmersLocation} className='font-bold px-2 py-3 rounded-sm text-white bg-fade w-full'>
						Click here to capture GPS Location{' '}
					</button>
					<Input
						type='text'
						placeholder='28, My street, PC414'
						label='Address Details'
					/>
					<div className='flex gap-2'>
						<input
							type='checkbox'
							className='text-primary'
							placeholder='Make this your default address'
						/>
						<label
							htmlFor='check'
							className='text-primary text-sm'
						>
							Make this your default address
						</label>
					</div>
				</div>
				<div className='flex justify-center my-10 items-center'>
					<Button
						title='Continue'
						icon={true}
						color={`fade`}
						action={() => navigate('/buyer/business-info')}
					/>
				</div>
				{showModal && (
            <div
              className={` z-10 fixed bg-modal left-0 top-0 h-screen w-full`}
            >
              <div className="emodal">
                <Emodal modalProps={<FarmersLocation theAnswer={theAnswer} />}/>
              </div>
            </div>
          )}
				
			</div>
		</div>
	)
}

export default BuyerAdress
