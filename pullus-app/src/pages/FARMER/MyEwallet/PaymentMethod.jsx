import React from 'react'
import { useNavigate } from 'react-router-dom'
import Input from '../../../components/FARMER/Input'
import {FaPaypal} from "react-icons/fa"
import {FaCcMastercard} from "react-icons/fa"
import Button from "../../../components/FARMER/button";

function PaymentMethod() {
  const navigate = useNavigate()
  const data= [
    {title: 'Paystack', 
    icon: <FaPaypal className="text-primary" />
  },
  {
    title: 'Flutter Wave',
    icon: <FaPaypal className="text-primary" />
  },
  {
    title: '***** **** **** 1234',
    icon: <FaCcMastercard className="text-primary" />

  }
  ]
  return (
    <div>
      <div className="py-10 px-15">
        <h1 className="text-primary font-bold text-start mx-20 text-2xl">
          Top up Wallet{" "}
        </h1>
        <hr />
      </div>
      <div className='flex flex-col justify-center items-center gap-3'  >
        <p className="text-primary py-5"> Select the top up method you want to use </p> 
       {data.map((item, index) => {
        return (
        <div key={index} className=' shadow-xl bg-[#fff] border-none w-1/4 flex items-center my-4 justify-between rounded-full px-5' >
            <label htmlFor="paystack" className="mb-3 flex items-center gap-2 text-primary"> {item.icon}  {item.title} </label>
            <input type='radio' name='paystack' className='text-primary' />
        </div>
      ) })}
      </div>
      <div className=' flex  justify-center items-center my-10'>
      <Button
        title=" Continue "
        color={`fade`}
        action={()=> navigate('/enter-pin')}
        />
      </div>
      
    </div>
  )
}

export default PaymentMethod
