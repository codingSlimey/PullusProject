import React from 'react'
import Input from '../components/FARMER/Input'
import Button from '../components/FARMER/button'
import { useNavigate } from 'react-router-dom'

function BusinessInfo() {
    const navigate = useNavigate()
  return (
    <div className='w-1/2 my-10 mx-auto' >
      <h1 className='text-primary font-bold text-xl' >Business Information </h1>
      <div>
        <Input type='text' placeholder='Business Name:'/>
        <Input type='date' placeholder='Registered Date:'/>
        <Input type='number' placeholder='RC Number:'/>
        <Input type='text' placeholder='TIN Number'/>
      </div>
      <div className='flex items-center justify-center ' >
        <Button title='Continue' icon={true} color={`fade`} action={()=> navigate('/buyer/document-upload')}/>
      </div>
    </div>
  )
}

export default BusinessInfo
