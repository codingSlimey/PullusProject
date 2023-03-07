import React from 'react'
import Input from '../components/FARMER/Input'
import Button from '../components/FARMER/button'
import { useNavigate } from 'react-router-dom'

function BuyerBioData() {
    const navigate = useNavigate()
    
  return (
    <div className='my-10 font-bold' >
      <h1 className='text-primary font-bold text-xl' >BioData</h1>
      <div className='w-1/2 mx-auto my-10'>
        <Input type='text' placeholder="Name"/>
        <Input type='text' placeholder="Surname"/>
        <Input type='email' placeholder="Email"/>
        <Input type='tel' placeholder="Phone Number"/>
        <Input type='number' placeholder="Bank Verification Number (BVN)"/>
      </div>
      <div className='flex justify-center' >
      <Button title='Continue' icon={true} color={`fade`} action={()=>navigate('/buyer/address') } />
      </div>
    </div>
  )
}

export default BuyerBioData
