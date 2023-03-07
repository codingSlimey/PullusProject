import React from 'react'
import Input from '../components/FARMER/Input'
import Button from '../components/FARMER/button'
import { useNavigate } from 'react-router-dom'

function BuyerAdress() {
    const navigate= useNavigate()
  return (
    <div className='my-10 w-1/2 mx-auto'>
        <h1 className='font-bold text-primary text-xl' >Address</h1>
        <div>
        <Input type="text" placeholder='Country: select country'/>
        <Input type="text" placeholder='State: select state'/>
        <Input type="text" placeholder='City'/>
        <Input type="text" placeholder='Adresss'/>
        </div>
        <div className='flex flex-col items-start' >
            <p className='text-primary text-sm' > Capture Address</p>
        <button className='font-bold px-2 py-3 rounded-sm text-white bg-fade w-full' >Click here to capture GPS Location </button>
        <Input type='text' placeholder='28, My street, PC414' label="Address Details" />
        <div className='flex gap-2'>
        <input type='checkbox' className='text-primary' placeholder='Make this your default address' />
        <label htmlFor='check' className='text-primary text-sm'  >Make this your default address</label>
        </div>
        </div>
        <div className='flex justify-center my-10 items-center'>
        <Button title='Continue' icon={true} color={`fade`} action={()=> navigate('/buyer/business-info')} />
        </div>
    </div>
  )
}

export default BuyerAdress
