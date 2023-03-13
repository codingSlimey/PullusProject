import React from 'react'
import { useNavigate } from 'react-router-dom'
import Input from '../../../components/FARMER/Input'
import {FaPaypal} from "react-icons/fa"
import {FaCcMastercard} from "react-icons/fa"
import Button from "../../../components/FARMER/button";
import EnterPin from './EnterPin'
import TopUpWallet from './TopUpWallet'
import OrderSucessModal from './OrderSucess'

function PaymentMethod() {
  const [display, setDisplay] = React.useState("first")
  const second = () => {
    setDisplay("second")
  }
  const third = () => {
    setDisplay("third")
  }
  const fourth = () => {
    setDisplay("fourth")
  }
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
    
    <div className='my-20   mx-3 md:mx-auto rounded-xl md:w-10/12 lg:w-1/2 h-auto py-10 bg-white '  >
      {display === "second" && (
        <div>
          <div>
        <h1 className="text-primary font-bold text-2xl">
          Top up Wallet{" "}
        </h1>
        <hr />
      </div>
      <div className='flex flex-col mx-3 justify-center items-center gap-3'  >
        <p className="text-primary py-5"> Select the top up method you want to use </p> 
       {data.map((item, index) => {
        return (
        <div key={index} className=' shadow-xl bg-[#fff] border-none w-full md:w-1/2 flex items-center my-4 justify-between rounded-full px-5' >
            <label htmlFor="paystack" className="mb-3 flex items-center gap-2 text-primary"> {item.icon}  {item.title} </label>
            <input type='radio' name='paystack' className='text-primary' />
        </div>
      ) })}
      </div>
      <div className=' flex  justify-center items-center my-10'>
      <Button
        title=" Continue "
        color={`fade`}
        action={third}
        />
      </div>
      
        </div>
      )}
      { display === "third" &&
      <div>
      <EnterPin action={fourth}/>
      </div>
      }
      {display === 'first' &&
      <div>
        <TopUpWallet action={second} />
        </div>
      }
      {
        display === 'fourth' &&
        <div>      
        <OrderSucessModal action={second} />
          </div>
      }
    </div>
  )
}

export default PaymentMethod
