import React from 'react'

export default function FarmersLocation({theAnswer}) {
    
  return (
    <div className='my-40   mx-3 md:mx-auto rounded-xl md:w-10/12 lg:w-1/2 h-auto py-10 bg-white' >
        <p className='text-slate-800' > Are you currently on your farm ? </p>
        <div className='flex text-primary gap-5 justify-center my-5 '>
        <button onClick={()=> theAnswer("yes")} className='border px-5 py-1 rounded-md '> Yes </button>
        <button onClick={()=> theAnswer('no')} className='border px-5 py-1 rounded-md'> No</button>

        </div>
        
    </div>
  )
}
