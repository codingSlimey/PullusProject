import React, { useState } from 'react'
import Button from "../../../components/FARMER/button";

function EnterPin() {
    const [input, setInput]= useState(Array(4).fill(null));
    const [isTyped , setIstyped]= useState(false)
    const handleChange = (e, index)=>{
        const {value}= e.target
        const newInput = [...input]
        newInput[index] =value
        setInput(newInput)
        if(newInput){
            setIstyped(true)
        }
    }
    const handleInputFocus = (e) => {
        setTimeout(() =>  {
            e.target.type='password'
        }
        , 1000);
      };
  return (
    <div>
        <div className="py-10 px-15">
        <h1 className="text-primary font-bold text-start mx-20 text-2xl">
          Enter Pin{" "}
        </h1>
        <hr />
      </div>
      <div>
        <h1 className='text-primary' >Enter pin to confirm Top up </h1>
        <div className='my-10'>  
            {input.map((input, index)=>{
                return(
                    <input onFocus={handleInputFocus} type='text' maxLength='1' value={input} onChange={(e)=> handleChange(e, index)}  className= "mx-2 w-20 py-2 px-4 text-center bg-slate-100 text-primary text-2xl rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" />
                )
            })} 
        </div>
         </div>
         <div> 
         <Button
        title=" Continue "
        color={`fade`}
        // action={()=> navigate('/enter-pin')}
        />
           </div>
    </div>
  )
}

export default EnterPin
