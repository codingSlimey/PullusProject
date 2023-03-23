import React, { useState } from 'react'
// import styles from './styles.module.css'
// import Navbar from '../NAVBAR/Navbar'
// import Footer from '../FOOTER/Footer'
import Button from '../FARMER/button'
import NewPassword from './NewPassword'

export default function ResetPassword() {
	const [display, setDisplay] = React.useState("first")
  const second = () => {
    setDisplay("second")
  }
  
  

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
		<>
		<div   className='my-20   mx-3 md:mx-auto rounded-xl md:w-10/12 lg:w-1/2 h-auto py-10 bg-white' >
		{display === "first" && 
		<div>

      <div className='px-10 py-5 ' >
<div className='flex flex-col items-start md:items-center' >
      <h1 className='text-primary font-bold text-xl' >Forgot Password</h1>
        <h1 className='text-primary items-start' >A code has been sent to +234 *** *** **46 </h1>
      
       </div>
        <div className='my-10'>  
            {input.map((input, index)=>{
                return(
                    <input onFocus={handleInputFocus} type='text' maxLength='1' value={input} onChange={(e)=> handleChange(e, index)}  className= "mx-2 w-14 md:w-20 py-2 px-4 text-center bg-slate-100 text-primary text-2xl rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" />
                )
            })} 
        </div>
         </div>
         <div className='flex justify-center' > 
         <Button
        title=" Continue "
        color={`fade`}
        action={second}
        />
           </div>
    </div> }
	{display === "second" && 
	  <NewPassword   />
	}
		</div>
		</>
	)
}
